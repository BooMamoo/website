<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Session;
use GuzzleHttp\Client;
// use Crypt;

class UserController extends Controller
{
    public function index()
    {
        return $this->check(Session::get('user'));
    }

    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $ip = config('ip');
        $url = $ip . '/auth/login';
        $client = new Client();

        $response = $client->request('POST', $url, [
            'json' => [
                'email' => $email, 
                'password' => $password
            ]
        ]);

        $content = $response->getBody()->getContents();

        if($response->getBody()->getContents() != 'error')
        {
            $object = json_decode($response->getBody());
            $object->password = $password;
            // $object->password = Crypt::encrypt($password);
            // $object->password = bcrypt($password);
            
            Session::put('user', $object);
            
            return $content;
        }
        else
        {
            return "error";
        }
    }

    public function register(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $password_confirmation = $request->input('password_confirmation');

        $ip = config('ip');
        $url = $ip . '/auth/register';
        $client = new Client();

        $response = $client->request('POST', $url, [
            'json' => [
                'name' => $name,
                'email' => $email, 
                'password' => $password,
                'password_confirmation' => $password_confirmation
            ]
        ]);

        return $response->getBody()->getContents();
    }

    public function logout() 
    {
        Session::forget('user');

        return redirect()->route('root');
    }

    public function local(Request $request) 
    {
        $name = $request->input('name');
        $place = $request->input('place');
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');

        $ip = config('ip');
        $url = $ip . '/admin/local';
        $client = new Client();

        $email = Session::get('user')->email;
        $password = Session::get('user')->password;

        $response = $client->request('POST', $url, [
            'json' => [
                'name' => $name,
                'place' => $place,
                'latitude' => $latitude,
                'longitude' => $longitude
            ], 'auth' => [$email, $password, 'basic']
        ]);

        return $response->getBody()->getContents();
    }

    public function check($user)
    {
        if(empty($user))
        {
            return "none";
        }
        else if($user->isAdmin)
        {
            return "admin";
        }
        else if($user->canView)
        {
            return "view";
        }
        else
        {
            return "none";
        }
    }
}

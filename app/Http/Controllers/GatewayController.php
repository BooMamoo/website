<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use File;
use GuzzleHttp\Client;
use Session;

class GatewayController extends Controller
{
	public function index()
    {
    	if($this->check(Session::get('user')))
        {
        	$email = Session::get('user')->email;
            $password = Session::get('user')->password;

	        $ip = config('ip');
	        $url = $ip . '/api/gateway';
	        $client = new Client();
	        $response = $client->request('GET', $url, [
                'auth' => [$email, $password, 'basic']
            ]);

	        return $response->getBody()->getContents();
	    }
        else
        {
            return 'Unauthorized';
        }
    }

    public function store(Request $request)
	{
		if($request->hasFile('file'))
		{
			$files = $request->file('file');
			$path = $files->getRealPath();
			$contents = file($files->getRealPath());
			$name = $request->input('name');

			$ip = config('ip');
		    $url = $ip . '/store/gateway';
		    $client = new Client();

		    $email = Session::get('user')->email;
		    $password = Session::get('user')->password;

		    $response = $client->request('POST', $url, [
		        'json' => [
		            'name' => $name,
		            'contents' => $contents
		        ], 
		        'auth' => [
		        	$email, $password, 'basic'
		        ]
		    ]);

		    return $response->getBody()->getContents();
		}
	}

	public function download($gateway_id)
	{
		if($this->check(Session::get('user')))
        {
        	$path = config('path');
        	$email = Session::get('user')->email;
            $password = Session::get('user')->password;

	        $ip = config('ip');
	        $url = $ip . '/download/gateway/' . $gateway_id;
	        $client = new Client();
	        $response = $client->request('GET', $url, [
                'auth' => [$email, $password, 'basic']
            ]);

	        $gateway = json_decode($response->getBody()->getContents());
	        $file_name = $path . 'public/file/' . $gateway->name;

			touch($file_name);
    		chmod($file_name, 0777);
			$open = fopen($file_name, "w") or die ("Unable to open file!");
			fwrite($open, $gateway->content);
			fclose($open);
	    }
        else
        {
            return 'Unauthorized';
        }
	}

	public function check($user)
    {
        if(empty($user))
        {
            return false;
        }
        else if($user->canView)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

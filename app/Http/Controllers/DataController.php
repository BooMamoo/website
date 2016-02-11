<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class DataController extends Controller
{
    public function local()
    {
        $ip = config('ip');
        $url = $ip . '/api/local';
        $client = new Client();
        $response = $client->request('GET', $url);

        return $response->getBody()->getContents();
    }

    public function device($local_id)
    {
    	$ip = config('ip');
    	$url = $ip . '/api/local/'. $local_id .'/device';
        $client = new Client();
        $response = $client->request('GET', $url);

        return $response->getBody()->getContents();
    }

    public function getInfo($device_id)
    {
    	$ip = config('ip');
    	$url = $ip . '/api/device/' . $device_id . '/info';
        $client = new Client();
        $response = $client->request('GET', $url);
        
        return $response->getBody()->getContents();
    }

    public function getData($device_id, $type_id)
    {
    	$ip = config('ip');
    	$url = $ip . '/api/device/' . $device_id . '/type/' . $type_id .'/data';
        $client = new Client();
        $response = $client->request('GET', $url);
        
        return $response->getBody()->getContents();
    }

    public function chart($device_id, $type_id)
    {
        $ip = config('ip');
        $url = $ip . '/api/device/' . $device_id . '/type/' . $type_id .'/chart';
        $client = new Client();
        $response = $client->request('GET', $url);
        
        return $response->getBody()->getContents();
    }

    public function netpie()
    {
        $url = 'https://api.netpie.io/topic/IoTPlatform/data';
        $app_key = 'rTnHIcnAKU6A2uu';
        $app_secret = 'BIecBfLtiXPL3H7RpmmYFdVrl9HKWs';

        $client = new Client();

        $response = $client->request('GET', $url, [
            'auth' => [$app_key, $app_secret]
        ]);

        return $response->getBody()->getContents();
    }
}

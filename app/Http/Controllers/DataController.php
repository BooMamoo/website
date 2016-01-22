<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class DataController extends Controller
{
    public function device()
    {
    	$ip = config('ip');
    	$url = $ip . '/api/device';
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
}

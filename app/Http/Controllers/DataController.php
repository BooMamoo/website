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
    	$url = 'http://192.168.1.50/api/device';
        $client = new Client();
        $response = $client->request('GET', $url);

        return $response->getBody()->getContents();
    }
}

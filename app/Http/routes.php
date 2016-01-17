<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/data/device', 'DataController@device');

Route::get('/', 'IndexController@index');
Route::get('{any}', 'IndexController@index')->where('any', '.*');
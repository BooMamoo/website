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

Route::get('/data/local', 'DataController@local');
Route::get('/data/local/{local_id}/device', 'DataController@device');
Route::get('/data/device/{device_id}/info', 'DataController@getInfo');
Route::get('/data/device/{device_id}/type/{type_id}/data', 'DataController@getData');
Route::get('/data/device/{device_id}/type/{type_id}/chart', 'DataController@chart');

Route::get('/', 'IndexController@index');
Route::get('{any}', 'IndexController@index')->where('any', '.*');
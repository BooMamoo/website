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

Route::post('/user/login', 'UserController@login');
Route::post('/user/register', 'UserController@register');
Route::get('/user/logout', 'UserController@logout');

Route::get('/data/local', 'DataController@local');
Route::get('/data/local/{local_id}/device', 'DataController@device');
Route::get('/data/device/{device_id}/info', 'DataController@getInfo');
Route::get('/data/device/{device_id}/type/{type_id}/data', 'DataController@getData');
Route::get('/data/device/{device_id}/type/{type_id}/current', 'DataController@getCurrentData');
Route::get('/data/device/{device_id}/type/{type_id}/chart', 'DataController@chart');
Route::get('/data/netpie', 'DataController@netpie');

Route::get('/', [
	'as' => 'root',
	'uses' => 'IndexController@index'
]);

Route::get('{any}', 'IndexController@index')->where('any', '.*');
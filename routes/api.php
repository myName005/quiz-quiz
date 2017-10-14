<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware(['throttle'])->group(function(){
	Route::post('auth/register','JWT\AuthController@register');
	Route::post('auth/login','JWT\AuthController@login');
	Route::post('quiz/create','QuizController@create')
		->middleware(['jwt.auth']);
	Route::get('quiz/{quiz}','QuizController@show')
		->middleware(['jwt.auth']);
	Route::get('quizes/','QuizController@list')
		->middleware(['jwt.auth']);
});


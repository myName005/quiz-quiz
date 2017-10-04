<?php

namespace App\Http\Controllers\JWT;

use  App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use App\User;

class AuthController extends Controller
{

	public function register(Request $request)
	{
		$request->validate([
			'name'=>'required',
			'email'=>'required|email|unique:users',
			'password'=>'required|min:6'
		]);

		$user = new User();
		$user->email = $request->email;
		$user->name = $request->name;
		$user->password = $request->password;

		if(! $user->save())
			abort(500);
		
		$token = JWTAuth::fromUser($user);
		return response()->json([
			'token'=>$token
		]);
	}
}

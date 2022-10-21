<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Http\Resources\UserResource;
use App\Http\Requests\{ProfileRequest, RegisterRequest};

class ApiAuthController extends Controller
{
    public function login (Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Obsession Password Grant')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);
            } else {
                $response = ["message" => "Password mismatch"];
                return response($response, 422);
            }
        } else {
            $response = ["message" =>'User does not exist'];
            return response($response, 422);
        }
    }
    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }
    public function updateprofile(ProfileRequest $request){
        $arr = [
            'name'=>$request->name,
            'email'=>$request->email,
        ];
        if(isset($request->password)){
            if(strlen($request->password)<60){
                $arr['password'] = Hash::make($request->password);
            }
        }
        $data = User::where('id',$request->user()->id)->update($arr);
        return new UserResource(User::find($request->user()->id));
    }
    public function register(RegisterRequest $request) {
        $user = User::create([
            'email'=>$request->email,
            'name'=>$request->name,
            'password'=>Hash::make($request->password),
            'role_id'=>2,
        ]);
        $token = $user->createToken('Obsession Password Grant')->accessToken;
        $response = ['token' => $token];
        return response($response, 200);
    }
}

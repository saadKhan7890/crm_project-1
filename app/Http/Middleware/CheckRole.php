<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        $exploded = explode('|', $role);
        if(in_array($request->user()->role_id,$exploded)){
            return $next($request);
        }
        return response()->json(["message"=>"Unauthenticated."]);
    }
}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{RoleController, PermissionController, UserController
};
use App\Http\Controllers\Auth\ApiAuthController;

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

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [ApiAuthController::class, 'login'])->name('login.api');
    Route::put('/updateprofile', [ApiAuthController::class, 'updateprofile']);
});

Route::group(['middleware' => ['cors', 'json.response', 'auth:api']], function () {
	Route::post('/logout', [ApiAuthController::class, 'logout'])->name('logout.api');
	Route::put('/updateprofile', [ApiAuthController::class, 'updateprofile']);
	Route::apiResource('roles', RoleController::class);
	Route::apiResource('permissions', PermissionController::class);

	Route::apiResource('user', UserController::class);

});

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/me', function (Request $request) {
        $notificationsCount = $request->user()->unreadNotifications()->count();
        $user = $request->user();
        $user->notification_count = $notificationsCount;
        return $user;
    });
});
Route::middleware('auth:api')->get('/notifications', function (Request $request) {
    $notifications = $request->user()->notifications()->paginate(50);
    // $request->user()->notifications()->paginate(50)->markAsRead();
    return $notifications;
});


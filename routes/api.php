<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('jobapply',[App\Http\Controllers\API\JobApiController::class, 'jobapply']);
Route::post('jobpost',[App\Http\Controllers\API\JobApiController::class, 'jobpost']);
Route::post('quicker',[App\Http\Controllers\API\JobApiController::class, 'quicker']);
Route::post('jobupdate/{id}',[App\Http\Controllers\API\JobApiController::class, 'jobupdate']);

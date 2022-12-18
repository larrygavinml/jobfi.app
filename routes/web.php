<?php

use App\Http\Controllers\publicControllers\profileController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);

/** route for jobs */
Route::get('jobs')->name('jobs')->uses('JobController@index');


Route::inertia('/test', 'Test');

Route::group(['middleware' => 'auth'], function() {
    Route::inertia('/home', 'Home');

    Route::get('/profile', [profileController::class, 'index'])->name('profile');
    Route::delete('/profilePhotoDelete', [profileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [profileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [profileController::class, 'deleteProfile'])->name('profileDelete');

});

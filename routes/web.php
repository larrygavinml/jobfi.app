<?php

use App\Http\Controllers\publicControllers\profileController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\FirmController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Web3LoginController;
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
Route::get('/job/{hashid}', [JobController::class, 'show'])
    ->name('job.show');
Route::get('/apply/{hashid}', [JobController::class, 'apply'])
    ->name('job.apply');
/** route for firms */
Route::get('/firm/{hashid}', [FirmController::class, 'show'])
    ->name('firm.show');
Route::get('/post/{hashid}', [FirmController::class, 'post'])
    ->name('firm.post');

/**add metamask login */
Route::get('/web3-login-message', 'Web3LoginController@message');
Route::post('/web3-login-verify', 'Web3LoginController@verify');

Route::inertia('/test', 'Test');

Route::group(['middleware' => 'auth'], function() {
    Route::inertia('/home', 'Home');

    Route::get('/profile', [profileController::class, 'index'])->name('profile');
    Route::delete('/profilePhotoDelete', [profileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [profileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [profileController::class, 'deleteProfile'])->name('profileDelete');

});

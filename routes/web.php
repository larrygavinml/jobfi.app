<?php

use App\Http\Controllers\publicControllers\profileController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\FirmController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Web3LoginController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\VerifyController;
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
Route::get('jobs',[JobController::class, 'index'])
    ->name('jobs');
Route::get('/job/{hashid}', [JobController::class, 'show'])
    ->name('job.show');
Route::get('/apply/{hashid}', [JobController::class, 'apply'])
    ->name('job.apply');
/** route for firms */
Route::get('/firm/{hashid}', [FirmController::class, 'show'])
    ->name('firm.show');
Route::get('/post/{hashid}', [FirmController::class, 'post'])
    ->name('firm.post');

Route::inertia('/test', 'Test');

Route::group(['middleware' => 'auth', 'verified'], function() {
    Route::inertia('/home', 'Home')->middleware('verified');

    Route::get('/profile', [profileController::class, 'index'])->name('profile');
    Route::put('/userwallet',[profileController::class, 'userwallet'])->name('userwallet');
    Route::put('/withdrawcoin',[profileController::class, 'withdrawcoin'])->name('withdrawcoin');
    
    Route::delete('/profilePhotoDelete', [profileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [profileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [profileController::class, 'deleteProfile'])->name('profileDelete');
    Route::get('/verify/{token}', [VerifyController::class,'VerifyEmail'])->name('verify');
    Route::post('/email/verify/resend', [VerifyController::class, 'resend'])->name('verification.resend');
});

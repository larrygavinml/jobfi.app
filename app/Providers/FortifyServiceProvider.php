<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Laravel\Fortify\Contracts\LoginResponse;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;
use Inertia\Inertia;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
      /** 
       *  $this->app->instance(LoginResponse::class, new class implements LoginResponse {
       **     public function toResponse($request)
       *     {
       *         return redirect('/');
       *     }
       * });
       * */ 
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            return Limit::perMinute(5)->by($request->email.$request->ip());
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });

        Fortify::loginView(function () {
            return Inertia::render('auth/Login');
        });
        Fortify::registerView(function () {
            return Inertia::render('auth/Register');
        });
        Fortify::requestPasswordResetLinkView(function () {
            return Inertia::render('auth/ForgotPassword');
        });
        Fortify::resetPasswordView(function () {
            return Inertia::render('auth/ResetPassword');
        });
        Fortify::verifyEmailView(function () {
            return Inertia::render('auth/VerifyEmail');
        });
     
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VerifyController extends Controller
{
    public function VerifyEmail($token = null)
    {
    	if($token == null) {
    		session()->flash('message', 'Invalid Login attempt');
    		return redirect()->route('login');

    	}

       $user = User::where('email_verification_token',$token)->first();
       if($user == null )
       {
       	  session()->flash('message', 'Invalid Login attempt');
          return redirect()->route('login');
       }

       $user->update([
          'email_verified' => 1,
          'email_verified_at' => Carbon::now(),
          'email_verification_token' => ''

       ]);
       
       session()->flash('message', 'Your account is activated, you can log in now');
       return redirect()->route('login');
    }

    public function resend(Request $request)
    {
        var_dump($request->email);
        $this->validate($request, [
            'email' => 'required|string|email|max:45',
        ]);
        $user = Auth::user();
        // These two lines below where the solution to my problem.
        $user->sendEmailVerificationNotification();
        
        return response() -> json(['status' => 300]);
       
    }
}

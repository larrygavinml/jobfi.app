<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
/** add wallet for user account use */
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Wallet;
use App\Models\Job;
class User extends Authenticatable implements MustVerifyEmail,Wallet
{
    use HasFactory, Notifiable, HasWallet;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'photo_name',
        'wallet_address',
        'invitedbycode',
        'initbalance',
        'codeforinvite',
        'unlockedcoin',
        'walletaddress',
        'cv_name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**User have mutiple jobs */
    public function jobs(){

        return $this->belongsToMany(Job::class, 'user_job','user_id','job_id');
        
        }
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}

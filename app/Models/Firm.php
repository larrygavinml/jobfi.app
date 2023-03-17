<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Firmtype;
use App\Models\Job;
use App\Models\Tag;
use Staudenmeir\EloquentEagerLimit\HasEagerLimit;

class Firm extends Model
{
    use HasFactory, HasEagerLimit;
    protected $fillable = [
        'title',
        'purpose',
        'description',
        'sitepage',
        'hashid', 
    ];


    /***
     * firm types 
     */
    public function types(){
        return $this->belongsToMany(Firmtype::class, 'firm_firmtypes', 'firm_id', 'firmtype_id');         
    }

    /***
     * firm tags 
     */
    public function tags(){
        return $this->belongsToMany(Tag::class, 'firm_tags', 'firm_id', 'tag_id');         
    }


    /**
     * The jobs that belong to the firm.
     */
    public function jobs()
    {
        return $this->hasMany(Job::class);
    }
}



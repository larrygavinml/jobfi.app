<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Firm;
use App\Models\Jobtype;
use App\Models\Tag;

class Job extends Model
{
    use HasFactory;
     /***
     * firm types 
     */
    public function types(){
        return $this->belongsToMany(Jobtype::class, 'job_jobtypes', 'job_id', 'jobtype_id');         
    }

    /***
     * firm tags 
     */
    public function tags(){
        return $this->belongsToMany(Tag::class, 'job_tags', 'job_id', 'tag_id');         
    }

     /**
     * Get the firm that have the job.
     */
    public function firm()
    {
        return $this->belongsTo(Firm::class,'firm_id');
    }
}

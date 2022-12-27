<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Firm;

class Firmtype extends Model
{
    use HasFactory;

        /**
     * The firmss that belong to the role.
     */
    public function firms()
    {
        return $this->belongsToMany(Firm::class);
    }
}

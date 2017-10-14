<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
	public $timestamps = false;
    public function quiz()
    {
    	return $this->belongsTo('App\Quiz');
    }

    public function answers()
    {
    	return $this->hasMany('App\Answer');
    }
}

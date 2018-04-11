<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Relation extends Model
{
    protected $fillable = [
        'friend_id',
        'user_id'
    ];

    // 获取好友
    public function friends()
    {
        return $this->hasOne('App\User', 'id', 'friend_id');
    }
}

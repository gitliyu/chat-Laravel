<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    protected $fillable = [
        'message',
        'from',
        'to',
        'unread'
    ];

    // 聊天记录
    public function user()
    {
        return $this->hasOne('App\User', 'id', 'from');
    }
}

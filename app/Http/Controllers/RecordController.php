<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Record;
use Illuminate\Support\Facades\Auth;

class RecordController extends Controller
{
    // 保存消息记录
    public function save(Request $request)
    {
        Record::create([
            'message' => $request['message'],
            'from' => $request['from'],
            'to' => $request['to']
        ]);
        return $this->sendResponse('');
    }

    // 查询聊天消息记录
    public function search(Request $request)
    {
        $id = $request['id'];
        $user_id = auth::user()['id'];
        $friend = User::where('id', $id)->first();
        $record = Record::whereIn('from', [$id, $user_id])
            ->whereIn('to', [$id, $user_id])
            ->get();
        return $this->sendResponse([
            'friend'=> $friend,
            'record'=> $record
        ]);
    }
}

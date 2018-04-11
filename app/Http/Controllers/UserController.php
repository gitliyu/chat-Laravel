<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Relation;
use App\Record;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(){
        return $this->sendResponse(User::all(), 'success');
    }

    // 获取当前用户
    public function current(){
        $user = Auth::user();
        $user['friends'] = $this->getRelations($user);
        $user['records'] = $this->getRecords($user);
        return $this->sendResponse($user);
    }

    public function getRelations($user){
        $relation = Relation::where('user_id', $user['id'])
            ->with('friends')
            ->get()
            ->map(function ($item) {
                return $item['friends'];
            });
        return $relation;
    }

    public function getRecords($user){
        $record = Record::where('to', $user['id'])
            ->with('user')
            ->get();
        return $record;
    }

    public function sendResponse($result, $message = 'success')
    {
        return [
            'data'    => $result,
            'message' => $message,
        ];
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(){
        return $this->sendResponse(User::all(), 'success');
    }

    public function current(){
        return Auth::user();
    }

    public function sendResponse($result, $message)
    {
        return [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];
    }
}

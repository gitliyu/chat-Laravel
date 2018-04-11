<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Record;
use Illuminate\Support\Facades\Auth;

class RecordController extends Controller
{
    public function save (Request $request) {
        Record::create([
            'message' => $request['message'],
            'from' => $request['from'],
            'to' => $request['to']
        ]);
    }

    public function search(Request $request){
        $id = $request['id'];
        $record = Record::where('to', auth::user()['id'])
            ->where('from', $id)
            ->select('message')
            ->get();
        return $record;
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Record;

class RecordController extends Controller
{
    public function save (Request $request) {
        Record::create([
            'message' => $request['message'],
            'from' => $request['from'],
            'to' => $request['to']
        ]);
    }
}

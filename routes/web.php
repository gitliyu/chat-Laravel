<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/user', 'UserController@current'); // 获取当前用户
Route::post('/user/add', 'UserController@addRelation'); // 添加好友
Route::post('/user/search', 'UserController@search'); // 查询用户

Route::post('/record/search', 'RecordController@search'); //查询聊天详情
Route::post('/record/add', 'RecordController@save'); // 保存消息记录


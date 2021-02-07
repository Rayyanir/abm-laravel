<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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


//Ruta de login y register


Route::get('/', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

Route::post('/register-user',[RegisterController::class,'create']);

Route::post('/login',[LoginController::class,'authenticate'])->name('login');

Route::get('/logout',[LoginController::class,'logout'])->name('logout');

Route::resource('user', UserController::class)->middleware('auth');
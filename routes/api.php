<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\AuthController;
use Illuminate\Support\Facades\Auth;

/* Authentication API */
Route::post('login' , [AuthController::class , 'login'])->name('login');
Route::get('login' , [AuthController::class , 'accessToken']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');


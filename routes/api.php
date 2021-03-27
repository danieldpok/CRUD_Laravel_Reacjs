<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/employee/role', 'App\Http\Controllers\API\EmployeeController@list_role');
Route::post('/employee/create', 'App\Http\Controllers\API\EmployeeController@create');
Route::get('/employee/list', 'App\Http\Controllers\API\EmployeeController@list');
Route::get('/employee/get/{id}', 'App\Http\Controllers\API\EmployeeController@get');
Route::put('/employee/update/{id}', 'App\Http\Controllers\API\EmployeeController@update');
Route::delete('/employee/delete/{id}', 'App\Http\Controllers\API\EmployeeController@delete');

Route::get('/catalogos/roles', 'App\Http\Controllers\API\UsuariosController@list_roles');
Route::get('/catalogos/estados', 'App\Http\Controllers\API\UsuariosController@list_catEstados');
Route::get('/catalogos/municipios/{id}', 'App\Http\Controllers\API\UsuariosController@list_catMunicipios');

Route::post('/usuarios/create', 'App\Http\Controllers\API\UsuariosController@create');
Route::post('/usuarios/view', 'App\Http\Controllers\API\UsuariosController@view');
Route::post('/usuarios/edit/{id}', 'App\Http\Controllers\API\UsuariosController@edit');
Route::post('/usuarios/delete/{id}', 'App\Http\Controllers\API\UsuariosController@delete');

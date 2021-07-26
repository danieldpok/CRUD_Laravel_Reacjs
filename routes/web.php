<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
*/


//PRIVATE
Route::group(['middleware' => ['auth:sanctum']], function () {


    Route::get('/', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/usuarios', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/usuarios/nuevo', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/usuarios/{id}/editar', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/usuarios/{id}/ver', 'App\Http\Controllers\PrincipalHomeController@index');

    Route::get('/proyectos', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/proyectos/asignarInformacion/{id}', 'App\Http\Controllers\PrincipalHomeController@index');

    Route::get('/roles', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/servicios', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/tipoAnexos', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/preguntas', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/asignacionActividades', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/bandejaActividades', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/bandejaRevision', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/bandejaPosPago', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/bandejaPago', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/permisos', 'App\Http\Controllers\PrincipalHomeController@index');
    Route::get('/bandejaProveedor', 'App\Http\Controllers\PrincipalHomeController@index');

});
Route::post('logout','Auth\LoginController@logout');

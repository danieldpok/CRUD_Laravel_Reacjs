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

//ESTADOS Y MUNICIPIO
Route::get('/catalogos/estados', 'App\Http\Controllers\API\CatalogosController@list_catEstados');
Route::get('/catalogos/municipios/{id}', 'App\Http\Controllers\API\CatalogosController@list_catMunicipios');
//ROLES
Route::get('/catalogos/roles', 'App\Http\Controllers\API\CatalogosController@list_roles');
Route::get('/catalogos/roles/{id}', 'App\Http\Controllers\API\CatalogosController@getRol');
Route::post('/catalogos/roles/create', 'App\Http\Controllers\API\CatalogosController@createRol');
Route::put('/catalogos/roles/{id}', 'App\Http\Controllers\API\CatalogosController@editRol');
Route::delete('/catalogos/roles/{id}', 'App\Http\Controllers\API\CatalogosController@deleteRol');
//CATALOGO SERVICIOS
Route::get('/catalogos/servicios/list', 'App\Http\Controllers\API\CatalogosController@listServicios');
Route::get('/catalogos/servicios/{id}', 'App\Http\Controllers\API\CatalogosController@getServicio');
Route::post('/catalogos/servicios/create', 'App\Http\Controllers\API\CatalogosController@createServicio');
Route::put('/catalogos/servicios/{id}', 'App\Http\Controllers\API\CatalogosController@editServicio');
Route::delete('/catalogos/servicios/{id}', 'App\Http\Controllers\API\CatalogosController@deleteServicio');
//CATALOGO PREGUNTAS
Route::get('/catalogos/preguntas/list', 'App\Http\Controllers\API\CatalogosController@listPreguntas');
Route::get('/catalogos/preguntas/{id}', 'App\Http\Controllers\API\CatalogosController@getPregunta');
Route::post('/catalogos/preguntas/create', 'App\Http\Controllers\API\CatalogosController@createPregunta');
Route::put('/catalogos/preguntas/{id}', 'App\Http\Controllers\API\CatalogosController@editPregunta');
Route::delete('/catalogos/preguntas/{id}', 'App\Http\Controllers\API\CatalogosController@deletePregunta');
//USUARIOS
Route::get('/usuarios/list', 'App\Http\Controllers\API\UsuariosController@list');
Route::get('/usuarios/get/{id}', 'App\Http\Controllers\API\UsuariosController@get');
Route::post('/usuarios/create', 'App\Http\Controllers\API\UsuariosController@create');
Route::put('/usuarios/edit/{id}', 'App\Http\Controllers\API\UsuariosController@edit');
Route::put('/usuarios/delete/{id}', 'App\Http\Controllers\API\UsuariosController@delete');
//PROYECTOS
Route::get('/proyectos/list', 'App\Http\Controllers\API\ProyectosController@listProyectos');
Route::get('/proyectos/{id}', 'App\Http\Controllers\API\ProyectosController@getProyecto');
Route::post('/proyectos/create', 'App\Http\Controllers\API\ProyectosController@createProyectoName');
Route::put('/proyectos/createInfo/{id}', 'App\Http\Controllers\API\ProyectosController@createProyectoInfo');
Route::put('/proyectos/{id}', 'App\Http\Controllers\API\ProyectosController@editProyectoNombre');
Route::delete('/proyectos/{id}', 'App\Http\Controllers\API\ProyectosController@deleteProyecto');
//ROLES
Route::get('/roles/list', 'App\Http\Controllers\API\RolesController@listRoles');
Route::get('/roles/{id}', 'App\Http\Controllers\API\RolesController@getRol');
Route::post('/roles/create', 'App\Http\Controllers\API\RolesController@createRol');
Route::put('/roles/{id}', 'App\Http\Controllers\API\RolesController@editRol');
Route::delete('/roles/{id}', 'App\Http\Controllers\API\RolesController@deleteRol');
//SERVICIOS
Route::get('/servicios/list', 'App\Http\Controllers\API\ServiciosController@listServicios');
Route::get('/servicios/{id}', 'App\Http\Controllers\API\ServiciosController@getServicio');
Route::post('/servicios/create', 'App\Http\Controllers\API\ServiciosController@createServicio');
Route::put('/servicios/{id}', 'App\Http\Controllers\API\ServiciosController@editServicio');
Route::delete('/servicios/{id}', 'App\Http\Controllers\API\ServiciosController@deleteServicio');
//TIPO_ANEXOS
Route::get('/tipoAnexo/list', 'App\Http\Controllers\API\TipoAnexoController@listTipoAnexo');
Route::get('/tipoAnexo/{id}', 'App\Http\Controllers\API\TipoAnexoController@getTipoAnexo');
Route::post('/tipoAnexo/create', 'App\Http\Controllers\API\TipoAnexoController@createTipoAnexo');
Route::put('/tipoAnexo/{id}', 'App\Http\Controllers\API\TipoAnexoController@editTipoAnexo');
Route::delete('/tipoAnexo/{id}', 'App\Http\Controllers\API\TipoAnexoController@deleteTipoAnexo');

//ASIGNACION DE ACTIVIDADES

//BANDEJA DE ACTIVIDADES

//BANDEJA DE REVISION

//BANDEJA DE PAGOS

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

//PUBLIC
Route::post('/usuarios/logout', 'App\Http\Controllers\API\UsuariosController@logout');

//PRIVATE
Route::group(['middleware' => ['auth:sanctum']], function () {
Route::get('/catalogos/tecnicos', 'App\Http\Controllers\API\CatalogosController@listTecnicos');
});


//CATALOGOS PARA FORM
Route::get('/catalogos/proyectos', 'App\Http\Controllers\API\ProyectosController@listProyectos');

Route::get('/catalogos/tipoEquipo/{id}', 'App\Http\Controllers\API\CatalogosController@listEquipoComputo');
Route::get('/catalogos/modeloEquipo/{id}', 'App\Http\Controllers\API\CatalogosController@listModeloComputo');
Route::get('/catalogos/modeloMonitor/{id}', 'App\Http\Controllers\API\CatalogosController@listModeloMonitor');


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
Route::get('/asignacionActividades/list', 'App\Http\Controllers\API\AsignacionActividadesController@listAsignacionActividades');
Route::get('/asignacionActividades/{id}', 'App\Http\Controllers\API\AsignacionActividadesController@getAsignacionActividad');
Route::post('/asignacionActividades/create', 'App\Http\Controllers\API\AsignacionActividadesController@createAsignacionActividad');
Route::post('/asignacionActividades/update/{id}', 'App\Http\Controllers\API\AsignacionActividadesController@editAsignacionActividad');
Route::delete('/asignacionActividades/{id}', 'App\Http\Controllers\API\AsignacionActividadesController@deleteAsignacionActividad');
//BANDEJA DE ACTIVIDADES
Route::post('/bandejaActividades/list/{estatus}', 'App\Http\Controllers\API\BandejaActividadController@listBandejaActividades');
Route::post('/bandejaActividades/{id}', 'App\Http\Controllers\API\BandejaActividadController@getBandejaActividad');
Route::post('/bandejaActividades/{id}/create', 'App\Http\Controllers\API\BandejaActividadController@createBandejaActividad');
Route::post('/bandejaActividades/{id}/pdf/{servicio}', 'App\Http\Controllers\API\BandejaActividadController@getBandejaActividadPDF');
Route::put('/bandejaActividades/{id}/edit/{servicio}', 'App\Http\Controllers\API\BandejaActividadController@editBandejaActividad');
Route::post('/bandejaActividades/{id}/firma/{servicio}', 'App\Http\Controllers\API\BandejaActividadController@createFirmaServicio');
Route::post('/bandejaActividades/{id}/encuesta/{servicio}', 'App\Http\Controllers\API\BandejaActividadController@createEncuestaServicio');
Route::put('/bandejaActividades/{id}/solicitarRevision/{estatus}', 'App\Http\Controllers\API\BandejaActividadController@solicitarRevision');
Route::delete('/bandejaActividades/{id}', 'App\Http\Controllers\API\BandejaActividadController@deleteBandejaActividad');
//BANDEJA DE REVISION
Route::post('/bandejaRevision/Documentacion/list', 'App\Http\Controllers\API\BandejaRevisionController@listDocumentacion');
Route::post('/bandejaRevision/Documentacion/{id}', 'App\Http\Controllers\API\BandejaRevisionController@getDocumentoAsignacion');
Route::post('/bandejaRevision/Documentacion/{id}/{servicio}', 'App\Http\Controllers\API\BandejaRevisionController@getDocumentoServicio');
Route::put('/bandejaRevision/Documentacion/{id}', 'App\Http\Controllers\API\BandejaRevisionController@updateDocumento');

Route::post('/bandejaRevision/revisionCancelar/{id}', 'App\Http\Controllers\API\BandejaRevisionController@revisionCancelar');
Route::post('/bandejaRevision/Facturacion/list', 'App\Http\Controllers\API\BandejaRevisionController@listFacturacion');
Route::post('/bandejaRevision/Facturacion/{id}', 'App\Http\Controllers\API\BandejaRevisionController@getFactura');
Route::put('/bandejaRevision/Facturacion/{id}', 'App\Http\Controllers\API\BandejaRevisionController@updateFactura');
//BANDEJA DE PAGOS
Route::post('/bandejaPago/listAutorizados', 'App\Http\Controllers\API\BandejaPagoController@ListPagosAutorizados');
Route::post('/bandejaPago/listRealizados', 'App\Http\Controllers\API\BandejaPagoController@ListPagosRealizados');
Route::post('/bandejaPago/listCancelados', 'App\Http\Controllers\API\BandejaPagoController@ListPagosCancelados');
Route::post('/bandejaPago/{id}', 'App\Http\Controllers\API\BandejaPagoController@getPago');
Route::put('/bandejaPago/{id}', 'App\Http\Controllers\API\BandejaPagoController@UpdatePago');
//LISTA DE DISTRIBUCION
Route::get('/listaDistribucion/{idproyecto}/listAll', 'App\Http\Controllers\API\ListaDistribucionController@listDistribucion');
Route::get('/listaDistribucion/{id}', 'App\Http\Controllers\API\ListaDistribucionController@getlistDistribucion');
Route::post('/listaDistribucion/{idproyecto}/listAdd', 'App\Http\Controllers\API\ListaDistribucionController@addEmailList');
Route::put('/listaDistribucion/{idproyecto}', 'App\Http\Controllers\API\ListaDistribucionController@editEmailList');
Route::delete('/listaDistribucion/{idproyecto}', 'App\Http\Controllers\API\ListaDistribucionController@deleteEmailList');


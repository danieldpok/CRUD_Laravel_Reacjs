<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AsignacionActividad;
use App\Models\CapturaServicio;
use App\Models\EncuestaRespuestas;
use App\Models\RevisionActividad;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BandejaActividadController extends Controller
{
    public function listBandejaActividades (Request $request, $estatus){
        $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad","servicios" )
            ->where('estatus', $estatus)
            //->where('user_id',$request['user_id'])
            ->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function getBandejaActividad(Request $request, $id){

        try {

            $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad","servicios" )
                ->where('estatus', '!=',2)
                ->where('estatus', '!=',3)
                //->where('user_id',$request['user_id'])
                ->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Load successful";
                $response['success'] = true;
            }
            else {
                $response['message'] = "Not found data id => $id";
                $response['success'] = false;
            }

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function getBandejaActividadPDF(Request $request, $id, $servicio){

        try {

            $data = CapturaServicio::
                 where('captura_servicio.estatus', '!=',2)
                ->where('asignacion_actividades.user_id',$request['user_id'])
                ->where('captura_servicio.id_asignacion_actividades',$id)
                ->leftjoin('asignacion_actividades', 'asignacion_actividades.id_asignacion_actividades', '=', 'captura_servicio.id_asignacion_actividades')
                ->find($servicio);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Load successful";
                $response['success'] = true;
            }
            else {
                $response['message'] = "Not found data id => $id";
                $response['success'] = false;
            }

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function createBandejaActividad(Request $request, $id){

        $result = DB::transaction(function () use ($request, $id) {

            try {
                $servicio = new CapturaServicio();
                $servicio->tipo_computo = $request['tipoEquipo'];
                $servicio->legacy_modelo = $request['modeloLegacy'];
                $servicio->legacy_modelo_serie = $request['serieLegacy'];
                $servicio->legacy_monitor_modelo = $request['monitorModeloLegacy'];
                $servicio->legacy_monitor_modelo_serie = $request['monitorSerieLegacy'];
                $servicio->legacy_usuario_entrega = $request['usuarioEntregaLegacy'];
                $servicio->nuevo_modelo = $request['modeloNuevo'];
                $servicio->nuevo_modelo_serie = $request['serieNuevo'];
                $servicio->nuevo_monitor_modelo = $request['monitorModeloNuevo'];
                $servicio->nuevo_monitor_modelo_serie = $request['monitorSerieNuevo'];
                $servicio->nuevo_usuario_entrega = $request['usuarioEntregaNuevo'];
                $servicio->migracionGB = $request['migracionGB'];
                $servicio->hostname_legacy = $request['hostnameLegacy'];
                $servicio->hostname_nuevo = $request['hostnameNuevo'];
                $servicio->usuario_dominio = $request['usuarioDominio'];
                $servicio->observaciones = $request['observaciones'];
                $servicio->id_asignacion_actividades = $id;
                $servicio->estatus = 1;
                $servicio->save();

                $history = new RevisionActividad();
                $history->user_id = 1;//variable cookie
                $history->id_asignacion_actividad = $id;
                $history->proceso_realizado = 1;
                $history->save();


                $response['message'] = "Servicio Creado";
                $response['success'] = true;

            } catch (\Exception $e) {
                DB::rollback();
                $response['message'] = $e->getMessage();
                $response['success'] = false;
            }

            return $response;
        });

        return $result;

    }

    public function editBandejaActividad(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $servicio = CapturaServicio::find($id);
                $servicio->tipo_computo = $request['tipoEquipo'];
                $servicio->legacy_modelo = $request['modeloLegacy'];
                $servicio->legacy_modelo_serie = $request['serieLegacy'];
                $servicio->legacy_monitor_modelo = $request['monitorModeloLegacy'];
                $servicio->legacy_monitor_modelo_serie = $request['monitorSerieLegacy'];
                $servicio->legacy_usuario_entrega = $request['usuarioEntregaLegacy'];
                $servicio->nuevo_modelo = $request['modeloNuevo'];
                $servicio->nuevo_modelo_serie = $request['serieNuevo'];
                $servicio->nuevo_monitor_modelo = $request['monitorModeloNuevo'];
                $servicio->nuevo_monitor_modelo_serie = $request['monitorSerieNuevo'];
                $servicio->nuevo_usuario_entrega = $request['usuarioEntregaNuevo'];
                $servicio->migracionGB = $request['migracionGB'];
                $servicio->hostname_legacy = $request['hostnameLegacy'];
                $servicio->hostname_nuevo = $request['hostnameNuevo'];
                $servicio->usuario_dominio = $request['usuarioDominio'];
                $servicio->observaciones = $request['observaciones'];
                $servicio->id_asignacion_actividades = $id;
                $servicio->save();

                $response['message'] = "Servicio Editado";
                $response['success'] = true;


            } catch (\Exception $e) {
                DB::rollback();
                $response['message'] = $e->getMessage();
                $response['success'] = false;
            }

            return $response;
        });

        return $result;

    }

    public function solicitarRevision(Request $request,$id,$estatus){

        $result = DB::transaction(function () use ($request,$id,$estatus) {

            try {

                if($estatus==6){                  
                    $servicio = CapturaServicio::
                    where('id_asignacion_actividades',$id)
                    ->count('id_captura_servicio');
                    $asignacion = AsignacionActividad::find($id);
                    $asignacion->estatus = 6;
                    $asignacion->numero_servicios = $servicio;
                    $asignacion->save();
                }else{
                    $asignacion = AsignacionActividad::find($id);
                    $asignacion->estatus = $estatus;
                    $asignacion->save();
                }

                $history = new RevisionActividad();
                $history->user_id = 1;//variable cookie
                $history->id_asignacion_actividad = $id;
                $history->proceso_realizado = $estatus;
                $history->save();

                $response['message'] = "Estatus Guardado";
                $response['success'] = true;


            } catch (\Exception $e) {
                DB::rollback();
                $response['message'] = $e->getMessage();
                $response['success'] = false;
            }

            return $response;
        });

        return $result;

    }

    public function deleteBandejaActividad(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $asignacion = AsignacionActividad::find($id);
                $asignacion->estatus = 3; //rechazada por el usuario asignado
                $asignacion->save();

                $history = new RevisionActividad();
                $history->user_id = 1;//variable cookie
                $history->id_asignacion_actividad = $id;
                $history->proceso_realizado = 3;
                $history->save();

                $response['message'] = "Asignacion Actividad Rechazada";
                $response['success'] = true;


            } catch (\Exception $e) {
                DB::rollback();
                $response['message'] = $e->getMessage();
                $response['success'] = false;
            }

            return $response;
        });

        return $result;

    }

    public function createEncuestaServicio(Request $request, $id){

        $result = DB::transaction(function () use ($request, $id) {

            try {
                $respuesta = new EncuestaRespuestas();
                $respuesta->id_captura_servicio=$id;
                //$respuesta->id_pregunta=
                //$respuesta->respuesta=

                $respuesta->save();

                $response['message'] = "Encuesta Guardada";
                $response['success'] = true;

            } catch (\Exception $e) {
                DB::rollback();
                $response['message'] = $e->getMessage();
                $response['success'] = false;
            }

            return $response;
        });

        return $result;

    }

}

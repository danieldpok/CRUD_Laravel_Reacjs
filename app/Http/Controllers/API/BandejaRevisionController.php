<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AsignacionActividad;
use App\Models\CapturaServicio;
use App\Models\RevisionActividad;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BandejaRevisionController extends Controller
{
    public function listDocumentacion (Request $request){
        $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad")
            ->where('estatus', '!=',2)
            ->where('estatus',6)
            ->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function getDocumentoAsignacion(Request $request, $id){

        try {

            $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad" )
                ->where('estatus', '!=',2)
                ->where('estatus',6)
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

    public function getDocumentoServicio(Request $request, $id,$servicio){

        try {

            $data = CapturaServicio::
            where('captura_servicio.estatus', '!=',2)
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

    public function updateDocumento(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $servicio = AsignacionActividad::find($id);
                $servicio->estatus = 7;
                $servicio->save();

                $history = new RevisionActividad();
                $history->user_id = 1;//variable cookie
                $history->id_asignacion_actividad = $id;
                $history->proceso_realizado = 7;
                $history->comentario = $request['comentario'];
                $history->save();

                $response['message'] = "VoBo Documento Exitoso";
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

    public function listFacturacion (Request $request){
        $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad","factura")
            ->where('estatus', '!=',2)
            ->where('estatus',8) //solicitar vobo de factura
            ->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function getFactura (Request $request, $id){
        $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad","factura")
            ->where('estatus', '!=',2)
            ->where('estatus',8) //solicitar vobo de factura
            ->find($id);
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function updateFactura(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $servicio = AsignacionActividad::find($id);
                $servicio->estatus = 9;
                $servicio->save();

                $history = new RevisionActividad();
                $history->user_id = 1;//variable cookie
                $history->id_asignacion_actividad = $id;
                $history->proceso_realizado = 9;
                $history->save();

                $response['message'] = "VoBo Factura Exitoso";
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

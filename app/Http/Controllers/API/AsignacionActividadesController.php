<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AsignacionActividad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AsignacionActividadesController extends Controller
{
    public function listAsignacionActividades (){
        $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad" )
            ->where('estatus', '!=',2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function getAsignacionActividad($id){

        try {

            $data = AsignacionActividad::with("user_id","id_proyecto","id_cat_servicio","localidad" )
                ->where('estatus', '!=',2)->find($id);

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

    public function createAsignacionActividad(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {

                $asignacion = new AsignacionActividad();
                $asignacion->user_id = $request['tecnico'];
                $asignacion->id_proyecto = $request['proyecto'];
                $asignacion->id_cat_servicio = $request['cat_servicio'];
                $asignacion->localidad = $request['localidad'];
                $asignacion->nombre_encargado = $request['nombreEncargado'];
                $asignacion->departamento_encargado = $request['depEncargado'];
                $asignacion->email_encargado = $request['emailEncargado'];
                $asignacion->telefono_encargado = $request['telefonoEncargado'];
                $asignacion->numero_servicios = $request['num_servicio'];
                $asignacion->costo_servicio = $request['costo_servicio'];
                if ($request['iva']=='on'){$check_iva=1;}else{$check_iva=0;}
                $asignacion->impuesto_iva = $check_iva;
                if ($request['isr']=='on'){$check_isr=1;}else{$check_isr=0;}
                $asignacion->impuesto_isr = $check_isr;
                if ($request['retencioniva']=='on'){$check_retencion=1;}else{$check_retencion=0;}
                $asignacion->impuesto_iva_retencion = $check_retencion;
                $asignacion->impuesto_isr_total = $request['isr_total'];
                $asignacion->impuesto_iva_retencion_total = $request['retencioniva_total'];
                $asignacion->comentarios = $request['comentarios'];
                $asignacion->save();

                $response['message'] = "Asignacion de Actividad Creada";
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

    public function editAsignacionActividad(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {
                $asignacion = AsignacionActividad::find($id);
                $asignacion->user_id = $request['tecnico'];
                $asignacion->id_proyecto = $request['proyecto'];
                $asignacion->id_cat_servicio = $request['cat_servicio'];
                $asignacion->localidad = $request['localidad'];
                $asignacion->nombre_encargado = $request['nombreEncargado'];
                $asignacion->departamento_encargado = $request['depEncargado'];
                $asignacion->email_encargado = $request['emailEncargado'];
                $asignacion->telefono_encargado = $request['telefonoEncargado'];
                $asignacion->numero_servicios = $request['num_servicio'];
                $asignacion->costo_servicio = $request['costo_servicio'];
                if ($request['iva']=='on'){$check_iva=1;}else{$check_iva=0;}
                $asignacion->impuesto_iva = $check_iva;
                if ($request['isr']=='on'){$check_isr=1;}else{$check_isr=0;}
                $asignacion->impuesto_isr = $check_isr;
                if ($request['retencioniva']=='on'){$check_retencion=1;}else{$check_retencion=0;}
                $asignacion->impuesto_iva_retencion = $check_retencion;
                $asignacion->impuesto_isr_total = $request['isr_total'];
                $asignacion->impuesto_iva_retencion_total = $request['retencioniva_total'];
                $asignacion->comentarios = $request['comentarios'];
                $asignacion->save();

                $response['message'] = "Asignacion Actividad Editada";
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

    public function deleteAsignacionActividad(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $asignacion = AsignacionActividad::find($id);
                $asignacion->estatus = 2;
                $asignacion->save();

                $response['message'] = "Asignacion Actividad Eliminada";
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

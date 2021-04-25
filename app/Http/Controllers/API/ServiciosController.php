<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CatServicios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiciosController extends Controller
{
    public function listServicios (){
        $data = CatServicios::where('estatus', '!=',2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function getServicio($id){

        try {

            $data = CatServicios::where('estatus', '!=',2)->find($id);

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

    public function createServicio(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {

                $servicio = new CatServicios();
                $servicio->servicio = $request['name'];
                $servicio->save();

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

    public function editServicio(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $servicio = CatServicios::find($id);
                $servicio->servicio = $request['name'];
                $servicio->estatus = $request["estatus"];
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

    public function deleteServicio(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $servicio = CatServicios::find($id);
                $servicio->estatus = 2;
                $servicio->save();

                $response['message'] = "Servicio Eliminado";
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

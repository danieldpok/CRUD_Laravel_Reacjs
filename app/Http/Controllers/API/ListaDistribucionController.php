<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ListaDistribucion;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ListaDistribucionController extends Controller
{
    public function listDistribucion ($idproyecto){

        try {

            $data = ListaDistribucion::where('estatus', '!=',2)
                ->where('id_proyecto', $idproyecto)
                ->get();

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Load successful";
                $response['success'] = true;
            }
            else {
                $response['message'] = "Not found data id => $idproyecto";
                $response['success'] = false;
            }

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function getlistDistribucion($id){

        try {

            $data = ListaDistribucion::where('estatus', '!=',2)->find($id);

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

    public function addEmailList(Request $request,$idproyecto){

        $result = DB::transaction(function () use ($request,$idproyecto) {

            try {

                $email = new ListaDistribucion();
                $email->email = $request['email'];
                $email->id_proyecto = $idproyecto;
                $email->save();

                $response['message'] = "Email Agregado";
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

    public function editEmailList(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {

                $email = ListaDistribucion::find($request['id_lista_distribucion']);
                $email->email = $request['email'];
                $email->save();

                $response['message'] = "Email Editado";
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

    public function deleteEmailList(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $email =ListaDistribucion::find($id);
                $email->estatus = 2;
                $email->save();

                $response['message'] = "Email Eliminado";
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

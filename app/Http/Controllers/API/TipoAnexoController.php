<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CatAnexos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TipoAnexoController extends Controller
{
    public function listTipoAnexo (){
        $data = CatAnexos::where('estatus', '!=',2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function getTipoAnexo($id){

        try {

            $data = CatAnexos::where('estatus', '!=',2)->find($id);

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

    public function createTipoAnexo(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {

                $tAnexo = new CatAnexos();
                $tAnexo->tipo_anexo = $request['tipo_anexo'];
                $tAnexo->save();

                $response['message'] = "Tipo Anexo Creado";
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

    public function editTipoAnexo(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $tAnexo = CatAnexos::find($id);
                $tAnexo->tipo_anexo = $request['tipo_anexo'];
                $tAnexo->estatus = $request["estatus"];
                $tAnexo->save();

                $response['message'] = "Tipo Anexo Editado";
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

    public function deleteTipoAnexo(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $tAnexo = CatAnexos::find($id);
                $tAnexo->estatus = 2;
                $tAnexo->save();

                $response['message'] = "Tipo Anexo Eliminado";
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

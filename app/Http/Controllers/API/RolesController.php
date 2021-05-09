<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CatRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RolesController extends Controller
{
    public function listRoles (){
        $data = CatRoles::where('estatus', '!=',2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function getRol($id){

        try {

            $data = CatRoles::where('estatus', '!=',2)->find($id);

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

    public function createRol(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {

                $rol = new CatRoles();
                $rol->rol = $request['name'];
                $rol->save();

                $response['message'] = "Rol Creado";
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

    public function editRol(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $rol = CatRoles::find($id);
                $rol->rol = $request['name'];
                $rol->save();

                $response['message'] = "Rol Editado";
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

    public function deleteRol(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $rol = CatRoles::find($id);
                $rol->estatus = 2;
                $rol->save();

                $response['message'] = "Rol Eliminado";
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

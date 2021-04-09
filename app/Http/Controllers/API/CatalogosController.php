<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CatPreguntas;
use App\Models\CatServicios;
use App\Models\CatRoles;
use App\Models\CatDirEstado;
use App\Models\CatDirMunicipio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CatalogosController extends Controller
{

    //ESTADO Y MUNICIPIOS
    public function list_catEstados(){
        $data = CatDirEstado::get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function list_catMunicipios($id){
       $data = CatDirMunicipio::municipios($id);
       $response['data'] = $data;
       $response['success'] = true;
       return $response;

    }

    //Catalogo Roles

    public function list_roles(){
        $data = CatRoles::where("estatus",'!=', 2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function createRol(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {
                $rol = new CatRoles();
                $rol->rol =$request["rol"];
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

    public function editRol(Request $request, $id){

        $result = DB::transaction(function () use ($request,$id) {

            try {
                $rol = CatRoles::find($id);
                $rol->rol =$request["rol"];
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

    public function getRol($id){

        try {

            $data = CatRoles::all()->find($id);

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


    //Catalogo Servicios

    public function listServicios(){
        $data = CatServicios::where("estatus",'!=', 2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function createServicio(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {
                $servicio = new CatServicios();
                $servicio->servicio =$request["servicio"];
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

    public function editServicio(Request $request, $id){

        $result = DB::transaction(function () use ($request,$id) {

            try {
                $servicio = CatServicios::find($id);
                $servicio->servicio =$request["servicio"];
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

    public function getServicio($id){

        try {

            $data = CatServicios::all()->find($id);

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


    //Catalogo Preguntas

    public function listPreguntas(){
        $data = CatPreguntas::where("estatus",'!=', 2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function createPregunta(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {
                $pregunta = new CatPreguntas();
                $pregunta->pregunta =$request["pregunta"];
                $pregunta->save();

                $response['message'] = "Pregunta Creada";
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

    public function editPregunta(Request $request, $id){

        $result = DB::transaction(function () use ($request,$id) {

            try {
                $pregunta = CatPreguntas::find($id);
                $pregunta->pregunta =$request["pregunta"];
                $pregunta->save();

                $response['message'] = "Pregunta Editada";
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

    public function getPregunta($id){

        try {

            $data = CatPreguntas::all()->find($id);

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

    public function deletePregunta(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {
                $pregunta = CatPreguntas::find($id);
                $pregunta->estatus = 2;
                $pregunta->save();

                $response['message'] = "Pregunta Eliminada";
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

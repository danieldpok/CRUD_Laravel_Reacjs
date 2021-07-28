<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Direccion;
use App\Models\Proyectos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProyectosController extends Controller
{

    public function listProyectos (){
        $data = Proyectos::with("Direccion")->where('estatus', '!=',2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function createProyectoName(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {

                $direccion = new Direccion();
                $direccion->estado = 0;
                $direccion->municipio = 0;
                $direccion->save();

                $proyecto = new Proyectos();
                $proyecto->nombre_proyecto = $request['nombre_proyecto'];
                $proyecto->Direccion()->associate($direccion);
                $proyecto->save();

                $response['message'] = "Proyecto Creado";
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

    /*
    public function createProyectoInfo(Request $request){

        $result = DB::transaction(function () use ($request) {

            try {

                $direccion = new Direccion();
                $direccion->calle = $request["calle"];
                $direccion->colonia = $request["colonia"];
                $direccion->cp = $request["cp"];
                $direccion->estado = $request["estado"];
                $direccion->municipio = $request["municipio"];
                $direccion->numint = $request["numero_int"];
                $direccion->numext = $request["numero_ext"];
                $direccion->save();

                $proyecto = new Proyectos();
                $proyecto->nombre_proyecto = $request['nombre_proyecto'];
                $proyecto->nombre_sucursal = $request["nombre_sucursal"];
                $proyecto->nombre_encargado = $request["nombre_encargado"];
                $proyecto->telefono = $request["telefono"];
                $proyecto->email_encargado = $request["email_encargado"];
                $proyecto->logotipo_url = $request["logotipo_url"];
                $proyecto->comentarios = $request["comentarios"];
                $proyecto->leyenda_responsiva = $request["leyenda_responsiva"];
                $proyecto->Direccion()->associate($direccion);
                $proyecto->save();

                $response['message'] = "Proyecto Creado";
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
     */
    public function createProyectoInfo(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {
                $proyecto = Proyectos::find($id);
                $proyecto->nombre_sucursal = $request["nombre_sucursal"];
                $proyecto->nombre_encargado = $request["nombre_encargado"];
                $proyecto->telefono = $request["telefono"];
                $proyecto->email_encargado = $request["email"];
                $proyecto->comentarios = $request["comentarios"];
                $proyecto->leyenda_responsiva = $request["responsiva"];

                //check file
            if ($request->hasFile('logotipo'))
            {
                $file      = $request->file('logotipo');
                $filename  = $file->getClientOriginalName();
                $extension = $file->getClientOriginalExtension();
                $picture   = date('His').'-'.$filename;
                $proyecto->logotipo = $picture;
                //move image to public/img folder
                $file->move(public_path('img'), $picture);
            }else{
                $proyecto->logotipo = "...";
            }

                $proyecto->save();

                $direccion = Proyectos::find($id)->Direccion;
                $direccion->calle = $request["calle"];
                $direccion->colonia = $request["colonia"];
                $direccion->cp = $request["cp"];
                $direccion->estado = $request["estado"];
                $direccion->municipio = $request["municipio"];
                $direccion->numint = $request["numint"];
                $direccion->numext = $request["numext"];
                $direccion->save();

                $response['message'] = "Proyecto Editado";
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

    public function editProyectoNombre(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $proyecto = Proyectos::find($id);
                $proyecto->nombre_proyecto = $request['nombre_proyecto'];
                $proyecto->estatus = $request["estatus"];
                $proyecto->save();

                $response['message'] = "Proyecto Editado";
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

    public function getProyecto($id){

        try {

            $data = Proyectos::with("Direccion", "Direccion.Estado","Direccion.Municipio")->where('estatus', '!=',2)->find($id);

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

    public function deleteProyecto(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $proyecto = Proyectos::find($id);
                $proyecto->estatus = 2;
                $proyecto->save();

                $response['message'] = "Proyecto Eliminado";
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

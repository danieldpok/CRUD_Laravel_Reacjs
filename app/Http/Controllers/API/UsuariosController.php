<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUsuarioRequest;
use App\Models\CuentaBancaria;
use App\Models\Direccion;
use App\Models\Personas;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\CatRoles;
use App\Models\CatDirEstado;
use App\Models\CatDirMunicipio;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    public function list (){
        $data = User::with("Persona", "CatRoles", "DireccionD","DireccionDF","DireccionD.Estado")
        ->where('estatus', '!=',2)->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function listAsignacion ($id){
        $data = User::with("Persona")
        ->where('estatus', '!=',2)
        ->where('id_asignacion', $id)
        ->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

    public function ListSelectAsignacion ($id){
        $data = User::with("Persona")
        ->where('estatus', '!=',2)
        ->where('id_asignacion', 0)
        ->where('id', '!=', $id)
        ->where('id_rol', '!=', 2)
        ->get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }


    public function create(CreateUsuarioRequest $request){

        $result = DB::transaction(function () use ($request) {

            try {

               $persona = new Personas();
               $persona->nombre = $request['nombre'];
               $persona->apellidoP = $request["paterno"];
               $persona->apellidoM = $request["materno"];
               $persona->razon_social = $request["razon_social"];
               $persona->numero_social = $request["num_seguro_social"];
               $persona->rfc = $request["rfc"];
               $persona->curp = $request["curp"];
               $persona->ine = $request["ine"];
               $persona->telefono1 = $request["telefono1"];
               $persona->telefono2 = $request["telefono2"];
               $persona->tipo_persona = $request["tipo_persona_sat"];
               $persona->save();

               $Cbancaria = new CuentaBancaria();
               $Cbancaria->nombre = $request["datos_bancarios_nombre"];
               $Cbancaria->banco = $request["datos_bancarios_banco"];
               $Cbancaria->clabe = $request["datos_bancarios_clabe"];
               $Cbancaria->cuenta = $request["datos_bancarios_numero_cuenta"];
               $Cbancaria->save();

                $direcciond = new Direccion();
                $direcciond->calle = $request["d_calle"];
                $direcciond->colonia = $request["d_colonia"];
                $direcciond->cp = $request["d_cp"];
                $direcciond->estado = $request["d_estado"];
                $direcciond->municipio = $request["d_municipio"];
                $direcciond->numint = $request["d_numero_int"];
                $direcciond->numext = $request["d_numero_ext"];
                $direcciond->save();

                $direcciondf = new Direccion();
                $direcciondf->calle = $request["df_calle"];
                $direcciondf->colonia = $request["df_colonia"];
                $direcciondf->cp = $request["df_cp"];
                $direcciondf->estado = $request["df_estado"];
                $direcciondf->municipio = $request["df_municipio"];
                $direcciondf->numint = $request["df_numero_int"];
                $direcciondf->numext = $request["df_numero_ext"];
                $direcciondf->save();

                $usuario = new User();
                $usuario->name = $request["usuario"];
                $usuario->password = Hash::make($request["password"]);
                $usuario->email = $request["email"];
                $usuario->id_rol = $request["cat_roles"];
                $usuario->Persona()->associate($persona);
                $usuario->Cuentabancaria()->associate($Cbancaria);
                $usuario->DireccionD()->associate($direcciond);
                $usuario->DireccionDF()->associate($direcciondf);
                $usuario->save();

               $response['message'] = "Save Succes";
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

    public function edit(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $usuario = User::find($id);
                $usuario->name = $request["usuario"];
                $usuario->password = Hash::make($request["password"]);
                $usuario->email = $request["email"];
                $usuario->id_rol = $request["cat_roles"];
                $usuario->save();

                $persona = User::find($id)->Persona;
                $persona->nombre = $request['nombre'];
                $persona->apellidoP = $request["paterno"];
                $persona->apellidoM = $request["materno"];
                $persona->razon_social = $request["razon_social"];
                $persona->numero_social = $request["num_seguro_social"];
                $persona->rfc = $request["rfc"];
                $persona->curp = $request["curp"];
                $persona->ine = $request["ine"];
                $persona->telefono1 = $request["telefono1"];
                $persona->telefono2 = $request["telefono2"];
                $persona->tipo_persona = $request["tipo_persona_sat"];
                $persona->save();

                $Cbancaria = User::find($id)->CuentaBancaria;
                $Cbancaria->nombre = $request["datos_bancarios_nombre"];
                $Cbancaria->banco = $request["datos_bancarios_banco"];
                $Cbancaria->clabe = $request["datos_bancarios_clabe"];
                $Cbancaria->cuenta = $request["datos_bancarios_numero_cuenta"];
                $Cbancaria->save();

                $direcciond = User::find($id)->DireccionD;
                $direcciond->calle = $request["d_calle"];
                $direcciond->colonia = $request["d_colonia"];
                $direcciond->cp = $request["d_cp"];
                $direcciond->estado = $request["d_estado"];
                $direcciond->municipio = $request["d_municipio"];
                $direcciond->numint = $request["d_numero_int"];
                $direcciond->numext = $request["d_numero_ext"];
                $direcciond->save();

                $direcciondf = User::find($id)->DireccionDF;
                $direcciondf->calle = $request["df_calle"];
                $direcciondf->colonia = $request["df_colonia"];
                $direcciondf->cp = $request["df_cp"];
                $direcciondf->estado = $request["df_estado"];
                $direcciondf->municipio = $request["df_municipio"];
                $direcciondf->numint = $request["df_numero_int"];
                $direcciondf->numext = $request["df_numero_ext"];
                $direcciondf->save();

                $response['message'] = "Save Succes";
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

    public function get($id){

        try {
            //$data = Employee::with("roleModelFuncion")->find($id);
            $data = User::with("Persona", "CatRoles", "DireccionD","DireccionDF",
             "Cuentabancaria", "DireccionD.Estado","DireccionD.Municipio", "DireccionDF.Estado","DireccionDF.Municipio")->find($id);

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

    public function delete(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $usuario = User::find($id);
                $usuario->estatus = 2;
                $usuario->save();

                $response['message'] = "Save Succes";
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

    public function addAsignacion(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $usuario = User::find($request["tecnico"]);
                $usuario->id_asignacion = $id;
                $usuario->save();

                $response['message'] = "Save Succes";
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


    public function removeAsignacion(Request $request,$id){

        $result = DB::transaction(function () use ($request,$id) {

            try {

                $usuario = User::find($id);
                $usuario->id_asignacion = 0;
                $usuario->save();

                $response['message'] = "Save Succes";
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

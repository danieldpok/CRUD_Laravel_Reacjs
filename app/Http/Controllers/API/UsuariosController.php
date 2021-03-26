<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
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
    public function list_roles(){
        $data = CatRoles::get();
        $response['data'] = $data;
        $response['success'] = true;
        return $response;
    }

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

    public function create(Request $request){

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
               $Cbancaria->Persona()->associate($persona);
               $Cbancaria->save();

               $direcciond = new Direccion();
               $direcciond->calle = $request["d_calle"];
               $direcciond->colonia = $request["d_colonia"];
               $direcciond->cp = $request["d_cp"];
               $direcciond->estado = $request["d_estado"];
               $direcciond->municipio = $request["d_municipio"];
               $direcciond->numint = $request["d_numero_int"];
               $direcciond->numext = $request["d_numero_ext"];
               $direcciond->Persona()->associate($persona);
               $direcciond->tipo_relacion = 1; //persona
               $direcciond->tipo = 1; // es direccionn domicilio
               $direcciond->save();

               $direcciondf = new Direccion();
               $direcciondf->calle = $request["df_calle"];
               $direcciondf->colonia = $request["df_colonia"];
               $direcciondf->cp = $request["df_cp"];
               $direcciondf->estado = $request["df_estado"];
               $direcciondf->municipio = $request["df_municipio"];
               $direcciondf->numint = $request["df_numero_int"];
               $direcciondf->numext = $request["df_numero_ext"];
               $direcciondf->Persona()->associate($persona);
               $direcciondf->tipo_relacion = 1; //persona
               $direcciondf->tipo = 2; // es direccionn fiscal
               $direcciondf->save();

               $usuario = new User();
               $usuario->name = $request["usuario"];
               $usuario->password = Hash::make($request["password"]);
               $usuario->email = $request["email"];
               $usuario->idrol = $request["cat_roles"];
               $usuario->Persona()->associate($persona);
               $usuario->save();

               $response['message'] = "Save Succes";
               $response['succes'] = true;


            } catch (\Exception $e) {
                DB::rollback();
                $response['message'] = $e->getMessage();
                $response['succes'] = false;
            }

            return $response;
        });

        return $result;

    }
}

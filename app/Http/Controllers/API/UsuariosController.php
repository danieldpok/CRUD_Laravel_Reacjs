<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CatRoles;
use App\Models\CatDirEstado;
use App\Models\CatDirMunicipio;

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
}

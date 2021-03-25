<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatDirMunicipio extends Model
{
    use HasFactory;

    protected $table = "cat_dir_municipios";

    protected  $primaryKey = "id";

    protected $fillable = [
      'nombre,id_estado'
    ];

    public static function municipios($id){
        return CatDirMunicipio::where('id_estado','=',$id)->get();
    }

    public static function saberMunicipio($id){
        return CatDirMunicipio::where('id','=',$id)->pluck('nombre','id');

    }

    public static function saberMunicipioR($id){
        return CatDirMunicipio::where('id','=',$id)->get();

    }
}

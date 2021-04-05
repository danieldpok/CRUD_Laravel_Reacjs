<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direccion extends Model
{
    use HasFactory;

    protected $table = "direccion";

    protected  $primaryKey = "id_direccion";

    public $timestamps = true;

    public function Estado(){
        return $this->belongsTo(CatDirEstado::class, 'estado','id');
    }

    public function Municipio(){
        return $this->belongsTo(CatDirMunicipio::class, 'municipio','id');
    }

}

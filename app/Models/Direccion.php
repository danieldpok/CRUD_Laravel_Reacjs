<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direccion extends Model
{
    use HasFactory;

    protected $table = "direccion";

    protected  $primaryKey = "id";

    public $timestamps = true;

    public function Persona(){
        return $this->belongsTo(Personas::class, 'id_relacion','idpersona');
    }
}

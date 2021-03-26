<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personas extends Model
{
    use HasFactory;

    protected $table = "personas";

    protected  $primaryKey = "idpersona";

    public $timestamps = true;

    public function direccion(){
        return $this->hasMany(Direccion::class, 'id', 'id_relacion');
    }

    public function cuentabancaria(){
        return $this->belongsTo(CuentaBancaria::class, 'personas_idpersona', 'idpersona' );
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CuentaBancaria extends Model
{
    use HasFactory;

    protected $table = "cuenta_bancaria";

    protected  $primaryKey = "idcuenta_bancaria";

    public $timestamps = true;

    public function Persona(){
        return $this->belongsTo(Personas::class, 'personas_idpersona','idpersona');
    }
}

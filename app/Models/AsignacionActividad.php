<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AsignacionActividad extends Model
{
    use HasFactory;

    protected $table = "asignacion_actividades";

    protected  $primaryKey = "id_asignacion_actividades";

    public $timestamps = true;

    public function user_id(){
        return $this->belongsTo(User::class, 'user_id','id');
    }

    public function id_proyecto(){
        return $this->belongsTo(Proyectos::class, 'id_proyecto', 'id_proyecto');
    }

    public function id_cat_servicio(){
        return $this->belongsTo(CatServicios::class, 'id_cat_servicio', 'id');
    }

    public function localidad(){
        return $this->belongsTo(CatDirEstado::class, 'localidad', 'id');
    }

    public function servicios(){
        return $this->hasMany(CapturaServicio::class, 'id_asignacion_actividades', 'id_asignacion_actividades');
    }

    public function factura(){
        return $this->belongsTo(Factura::class, 'id_asignacion_actividades', 'id_asignacion_actividades');
    }

    public function CuentaBancaria(){
        return $this->belongsTo(CuentaBancaria::class, 'user_id','id_cuenta_bancaria');
    }

}


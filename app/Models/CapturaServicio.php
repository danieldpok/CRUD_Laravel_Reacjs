<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CapturaServicio extends Model
{
    use HasFactory;

    protected $table = "captura_servicio";

    protected  $primaryKey = "id_captura_servicio";

    public $timestamps = true;

    public function id_asignacion_actividades(){
        return $this->belongsTo(AsignacionActividad::class, 'id_asignacion_actividades', 'id_asignacion_actividades');
    }


}


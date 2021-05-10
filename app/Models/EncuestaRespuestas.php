<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EncuestaRespuestas extends Model
{
    use HasFactory;

    protected $table = "encuesta_respuestas";

    protected  $primaryKey = "id_encuesta_respuesta";

    public $timestamps = true;
}

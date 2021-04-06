<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatPreguntas extends Model
{
    use HasFactory;

    protected $table = "cat_preguntas";

    protected  $primaryKey = "id";

    protected $fillable = [
        'pregunta,estatus'
    ];

    public $timestamps = true;
}

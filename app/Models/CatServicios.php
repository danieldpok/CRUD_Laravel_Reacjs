<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatServicios extends Model
{
    use HasFactory;

    protected $table = "cat_servicios";

    protected  $primaryKey = "id";

    protected $fillable = [
        'servicio,estatus'
    ];

    public $timestamps = true;
}

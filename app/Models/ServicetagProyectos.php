<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicetagProyectos extends Model
{
    use HasFactory;

    protected $table = "servicetag_proyectos";

    protected  $primaryKey = "id_servicetag_proyectos";

    public $timestamps = true;

}


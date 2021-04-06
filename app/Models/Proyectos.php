<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyectos extends Model
{
    use HasFactory;

    protected $table = "proyectos";

    protected  $primaryKey = "id_proyecto";

    public $timestamps = true;

    public function Direccion(){
        return $this->belongsTo(Direccion::class, 'id_direccion', 'id_direccion');
    }
}

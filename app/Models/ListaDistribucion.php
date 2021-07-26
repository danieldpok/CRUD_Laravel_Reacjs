<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListaDistribucion extends Model
{
    use HasFactory;

    protected $table = "lista_distribucion";

    protected  $primaryKey = "id_lista_distribucion";

    public $timestamps = true;


}

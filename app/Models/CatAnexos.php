<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatAnexos extends Model
{
    use HasFactory;

    protected $table = "cat_tipo_anexos";

    protected  $primaryKey = "id";

    protected $fillable = [
        'tipo_anexo,estatus'
    ];

    public $timestamps = true;
}

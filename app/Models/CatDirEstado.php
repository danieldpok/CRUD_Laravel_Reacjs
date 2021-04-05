<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatDirEstado extends Model
{
    use HasFactory;

    protected $table = "cat_dir_estados";

    protected  $primaryKey = "id";

    protected $fillable = [
      'nombre'
    ];
    
}

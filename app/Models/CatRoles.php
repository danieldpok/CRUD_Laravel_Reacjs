<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatRoles extends Model
{
    use HasFactory;

    protected $table = "cat_roles";

    protected  $primaryKey = "id";

    protected $fillable = [
      'rol,estatus'
    ];

    public $timestamps = true;
}

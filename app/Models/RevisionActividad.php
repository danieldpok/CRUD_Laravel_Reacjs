<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RevisionActividad extends Model
{
    use HasFactory;

    protected $table = "revision_actividades";

    protected  $primaryKey = "id_revision_actividades";

    public $timestamps = true;

}


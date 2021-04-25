<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Proyectos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proyectos', function (Blueprint $table) {
            $table->increments('id_proyecto');
            $table->string('nombre_proyecto',80);
            $table->string('nombre_sucursal',80)->nullable();
            $table->string('nombre_encargado',120)->nullable();
            $table->string('telefono',10)->nullable();
            $table->string('email_encargado',120)->nullable();
            $table->binary('logotipo')->nullable();
            $table->string('comentarios',500)->nullable();
            $table->string('leyenda_responsiva',500)->nullable();
            $table->integer('id_direccion')->unsigned();
            $table->boolean('estatus')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proyectos');
    }
}

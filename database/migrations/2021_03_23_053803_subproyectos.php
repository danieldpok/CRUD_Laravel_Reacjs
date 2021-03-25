<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Subproyectos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subproyectos', function (Blueprint $table) {
            $table->increments('idsubproyecto');
            $table->integer('proyectos_idproyecto')->unsigned();
            $table->foreign('proyectos_idproyecto')->references('idproyecto')->on('proyectos');
            $table->integer('nombre');
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
        Schema::dropIfExists('subproyectos');
    }
}

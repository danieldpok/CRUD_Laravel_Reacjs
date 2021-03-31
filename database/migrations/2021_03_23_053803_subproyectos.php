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
            $table->increments('id_subproyecto');
            $table->integer('id_proyecto')->unsigned();
            $table->foreign('id_proyecto')->references('id_proyecto')->on('proyectos');
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

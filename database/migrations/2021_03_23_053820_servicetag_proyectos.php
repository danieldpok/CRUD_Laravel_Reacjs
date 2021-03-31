<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ServicetagProyectos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicetag_proyectos', function (Blueprint $table) {
            $table->increments('id_servicetag_proyectos');
            $table->string('servicetag',45);
            $table->string('tipo',45);
            $table->string('modelo',45);
            $table->string('marca',45);
            $table->integer('id_proyecto')->unsigned();
            $table->foreign('id_proyecto')->references('id_proyecto')->on('proyectos');
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
        Schema::dropIfExists('servicetag_proyectos');
    }
}

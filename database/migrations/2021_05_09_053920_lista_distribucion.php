<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ListaDistribucion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lista_distribucion', function (Blueprint $table) {
            $table->increments('id_lista_distribucion');
            $table->integer('id_proyecto')->unsigned();
            $table->foreign('id_proyecto')->references('id_proyecto')->on('proyectos');
            $table->string('email',100)->nullable();
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
        Schema::dropIfExists('lista_distribucion');
    }
}

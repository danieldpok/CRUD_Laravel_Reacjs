<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EncuestaRespuestas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encuesta_respuestas', function (Blueprint $table) {
            $table->increments('id_encuesta_respuesta');
            $table->integer('id_captura_servicio')->unsigned();
            $table->foreign('id_captura_servicio')->references('id_captura_servicio')->on('captura_servicio');
            $table->integer('id_pregunta')->unsigned();
            $table->foreign('id_pregunta')->references('id')->on('cat_preguntas');
            $table->string('respuesta',250)->nullable();
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
        Schema::dropIfExists('encuesta_respuestas');
    }
}

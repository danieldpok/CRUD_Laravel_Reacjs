<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RevisionActividades extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('revision_actividades', function (Blueprint $table) {
            $table->increments('id_revision_actividades');
            $table->foreignId('id_user')->nullable()->index();
            //$table->integer('iduser')->unsigned();
            //$table->foreign('iduser')->references('id')->on('users');
            $table->integer('id_captura_servicio')->unsigned();
            $table->foreign('id_captura_servicio')->references('id_captura_servicio')->on('captura_servicio');
            $table->integer('proceso_realizado');
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
        Schema::dropIfExists('revision_actividades');
    }
}

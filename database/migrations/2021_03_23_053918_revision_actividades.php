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
            $table->foreignId('user_id')->constrained()->onDelete('restrict');
            $table->integer('id_asignacion_actividad')->unsigned();
            $table->foreign('id_asignacion_actividad')->references('id_asignacion_actividades')->on('asignacion_actividades');
            $table->boolean('proceso_realizado')->default(0);
            $table->string('comentario',150)->nullable();
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

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Facturas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facturas', function (Blueprint $table) {
            $table->increments('id_factura');
            $table->foreignId('user_id')->constrained()->onDelete('restrict');
            $table->integer('id_asignacion_actividades')->unsigned();
            $table->foreign('id_asignacion_actividades')->references('id_asignacion_actividades')->on('asignacion_actividades');
            $table->string('pdf',150)->nullable();
            $table->string('xml',150)->nullable();
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
        Schema::dropIfExists('facturas');
    }
}

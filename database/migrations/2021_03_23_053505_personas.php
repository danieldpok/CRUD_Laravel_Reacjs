<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Personas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->increments('idpersona');
            $table->string('nombre',45);
            $table->string('apellidoP',45);
            $table->string('apellidoM',45)->nullable();
            $table->integer('numero_social')->nullable();
            $table->string('curp',20)->nullable();
            $table->string('rfc',13)->nullable();
            $table->string('razon_social',120)->nullable();
            $table->string('ine',30)->nullable();
            $table->boolean('tipo_persona')->nullable();
            $table->integer('telefono1')->nullable();
            $table->integer('telefono2')->nullable();
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
        Schema::dropIfExists('personas');
    }
}

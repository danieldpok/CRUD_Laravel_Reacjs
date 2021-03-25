<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CuentaBancaria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuenta_bancaria', function (Blueprint $table) {
            $table->increments('idcuenta_bancaria');
            $table->integer('personas_idpersona')->unsigned();
            $table->foreign('personas_idpersona')->references('idpersona')->on('personas');
            $table->integer('clabe');
            $table->integer('cuenta');
            $table->string('banco',30);
            $table->string('nombre',150);
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
        Schema::dropIfExists('cuenta_bancaria');
    }
}

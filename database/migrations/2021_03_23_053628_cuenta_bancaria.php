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
            $table->increments('id_cuenta_bancaria');
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

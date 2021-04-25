<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Direccion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('direccion', function (Blueprint $table) {
            $table->increments('id_direccion');
            $table->string('calle',45)->nullable();
            $table->string('colonia',45)->nullable();
            $table->string('numint',15)->nullable();
            $table->string('numext',15)->nullable();
            $table->integer('estado')->unsigned();
            $table->foreign('estado')->references('id')->on('cat_dir_estados');
            $table->integer('municipio')->unsigned();
            $table->foreign('municipio')->references('id')->on('cat_dir_municipios');
            $table->string('cp',10)->nullable();
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
        Schema::dropIfExists('direccion');
    }
}

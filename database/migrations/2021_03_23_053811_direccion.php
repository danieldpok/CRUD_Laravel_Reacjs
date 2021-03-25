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
            $table->increments('id');
            $table->string('calle',45);
            $table->string('colonia',45);
            $table->string('numint',15);
            $table->string('numext',15);
            $table->integer('estado')->unsigned();
            $table->foreign('estado')->references('id')->on('cat_dir_estados');
            $table->integer('municipio')->unsigned();
            $table->foreign('municipio')->references('id')->on('cat_dir_municipios');
            $table->string('cp',10);
            $table->tinyInteger('tipo'); //1=direccion domicilio 2=direccion fiscal 3=direccion proyecto
            $table->integer('id_relacion')->unsigned();
            $table->tinyInteger('tipo_relacion'); //1=relacion con persona 2=relacion con proyectos
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

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreacionTablaMunicipios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cat_dir_municipios', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->integer('id_estado')->unsigned();
            $table->foreign('id_estado')->references('id')->on('cat_dir_estados');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cat_dir_municipios');
    }
}

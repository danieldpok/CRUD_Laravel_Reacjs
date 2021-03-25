<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CatServicios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cat_servicios', function (Blueprint $table) {
            $table->increments('id');
            $table->string('servicio',45);
            $table->boolean('estatus')->default(0);
            $table->timestamps();
        });

        \Illuminate\Support\Facades\DB::table('cat_servicios')->insert(array(
            'servicio' => 'RECOLECCION',
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ));

        \Illuminate\Support\Facades\DB::table('cat_servicios')->insert(array(
            'servicio' => 'TECH REFRESH',
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ));

        \Illuminate\Support\Facades\DB::table('cat_servicios')->insert(array(
            'servicio' => 'INSTALACION DE SOFTWARE',
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ));

        \Illuminate\Support\Facades\DB::table('cat_servicios')->insert(array(
            'servicio' => 'CAMBIO DE HARDWARE',
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cat_servicios');
    }
}

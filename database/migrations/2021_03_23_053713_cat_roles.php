<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CatRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cat_roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rol',45);
            $table->boolean('estatus')->default(0);
            $table->timestamps();
        });

        \Illuminate\Support\Facades\DB::table('cat_roles')->insert(array(
            'rol' => 'CLIENTE',
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ));

        \Illuminate\Support\Facades\DB::table('cat_roles')->insert(array(
            'rol' => 'PROVEEDOR',
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ));

        \Illuminate\Support\Facades\DB::table('cat_roles')->insert(array(
            'rol' => 'ADMINISTRATIVO',
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ));

        \Illuminate\Support\Facades\DB::table('cat_roles')->insert(array(
            'rol' => 'TECNICO',
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
        Schema::dropIfExists('cat_roles');
    }
}

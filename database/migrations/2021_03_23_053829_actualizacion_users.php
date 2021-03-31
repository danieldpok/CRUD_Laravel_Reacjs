<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ActualizacionUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('id_persona')->unsigned();
            $table->foreign('id_persona')->references('id_persona')->on('personas');
            $table->integer('id_rol')->unsigned();
            $table->foreign('id_rol')->references('id')->on('cat_roles');
            $table->integer('id_cuenta_bancaria')->unsigned();
            $table->foreign('id_cuenta_bancaria')->references('id_cuenta_bancaria')->on('cuenta_bancaria');
            $table->integer('id_direcciond')->unsigned();
            $table->integer('id_direcciondf')->unsigned();
            $table->boolean('estatus')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('id_persona_foreign');
            $table->dropColumn('id_persona');
            $table->dropForeign('idrol_foreign');
            $table->dropColumn('idrol');
        });
    }
}

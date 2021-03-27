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
            $table->integer('personas_idpersona')->unsigned();
            $table->foreign('personas_idpersona')->references('idpersona')->on('personas');
            $table->integer('idrol')->unsigned();
            $table->foreign('idrol')->references('id')->on('cat_roles');
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
            $table->dropForeign('personas_idpersona_foreign');
            $table->dropColumn('personas_idpersona');
            $table->dropForeign('idrol_foreign');
            $table->dropColumn('idrol');
        });
    }
}

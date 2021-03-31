<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CapturaServicio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('captura_servicio', function (Blueprint $table) {
            $table->increments('id_captura_servicio');
            $table->integer('tipo_computo');
            $table->string('legacy_modelo',45);
            $table->string('legacy_modelo_serie',45);
            $table->string('legacy_monitor_modelo',45);
            $table->string('legacy_monitor_modelo_serie',45);
            $table->string('legacy_usuario_entrega',45);
            $table->string('nuevo_modelo',45);
            $table->string('nuevo_modelo_serie',45);
            $table->string('nuevo_monitor_modelo',45);
            $table->string('nuevo_monitor_modelo_serie',45);
            $table->string('nuevo_usuario_entrega',45);
            $table->string('hostname_legacy',45);
            $table->string('hostname_nuevo',45);
            $table->string('usuario_dominio',45);
            $table->string('observaciones',500);
            $table->integer('id_asignacion_actividades')->unsigned();
            $table->foreign('id_asignacion_actividades')->references('id_asignacion_actividades')->on('asignacion_actividades');
            $table->boolean('estatus')->default(0);
            /*
             *  0= iniciado
                1=capturado
                2=finalizado
                3=revision
                4=autorizacion para pago
                5=pagado pendiente
                6=servicio pagado
                7=cancelado
                8=eliminado
             */
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
        Schema::dropIfExists('captura_servicio');
    }
}

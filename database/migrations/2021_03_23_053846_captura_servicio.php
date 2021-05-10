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
            $table->string('tipo_computo',45)->nullable();
            $table->string('legacy_modelo',45)->nullable();
            $table->string('legacy_modelo_serie',45)->nullable();
            $table->string('legacy_monitor_modelo',45)->nullable();
            $table->string('legacy_monitor_modelo_serie',45)->nullable();
            $table->string('legacy_usuario_entrega',45)->nullable();
            $table->string('nuevo_modelo',45)->nullable();
            $table->string('nuevo_modelo_serie',45)->nullable();
            $table->string('nuevo_monitor_modelo',45)->nullable();
            $table->string('nuevo_monitor_modelo_serie',45)->nullable();
            $table->string('nuevo_usuario_entrega',45)->nullable();
            $table->string('migracionGB',10)->nullable();
            $table->string('hostname_legacy',45)->nullable();
            $table->string('hostname_nuevo',45)->nullable();
            $table->string('usuario_dominio',45)->nullable();
            $table->string('observaciones',500)->nullable();
            $table->integer('id_asignacion_actividades')->unsigned();
            $table->foreign('id_asignacion_actividades')->references('id_asignacion_actividades')->on('asignacion_actividades');
            $table->boolean('estatus')->default(0);
            /*
             *  0= iniciado
                1=Capturado
                2=Eliminado por asignacion
                3=Cancelado no desea realizar el servicio el tecnico
                4=Finalizado Firmado
                5=Finalizada Encuesta
                6=Envio para revison de documentos
                7=Revision Autorizada VoBo  -- Debe de visualizarse en la bandeja del tecnico para aduntar factura
                8=Solicitar VoBo de Factura
                9=VoBo de Factura -- se visualiza para que puedan autorizar el pago
                10=Pendiente de pago
                11=Servicio pagado
                12=Cancelado
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

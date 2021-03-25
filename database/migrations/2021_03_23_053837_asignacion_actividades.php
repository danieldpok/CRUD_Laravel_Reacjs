<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AsignacionActividades extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignacion_actividades', function (Blueprint $table) {
            $table->increments('id');
            $table->string('localidad',45);
            $table->string('nombre_encargado',45);
            $table->string('departamento_encargado',45);
            $table->string('email_encargado',45);
            $table->string('telefono_encargado',10);
            $table->integer('numero_servicios');
            $table->decimal('costo_servicio',10,2);
            $table->tinyInteger('impuesto_iva');
            $table->tinyInteger('impuesto_isr');
            $table->tinyInteger('impuesto_iva_retencion');
            $table->decimal('impuesto_isr_total',10,2);
            $table->decimal('impuesto_iva_retencion_total',10,2);
            $table->string('comentarios',500);
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
        Schema::dropIfExists('asignacion_actividades');
    }
}

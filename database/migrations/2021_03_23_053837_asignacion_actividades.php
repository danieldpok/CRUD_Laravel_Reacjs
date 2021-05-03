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
            $table->increments('id_asignacion_actividades');
            $table->foreignId('user_id')->constrained()->onDelete('restrict');
            $table->integer('id_proyecto')->unsigned();
            $table->foreign('id_proyecto')->references('id_proyecto')->on('proyectos');
            $table->integer('id_cat_servicio')->unsigned();
            $table->foreign('id_cat_servicio')->references('id')->on('cat_servicios');
            $table->string('localidad',45);
            $table->string('nombre_encargado',45);
            $table->string('departamento_encargado',45);
            $table->string('email_encargado',45);
            $table->string('telefono_encargado',10);
            $table->integer('numero_servicios');
            $table->decimal('costo_servicio',10,2);
            $table->tinyInteger('impuesto_iva')->nullable();
            $table->tinyInteger('impuesto_isr')->nullable();
            $table->tinyInteger('impuesto_iva_retencion')->nullable();
            $table->decimal('impuesto_isr_total',10,2)->nullable();
            $table->decimal('impuesto_iva_retencion_total',10,2)->nullable();
            $table->string('comentarios',500)->nullable();
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
                10=Autorizacion para pago
                11=Pendiente de pago
                12=Servicio pagado
                13=Cancelado
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

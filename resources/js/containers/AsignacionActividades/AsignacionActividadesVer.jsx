import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import asignacionActividadesServices from "../../components/services/AsignacionActividades"

const AsignacionActividadesVer = () => {
  const { id } = useParams();
  const [asignacionServicio, setasignacionServicio] = useState([]);

  const getInformacion = async () => {
    const res = await asignacionActividadesServices.get(id);
    setasignacionServicio(res.data);
  }

  useEffect(() => {
    getInformacion();
  }, []);

  return (<div className="AsignacionActividadNuevo">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title" id="from-actions-top-left">
              Asignacion de Actividad
          </h4>
          </div>
        </div>
      </div>
    </div>
    <div className="card-content collpase show">
      <div className="card-body">
        <div className="card-text"></div>
        <form className="form">
          <div className="form-actions text-right">
            <Link
              to="/asignacionActividades"
              type="button"
              className="btn btn-warning mr-1"
            >
              <i className="ft-x"></i>Regresar
          </Link>
          </div>
          <div className="form-body">
            <h4 className="form-section">
              <FontAwesomeIcon icon="user" /> Datos de servicio
          </h4>
            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <label>Tecnico</label>
                <input
                  type="tecnico"
                  className="form-control"
                  placeholder="Nombre Tecnico"
                  name="tecnico"
                  defaultValue={asignacionServicio.user_id?.name || ''}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <label>Proyecto</label>
                <input
                  type="proyecto"
                  className="form-control"
                  placeholder="Proyecto"
                  name="proyecto"
                  defaultValue={asignacionServicio.id_proyecto?.nombre_proyecto || ''}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-2">
                <label>Localidad</label>
                <input
                  type="localidad"
                  className="form-control"
                  placeholder="Localidad"
                  name="localidad"
                  defaultValue={asignacionServicio.localidad?.nombre || ''}
                  disabled
                />
              </div>
              <div className="form-group col-md-6 mb-2">
                <label>Servicio</label>
                <input
                  type="servicio"
                  className="form-control"
                  placeholder="Servicio"
                  name="servicio"
                  defaultValue={asignacionServicio.id_cat_servicio?.servicio || ''}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-2">
                <label>Nombre Encargado</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Encargado"
                  name="nombreEncargado"
                  defaultValue={asignacionServicio.id_proyecto?.nombre_encargado || ''}
                  disabled
                />
              </div>
              <div className="form-group col-md-6 mb-2">
                <label>Departamento Encargado</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Departamento Encargado"
                  name="depEncargado"
                  defaultValue={asignacionServicio.departamento_encargado}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-2">
                <label>E-mail Encargado</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  name="emailEncargado"
                  defaultValue={asignacionServicio.email_encargado}
                  disabled
                />
              </div>
              <div className="form-group col-md-6 mb-2">
                <label>Telefono Encargado</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefono Encargado"
                  name="telefonoEncargado"
                  defaultValue={asignacionServicio.telefono_encargado}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-2">
                <label>Numero de Servicios</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Numero de Servicios"
                  name="num_servicio"
                  defaultValue={asignacionServicio.numero_servicios}
                  disabled
                />
              </div>
              <div className="form-group col-md-6 mb-2">
                <label>Costo por servicio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Costo por Equipo"
                  name="costo_servicio"
                  defaultValue={asignacionServicio.costo_servicio}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-2">
                <label>Impuestos</label>
                <div className="form-control">
                  <input
                    type="checkbox"
                    checked={asignacionServicio.impuesto_iva ? true : false}
                    readOnly
                    className="mr-2 "
                    name="iva"
                  />
                  <label>IVA</label>
                  <input
                    type="checkbox"
                    className="ml-2 mr-2"
                    name="isr"
                    checked={asignacionServicio.impuesto_isr ? true : false}
                    readOnly />
                  <label>ISR</label>
                </div>
              </div>
              <div className="form-group col-md-6 mb-2">
                <label>ISR</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Total ISR Pesos"
                  name="isr_total"
                  defaultValue={asignacionServicio.impuesto_isr_total}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-2">
                <label>Retenciones</label>
                <div className="form-control">
                  <input
                    type="checkbox"
                    className="mr-2 "
                    name="retencioniva"
                    checked={asignacionServicio.impuesto_iva_retencion ? true : false}
                    readOnly
                  />
                  <label>IVA</label>
                </div>
              </div>
              <div className="form-group col-md-6 mb-2">
                <label>Retencion Iva</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Retencion IVA"
                  name="retencioniva_total"
                  defaultValue={asignacionServicio.impuesto_iva_retencion_total}
                  disabled
                />
              </div>
            </div>

            <h4 className="form-section">
              <FontAwesomeIcon icon="info-circle" /> Comentarios
          </h4>
            <div className="row">
              <div className="form-group col-12 mb-2">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Comentarios"
                  name="comentarios"
                  defaultValue={asignacionServicio.comentarios}
                  disabled
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AsignacionActividadesVer;

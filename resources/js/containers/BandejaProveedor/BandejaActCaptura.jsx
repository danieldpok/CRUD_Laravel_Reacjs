import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import cataogoServices from "../../components/services/Catalogos"
import bandejaActividades from "../../components/services/BandejaActividades"


const BandejaActCaptura = () => {
  const { id, idproyecto } = useParams();

  const initialValidation = {
    loading: false,
    error: null,
    error_info: "",
  };

  const { register, handleSubmit, errors, watch } = useForm();
  const form = useRef(null);
  const history = useHistory();
  const [validation, setValidation] = useState(initialValidation);

  const [tipo, setTipo] = useState([]);
  const [equipo, setEquipo] = useState([]);
  const [monitor, setMonitor] = useState([]);
  const [buttonState, setButtonState] = useState(false);

  const getInformacion = async () => {
    const res1 = await cataogoServices.list_tipoEquipo(idproyecto);
    setTipo(res1.data);

    const res2 = await cataogoServices.list_modeloEquipo(idproyecto);
    setEquipo(res2.data);

    const res3 = await cataogoServices.list_modeloMonitor(idproyecto);
    setMonitor(res3.data);
    console.log(res3.data);
  };

  const hSubmit = async () => {
    setButtonState(true);
    const formDara = new FormData(form.current);

    try {
      const res = await bandejaActividades.createServicio(formDara, id);
      if (res.success) {
        toast(res.message, { type: "success" });
        history.push(`/bandejaProveedor/${id}/progreso`);
      }
      else {
        setButtonState(false);
        if (res.data) {
          _.forEach(res.data.errors, function (r) {
            toast(r[0], { type: "error" });
          });
        } else {
          if (res.message.errors) {
            toast(res.message.errors, { type: "error" });
          } else {
            toast(res.message, { type: "error" });
          }

        }
      }

    } catch (error) {
      setButtonState(false);
      toast("Error al crear la asignacion: " + error, { type: "error" });
    }
  };

  useEffect(() => {
    getInformacion()
  }, []);

  return (
    <div className="BandejaActCaptura">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Captura de servicio
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content collpase show">
        <div className="card-body">
          <div className="card-text"></div>
          <form className="form" ref={form}>
            <div className="form-actions text-right">
              <Link
                to={`/bandejaProveedor/${id}/progreso`}
                type="button"
                className="btn btn-warning mr-1"
              >
                <i className="ft-x"></i>Cancelar
              </Link>
              <button
                onClick={handleSubmit(hSubmit)}
                className="btn btn-primary"
                disabled={buttonState}
              >
                <i className="la la-check-square-o"></i> Guardar
              </button>
            </div>
            <div className="form-body">
              <h4 className="form-section">
                <FontAwesomeIcon icon="user" /> Datos de servicio
              </h4>
              <div className="row">
                <div className="form-group col-md-12 mb-2">
                  <label>Tipo de equipo de computo</label>
                  <select
                    name="tipoEquipo"
                    className="form-control"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Seleccionar Equipo Computo</option>
                    {tipo.map((link) => (
                      <option key={link.tipo} value={link.tipo}>
                        {link.tipo}
                      </option>
                    ))}
                  </select>
                  {errors.tipoEquipo && (
                    <p className="text-validate">{errors.tipoEquipo.message}</p>
                  )}
                </div>
              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="info-circle" /> Equipo Legacy
              </h4>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Modelo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Modelo Legacy"
                    name="modeloLegacy"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.modeloLegacy && (
                    <p className="text-validate">
                      {errors.modeloLegacy.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Serie</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Encargado"
                    name="serieLegacy"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.serieLegacy && (
                    <p className="text-validate">
                      {errors.serieLegacy.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Modelo Monitor</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Modelo Legacy"
                    name="monitorModeloLegacy"
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Serie Monitor</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Serie Monitor"
                    name="monitorSerieLegacy"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label>Usuario Entrega</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Usuario Entrega"
                    name="usuarioEntregaLegacy"
                  />
                </div>
              </div>

              <h4 className="form-section">
                <FontAwesomeIcon icon="info-circle" /> Equipo Nuevo
              </h4>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Modelo</label>
                  <select
                    name="modeloNuevo"
                    className="form-control"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Seleccionar Modelo</option>
                    {equipo.map((link) => (
                      <option key={link.modelo_equipo} value={link.modelo_equipo}>
                        {link.modelo_equipo}
                      </option>
                    ))}
                  </select>
                  {errors.modeloNuevo && (
                    <p className="text-validate">
                      {errors.modeloNuevo.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Serie</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Encargado"
                    name="serieNuevo"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.serieNuevo && (
                    <p className="text-validate">{errors.serieNuevo.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Modelo Monitor</label>
                  <select
                    name="monitorModeloNuevo"
                    className="form-control"
                  >
                    <option value="">Seleccionar Modelo</option>
                    {monitor.map((link) => (
                      <option key={link.modelo_monitor} value={link.modelo_monitor}>
                        {link.modelo_monitor}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Serie Monitor</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Serie Monitor"
                    name="monitorSerieNuevo"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label>Usuario Entrega</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Usuario Entrega"
                    name="usuarioEntregaNuevo"
                  />
                </div>
              </div>

              <h4 className="form-section">
                <FontAwesomeIcon icon="info-circle" /> Datos de Migracion
              </h4>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Migracion Migrada en GB</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="GB"
                    name="migracionGB"
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Hostname Equipo Nuevo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hostname equipo nuevo"
                    name="hostnameNuevo"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Hostname Equipo Legado</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hostname equipo legado"
                    name="hostnameLegacy"
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Usuario en Dominio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario en Dominio"
                    name="usuarioDominio"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label>Actividades Realizadas</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Actividades Realizadas"
                    name="usuarioEntregaLegacy"
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

export default BandejaActCaptura;

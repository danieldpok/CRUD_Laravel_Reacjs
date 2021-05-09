import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import asignacionActividadesServices from "../../components/services/AsignacionActividades"
import catalogoServices from "../../components/services/Catalogos";

const AsignacionActividadesNuevo = () => {
  const initialValidation = {
    loading: false,
    error: null,
    error_info: "",
  };

  const { register, handleSubmit, errors, watch } = useForm();
  const form = useRef(null);
  const history = useHistory();
  const [validation, setValidation] = useState(initialValidation);
  const [estados, setEstados] = useState([]);
  const [tecnicos, setTecnicos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  const [buttonState, setButtonState] = useState(false);


  const getTecnicos = async () => {
    const res = await catalogoServices.list_tecnicos();
    setTecnicos(res.data);
  }

  const getServicios = async () => {
    const res = await catalogoServices.list_servicios();
    setServicios(res.data);
  }

  const getProyectos = async () => {
    const res = await catalogoServices.list_proyectos();
    setProyectos(res.data);
  }

  const getEstados = async () => {
    const res = await catalogoServices.listCatEstados();
    setEstados(res.data);
  }

  const hSubmit = async () => {
    setButtonState(true);
    const formDara = new FormData(form.current);

    try {
      const res = await asignacionActividadesServices.createAsignacion(formDara);
      if (res.success) {
        toast(res.message, { type: "success" });
        history.push("/asignacionActividades");
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
    getTecnicos();
    getServicios();
    getProyectos();
    getEstados();
  }, []);

  return (
    <div className="AsignacionActividadNuevo">
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
          <form className="form" ref={form}>
            <div className="form-actions text-right">
              <Link
                to="/asignacionActividades"
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
                  <label>Tecnico</label>
                  <select
                    id="tecnico"
                    name="tecnico"
                    className="form-control"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Seleccionar Tecnico</option>
                    {tecnicos.map((link) => (
                      <option key={link.id} value={link.id}>
                        {link.name}
                      </option>
                    ))}
                  </select>
                  {errors.tecnico && (
                    <p className="text-validate">{errors.tecnico.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12 mb-2">
                  <label>Proyecto</label>
                  <select
                    name="proyecto"
                    className="form-control"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Seleccionar Proyecto</option>
                    {proyectos.map((link) => (
                      <option key={link.id_proyecto} value={link.id_proyecto}>
                        {link.nombre_proyecto}
                      </option>
                    ))}
                  </select>
                  {errors.proyecto && (
                    <p className="text-validate">{errors.proyecto.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Localidad</label>
                  <select
                    className="form-control"
                    name="localidad"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Seleccionar Opcion</option>
                    {estados.map((link) => (
                      <option key={link.id} value={link.id}>{link.nombre}</option>
                    ))}
                  </select>
                  {errors.localidad && (
                    <p className="text-validate">{errors.localidad.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Servicio</label>
                  <select
                    id="cat_servicio"
                    name="cat_servicio"
                    className="form-control"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((link) => (
                      <option key={link.id} value={link.id}>
                        {link.servicio}
                      </option>
                    ))}
                  </select>
                  {errors.cat_servicio && (
                    <p className="text-validate">
                      {errors.cat_servicio.message}
                    </p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.nombreEncargado && (
                    <p className="text-validate">
                      {errors.nombreEncargado.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Departamento Encargado</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Departamento Encargado"
                    name="depEncargado"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.depEncargado && (
                    <p className="text-validate">
                      {errors.depEncargado.message}
                    </p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.emailEncargado && (
                    <p className="text-validate">
                      {errors.emailEncargado.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Telefono Encargado</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telefono Encargado"
                    name="telefonoEncargado"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.telefonoEncargado && (
                    <p className="text-validate">
                      {errors.telefonoEncargado.message}
                    </p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.num_servicio && (
                    <p className="text-validate">
                      {errors.num_servicio.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Costo por servicio</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Costo por Equipo"
                    name="costo_servicio"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.costo_servicio && (
                    <p className="text-validate">
                      {errors.costo_servicio.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Impuestos</label>
                  <div className="form-control">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mr-2 "
                      name="iva"
                    />
                    <label>IVA</label>
                    <input type="checkbox" className="ml-2 mr-2" name="isr" />
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

export default AsignacionActividadesNuevo;

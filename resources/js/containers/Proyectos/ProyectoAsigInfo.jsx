import React, { useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { toast } from "react-toastify";
import { db } from "../../firebase";

const ProyectoAsigInfo = () => {
  const initialValidation = {
    loading: false,
    error: null,
    error_info: "",
  };

  const { register, handleSubmit, errors, watch } = useForm();
  const { state } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const [validation, setValidation] = useState(initialValidation);

  const hSubmit = () => {
    const formDara = new FormData(form.current);
    const usuario = {
      nombre: formDara.get("nombre"),
      paterno: formDara.get("paterno"),
      materno: formDara.get("materno"),
      razon_social: formDara.get("razon_social"),
      email: formDara.get("email"),
      num_seguro_social: formDara.get("num_seguro_social"),
      rfc: formDara.get("rfc"),
      curp: formDara.get("curp"),
      ine: formDara.get("ine"),
      usuario: formDara.get("usuario"),
      password: formDara.get("password"),
      tipo_persona_sat: formDara.get("tipo_persona_sat"),
      datos_bancarios_nombre: formDara.get("datos_bancarios_nombre"),
      datos_bancarios_banco: formDara.get("datos_bancarios_banco"),
      datos_bancarios_clabe: formDara.get("datos_bancarios_clabe"),
      datos_bancarios_numero_cuenta: formDara.get(
        "datos_bancarios_numero_cuenta"
      ),
      d_calle: formDara.get("d_calle"),
      d_colonia: formDara.get("d_colonia"),
      d_cp: formDara.get("d_cp"),
      d_estado: formDara.get("d_estado"),
      d_municipio: formDara.get("d_municipio"),
      d_numero_int: formDara.get("d_numero_int"),
      d_numero_ext: formDara.get("d_numero_ext"),
      d_tipo_direccion: formDara.get("d_tipo_direccion"),
      df_calle: formDara.get("df_calle"),
      df_colonia: formDara.get("df_colonia"),
      df_cp: formDara.get("df_cp"),
      df_estado: formDara.get("df_estado"),
      df_municipio: formDara.get("df_municipio"),
      df_numero_int: formDara.get("df_numero_int"),
      df_numero_ext: formDara.get("df_numero_ext"),
      df_tipo_direccion: formDara.get("df_tipo_direccion"),
      telefono1: formDara.get("telefono1"),
      telefono2: formDara.get("telefono2"),
    };
    addTask(usuario);
  };

  const addTask = async (linkObject) => {
    await db
      .collection("proyectos_informacion")
      .doc()
      .set(linkObject)
      .then((response) => {
        setValidation({ loading: false });
        toast("Se agrego la informacion al proyecto", { type: "success" });
        history.push("/proyectos");
      })
      .catch((err) => {
        toast("Error", { type: "error" });
        setValidation({
          loading: false,
          error: err,
          error_info: err,
        });
      });
  };

  return (
    <div className="ProyectoAsignacionInfo">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Asignar informacion a Proyecto NPM
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
                to="/proyectos"
                type="button"
                className="btn btn-warning mr-1"
              >
                <i className="ft-x"></i>Cancelar
              </Link>
              <button
                onClick={handleSubmit(hSubmit)}
                className="btn btn-primary"
              >
                <i className="la la-check-square-o"></i> Guardar
              </button>
            </div>
            <div className="form-body">
              <h4 className="form-section">
                <FontAwesomeIcon icon="user" /> Datos de sucursal de proyecto
              </h4>
              <div className="row">
                <div className="form-group col-md-12 mb-2">
                  <label>Nombre Sucursal</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Sucursal"
                    name="nombre_sucursal"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.nombre_sucursal && (
                    <p className="text-validate">
                      {errors.nombre_sucursal.message}
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
                    name="nombre_encargado"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.nombre_encargado && (
                    <p className="text-validate">
                      {errors.nombre_encargado.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telefono"
                    name="telefono"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.telefono && (
                    <p className="text-validate">{errors.telefono.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    name="email"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.email && (
                    <p className="text-validate">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Logotipo</label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="logotipo"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.logotipo && (
                    <p className="text-validate">{errors.logotipo.message}</p>
                  )}
                </div>
              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="address-card" /> Direccion Sucursal
              </h4>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label>Calle</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Calle"
                    name="d_calle"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.d_calle && (
                    <p className="text-validate">{errors.d_calle.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Colonia</label>
                  <input
                    type="text"
                    className="form-control"
                    name="d_colonia"
                    placeholder="Colonia"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.d_colonia && (
                    <p className="text-validate">{errors.d_colonia.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>CP</label>
                  <input
                    type="text"
                    className="form-control"
                    name="d_cp"
                    placeholder="CP"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.d_cp && (
                    <p className="text-validate">{errors.d_cp.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Num Int</label>
                  <input
                    type="text"
                    className="form-control"
                    name="d_numero_int"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.d_numero_int && (
                    <p className="text-validate">
                      {errors.d_numero_int.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Num Ext</label>
                  <input
                    type="text"
                    className="form-control"
                    name="d_numero_ext"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.d_numero_ext && (
                    <p className="text-validate">
                      {errors.d_numero_ext.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Estado</label>
                  <input
                    type="text"
                    id="estado"
                    className="form-control"
                    name="d_estado"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.d_estado && (
                    <p className="text-validate">{errors.d_estado.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Municipio</label>
                  <input
                    type="text"
                    id="municipio"
                    className="form-control"
                    name="d_municipio"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.d_municipio && (
                    <p className="text-validate">
                      {errors.d_municipio.message}
                    </p>
                  )}
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
              <h4 className="form-section">
                <FontAwesomeIcon icon="info-circle" /> Leyenda de responsiva
              </h4>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Leyenda de Responsiva"
                    name="responsiva"
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

export default ProyectoAsigInfo;

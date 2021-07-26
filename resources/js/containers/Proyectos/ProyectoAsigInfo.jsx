import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import proyectosServices from "../../components/services/Proyectos";
import catalogosServices from "../../components/services/Catalogos"

const ProyectoAsigInfo = () => {
  const { id } = useParams();
  const idProyecto = id;

  const { register, handleSubmit, errors, watch } = useForm();
  const [proyecto, setProyecto] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const [direccionE, setDireccionE] = useState([]);
  const [direccionM, setDireccionM] = useState([]);
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const formInfoProyecto = useRef(null);
  const history = useHistory();

  /*
  const cambioBase64 = async (file) => {
    const reader = new FileReader();
    reader.onload = function () {
      let binaryString = reader.result;
      const result1 = btoa(binaryString);
      console.log(result1);
      setImageup(result1);
    }
    reader.readAsBinaryString(file);
  }
  */

  const hSubmit = async () => {
    setButtonState(true);
    const formDara = new FormData(formInfoProyecto.current);

    const infoProyecto = {
      idProyecto: idProyecto,
      nombre_sucursal: formDara.get("nombre_sucursal"),
      nombre_encargado: formDara.get("nombre_encargado"),
      telefono: formDara.get("telefono"),
      email: formDara.get("email"),
      logotipo: formDara.get("logotipo"),
      calle: formDara.get("d_calle"),
      colonia: formDara.get("d_colonia"),
      cp: formDara.get("d_cp"),
      numint: formDara.get("d_numero_int"),
      numext: formDara.get("d_numero_ext"),
      estado: formDara.get("d_estado"),
      municipio: formDara.get("d_municipio"),
      comentarios: formDara.get("comentarios"),
      responsiva: formDara.get("responsiva"),
    };


    try {
      const res = await proyectosServices.createProyectoInfo(infoProyecto);
      if (res.success) {
        toast(res.message, { type: "success" });
        history.push("/proyectos");
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
      toast("Error al guardar Proyecto: " + error, { type: "error" });
    }

  };

  const getProyecto = async (id) => {
    const res = await proyectosServices.get(id);
    setProyecto(res.data);
    setDireccion(res.data.direccion);
    setDireccionE(res.data.direccion.estado);
    setDireccionM(res.data.direccion.municipio);
  }

  const getEstados = async () => {
    const res = await catalogosServices.listCatEstados();
    setEstados(res.data);
  }

  const getMunicipio = async (id) => {
    const res = await catalogosServices.list_catMunicipios(id);
    setMunicipios(res.data);
  }


  useEffect(() => {
    getProyecto(idProyecto);
    getEstados();
  }, []);

  return (
    <div className="ProyectoAsignacionInfo">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Asignar informacion a Proyecto: {proyecto.nombre_proyecto}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content collpase show">
        <div className="card-body">
          <div className="card-text"></div>
          <form className="form" ref={formInfoProyecto}>
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
                disabled={buttonState}
              >
                <i className="la la-check-square-o"></i> Guardar
              </button>
            </div>
            <div className="form-body">
              <h4 className="form-section">
                <FontAwesomeIcon icon="user" /> Datos de proyecto
              </h4>
              <div className="row">
                <div className="form-group col-md-12 mb-2">
                  <label>Nombre Sucursal</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Sucursal"
                    defaultValue={proyecto.nombre_sucursal}
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
                    defaultValue={proyecto.nombre_encargado}
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
                    defaultValue={proyecto.telefono}
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
                    defaultValue={proyecto.email_encargado}
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
                    id="logotipo"
                    className="form-control-file"
                    name="logotipo"
                    accept=".jpeg, .png, .jpg"
                  />
                </div>
              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="address-card" /> Direccion Proyecto
              </h4>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label>Calle</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Calle"
                    name="d_calle"
                    defaultValue={direccion.calle}
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
                    defaultValue={direccion.colonia}
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
                    defaultValue={direccion.cp}
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
                    defaultValue={direccion.numint}
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
                    defaultValue={direccion.numext}
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
                  <select
                    className="form-control"
                    name="d_estado"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                    onChange={(event) => getMunicipio(event.target.value)}
                  >
                    <option value={direccionE.id}>{direccionE.nombre}</option>
                    {estados.map((link) => (
                      <option key={link.id} value={link.id}>{link.nombre}</option>
                    ))}
                  </select>
                  {errors.d_estado && (
                    <p className="text-validate">{errors.d_estado.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Municipio</label>
                  <select
                    className="form-control"
                    name="d_municipio"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value={direccionM.id}>{direccionM.nombre}</option>
                    {municipios.map((link) => (
                      <option key={link.id} value={link.id}>{link.nombre}</option>
                    ))}
                  </select>
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
                    defaultValue={proyecto.comentarios}
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
                    defaultValue={proyecto.leyenda_responsiva}
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

import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import usuariosServices from "../../components/services/Usuarios"
import { useParams } from "react-router";

const UsuarioVer = () => {
  const { id } = useParams();
  const idActividad = id;
  const { register, handleSubmit, errors, watch } = useForm();
  const form = useRef(null);
  const history = useHistory();
  const password = useRef({});
  const razon_social = useRef({});
  password.current = watch("password", "");
  razon_social.current = watch("razon_social", "");
  const [roles, setRoles] = useState([]);
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [municipiosDF, setMunicipiosDF] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const [persona, setPersona] = useState([]);
  const [direcciond, setDirecciond] = useState([]);
  const [direcciondf, setDirecciondf] = useState([]);
  const [cuentabancaria, setCuentabancaria] = useState([]);
  const [rol, setRol] = useState([]);
  const [direcciondne, setDirecciondne] = useState([]);
  const [direcciondfne, setDirecciondfne] = useState([]);
  const [direcciondnm, setDirecciondnm] = useState([]);
  const [direcciondfnm, setDirecciondfnm] = useState([]);

  const getRoles = async () => {
    const res = await usuariosServices.listCatRoles();
    setRoles(res.data);
  }

  const getEstados = async () => {
    const res = await usuariosServices.listCatEstados();
    setEstados(res.data);
  }

  const getMunicipio = async (id) => {
    const res = await usuariosServices.list_catMunicipios(id);
    setMunicipios(res.data);
  }

  const getMunicipioDF = async (id) => {
    const res = await usuariosServices.list_catMunicipios(id);
    setMunicipiosDF(res.data);
  }

  const getUsuario = async (id) => {
    const res = await usuariosServices.get(id);
    setUsuario(res.data);
    setPersona(res.data.persona);
    setDirecciond(res.data.direccion_d);
    setDirecciondf(res.data.direccion_d_f);
    setCuentabancaria(res.data.cuentabancaria);
    setRol(res.data.rol);
    setDirecciondne(res.data.direccion_d.estado);
    setDirecciondfne(res.data.direccion_d_f.estado);
    setDirecciondnm(res.data.direccion_d.municipio);
    setDirecciondfnm(res.data.direccion_d_f.municipio);
  }

  useEffect(() => {
    getUsuario(idActividad);
    getRoles();
    getEstados();
  }, []);

  return (
    <div className="UsuarioEditar" >
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Ver Usuario: {usuario.name}
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
                to="/usuarios"
                type="button"
                className="btn btn-warning mr-1"
              >
                <i className="ft-x"></i>Regresar
              </Link>
            </div>
            <div className="form-body">
              <h4 className="form-section">
                <FontAwesomeIcon icon="user" /> Datos Personales
              </h4>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="nombre"
                    disabled
                    defaultValue={persona.nombre}
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Apellido Paterno</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido Paterno"
                    name="paterno"
                    disabled
                    defaultValue={persona.apellidoP}

                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Apellido Materno</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido Materno"
                    name="materno"
                    disabled
                    defaultValue={persona.apellidoM}
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Numero Seguro Social</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Numero de seguro Social"
                    name="num_seguro_social"
                    disabled
                    defaultValue={persona.numero_social}
                  />
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
                    disabled
                    defaultValue={usuario.email}
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>CURP</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CURP"
                    name="curp"
                    defaultValue={persona.curp}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>RFC</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RFC"
                    name="rfc"
                    defaultValue={persona.rfc}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Razon social</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Razon Social"
                    name="razon_social"
                    defaultValue={persona.razon_social}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>INE</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="INE"
                    name="ine"
                    defaultValue={persona.ine}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Tipo persona</label>
                  <div className="custom-control custom-radio">
                    <div className="d-inline-block custom-control custom-radio mr-1">
                      <input
                        type="radio"
                        name="tipo_persona_sat"
                        value="0"
                        aria-label="Radio button for following text input"
                        className="mr-2"
                        disabled
                      />
                      <label>Fisica</label>
                    </div>
                    <div className="d-inline-block custom-control custom-radio">
                      <input
                        type="radio"
                        name="tipo_persona_sat"
                        value="1"
                        aria-label="Radio button for following text input"
                        className="mr-2"
                        disabled
                      />
                      <label>Moral</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Telefono</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefono"
                    name="telefono1"
                    defaultValue={persona.telefono1}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Otro Telefono</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefono"
                    name="telefono2"
                    defaultValue={persona.telefono2}
                    disabled
                  />
                </div>
              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="info-circle" /> App
              </h4>
              <div className="row">
                <div className="form-group col-6 mb-2">
                  <label>Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario"
                    name="usuario"
                    defaultValue={usuario.name}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Rol</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rol"
                    name="rol"
                    defaultValue={rol.rol}
                    disabled
                  />
                </div>
              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="address-card" /> Direccion
              </h4>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label>Calle</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Calle"
                    name="d_calle"
                    defaultValue={direcciond.calle}
                    disabled
                  />
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
                    defaultValue={direcciond.colonia}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>CP</label>
                  <input
                    type="number"
                    className="form-control"
                    name="d_cp"
                    placeholder="CP"
                    defaultValue={direcciond.cp}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Num Int</label>
                  <input
                    type="text"
                    className="form-control"
                    name="d_numero_int"
                    placeholder="Numero Interior"
                    defaultValue={direcciond.numint}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Num Ext</label>
                  <input
                    type="text"
                    className="form-control"
                    name="d_numero_ext"
                    placeholder="Numero Exterior"
                    defaultValue={direcciond.numext}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Estado</label>
                  <input
                    type="text"
                    className="form-control"
                    name="estado"
                    placeholder="Estado"
                    defaultValue={direcciondne.nombre}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Municipio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="municipio"
                    placeholder="Municipio"
                    defaultValue={direcciondnm.nombre}
                    disabled
                  />
                </div>
              </div>
              <div className="input-group mb-3">
                <h4 className="form-section mr-2">
                  <FontAwesomeIcon icon="address-card" /> Direccion Fiscal
                </h4>
              </div>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label>Calle</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Calle"
                    name="df_calle"
                    defaultValue={direcciondf.calle}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Colonia</label>
                  <input
                    type="text"
                    className="form-control"
                    name="df_colonia"
                    placeholder="Colonia"
                    defaultValue={direcciondf.colonia}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>CP</label>
                  <input
                    type="number"
                    className="form-control"
                    name="df_cp"
                    placeholder="CP"
                    defaultValue={direcciondf.cp}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Num Int</label>
                  <input
                    type="text"
                    className="form-control"
                    name="df_numero_int"
                    placeholder="Numero Interior"
                    defaultValue={direcciondf.numint}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Num Ext</label>
                  <input
                    type="text"
                    className="form-control"
                    name="df_numero_ext"
                    placeholder="Numero exterior"
                    defaultValue={direcciondf.numext}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Estado</label>
                  <input
                    type="text"
                    className="form-control"
                    name="estado"
                    placeholder="Estado"
                    defaultValue={direcciondfne.nombre}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Municipio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="municipio"
                    placeholder="Municipio"
                    defaultValue={direcciondfnm.nombre}
                    disabled
                  />
                </div>
              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="address-card" /> Cuenta Bancaria
              </h4>
              <div className="row">
                <div className="form-group col-6 mb-2">
                  <label>Banco</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Banco"
                    name="datos_bancarios_banco"
                    defaultValue={cuentabancaria.banco}
                    disabled
                  />
                </div>
                <div className="form-group col-6 mb-2">
                  <label>Nombre Cuenta</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Banco"
                    name="datos_bancarios_nombre"
                    defaultValue={cuentabancaria.nombre}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>CLABE</label>
                  <input
                    type="number"
                    className="form-control"
                    name="datos_bancarios_clabe"
                    placeholder="CLABE"
                    defaultValue={cuentabancaria.clabe}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Cuenta</label>
                  <input
                    type="number"
                    className="form-control"
                    name="datos_bancarios_numero_cuenta"
                    placeholder="Cuenta"
                    defaultValue={cuentabancaria.cuenta}
                    disabled
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default UsuarioVer;

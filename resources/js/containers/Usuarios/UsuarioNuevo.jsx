import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import usuariosServices from "../../components/services/Usuarios"

const UsuarioNuevo = () => {
  const initialValidation = {
    loading: false,
    error: null,
    error_info: "",
  };

  const { register, handleSubmit, errors, watch } = useForm();
  const form = useRef(null);
  const history = useHistory();
  const password = useRef({});
  const razon_social = useRef({});
  const [validation, setValidation] = useState(initialValidation);
  password.current = watch("password", "");
  razon_social.current = watch("razon_social", "");
  const [roles, setRoles] = useState([]);
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [municipiosDF, setMunicipiosDF] = useState([]);
  const [buttonState, setButtonState] = useState(false);

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

  const hSubmit = async () => {
    setButtonState(true);
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
      cat_rol: formDara.get("cat_roles"),
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

    try {
      const res = await usuariosServices.create(formDara);
      validationsServices.request(res, "/usuarios");
      if (res.success) {
        toast(res.message, { type: "success" });
        history.push("/usuarios");
      }
      else {
        setButtonState(false);
        if (res.data) {
          _.forEach(res.data.errors, function (r) {
            toast(r[0], { type: "error" });
          });
        } else {
          console.log(res);
          if (res.message.errors) {
            toast(res.message.errors, { type: "error" });
          } else {
            toast(res.message, { type: "error" });
          }

        }
      }

    } catch (error) {
      setButtonState(false);
      toast("Error al crear Usuario: " + error, { type: "error" });
    }
  };

  useEffect(() => {
    getRoles();
    getEstados();
  }, []);


  return (
    <div className="UsuarioNuevo" >
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Nuevo Usuario
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
                <i className="ft-x"></i>Cancelar
              </Link>
              <button
                onClick={handleSubmit(hSubmit)}
                className="btn btn-primary"
                disabled={buttonState} >
                <i className="la la-check-square-o"></i> Guardar
              </button>
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
                    ref={register({
                      required: "Este Campo es requerido",
                      minLength: {
                        value: 5,
                        message: "Debe contener 5 caracteres",
                      },
                    })}
                  />
                  {errors.nombre && (
                    <p className="text-validate">{errors.nombre.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Apellido Paterno</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido Paterno"
                    name="paterno"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.paterno && (
                    <p className="text-validate">{errors.paterno.message}</p>
                  )}
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
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Numero Seguro Social</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Numero de seguro Social"
                    name="num_seguro_social"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.num_seguro_social && (
                    <p className="text-validate">
                      {errors.num_seguro_social.message}
                    </p>
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
                  <label>CURP</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CURP"
                    name="curp"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.curp && (
                    <p className="text-validate">{errors.curp.message}</p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.rfc && (
                    <p className="text-validate">{errors.rfc.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Razon social</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Razon Social"
                    name="razon_social"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.razon_social && (
                    <p className="text-validate">
                      {errors.razon_social.message}
                    </p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.ine && (
                    <p className="text-validate">{errors.ine.message}</p>
                  )}
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
                        ref={register({
                          required: "Este Campo es requerido",
                        })}
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
                        ref={register({
                          required: "Este Campo es requerido",
                        })}
                      />
                      <label>Moral</label>
                    </div>
                    {errors.tipo_persona_sat && (
                      <p className="text-validate">
                        {errors.tipo_persona_sat.message}
                      </p>
                    )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.telefono1 && (
                    <p className="text-validate">{errors.telefono1.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Otro Telefono</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefono"
                    name="telefono2"
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.usuario && (
                    <p className="text-validate">{errors.usuario.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Rol</label>
                  <select
                    id="cat_roles"
                    name="cat_roles"
                    className="form-control"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Seleccionar Opcion</option>
                    {roles.map((link) => (
                      <option key={link.id} value={link.id}>
                        {link.rol}
                      </option>
                    ))}
                  </select>
                  {errors.cat_roles && (
                    <p className="text-validate">{errors.cat_roles.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    ref={register({
                      required: "Este Campo es requerido",
                      minLength: {
                        value: 8,
                        message: "Debe contener 8 caracteres",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-validate">{errors.password.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Confirmar Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password_confirmation"
                    placeholder="Confirmar Password"
                    ref={register({
                      validate: (value) =>
                        value === password.current || "El password no coincide",
                    })}
                  />
                  {errors.password_confirmation && (
                    <p className="text-validate">
                      {errors.password_confirmation.message}
                    </p>
                  )}
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
                    type="number"
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
                    placeholder="Numero Interior"
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Num Ext</label>
                  <input
                    type="text"
                    className="form-control"
                    name="d_numero_ext"
                    placeholder="Numero Exterior"
                  />
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
                    <option value="">Seleccionar Opcion</option>
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
                    <option value="">Seleccionar Opcion</option>
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.df_calle && (
                    <p className="text-validate">{errors.df_calle.message}</p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.df_colonia && (
                    <p className="text-validate">{errors.df_colonia.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>CP</label>
                  <input
                    type="number"
                    className="form-control"
                    name="df_cp"
                    placeholder="CP"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.df_cp && (
                    <p className="text-validate">{errors.df_cp.message}</p>
                  )}
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
                  />
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Num Ext</label>
                  <input
                    type="text"
                    className="form-control"
                    name="df_numero_ext"
                    placeholder="Numero exterior"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Estado</label>
                  <select
                    className="form-control"
                    name="df_estado"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                    onChange={(event) => getMunicipioDF(event.target.value)}
                  >
                    <option value="">Seleccionar Opcion</option>
                    {estados.map((link) => (
                      <option key={link.id} value={link.id}>{link.nombre}</option>
                    ))}
                  </select>
                  {errors.df_estado && (
                    <p className="text-validate">{errors.df_estado.message}</p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Municipio</label>
                  <select
                    className="form-control"
                    name="df_municipio"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  >
                    <option value="">Seleccionar Opcion</option>
                    {municipiosDF.map((link) => (
                      <option key={link.id} value={link.id}>{link.nombre}</option>
                    ))}
                  </select>
                  {errors.df_municipio && (
                    <p className="text-validate">
                      {errors.df_municipio.message}
                    </p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.datos_bancarios_banco && (
                    <p className="text-validate">
                      {errors.datos_bancarios_banco.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-6 mb-2">
                  <label>Nombre Cuenta</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Banco"
                    name="datos_bancarios_nombre"
                    ref={register({
                      validate: (value) =>
                        value === razon_social.current ||
                        "Debe ser el mismo nombre de cuenta que la razon social.",
                    })}
                  />
                  {errors.datos_bancarios_nombre && (
                    <p className="text-validate">
                      {errors.datos_bancarios_nombre.message}
                    </p>
                  )}
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
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.datos_bancarios_clabe && (
                    <p className="text-validate">
                      {errors.datos_bancarios_clabe.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Cuenta</label>
                  <input
                    type="number"
                    className="form-control"
                    name="datos_bancarios_numero_cuenta"
                    placeholder="Cuenta"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.datos_bancarios_numero_cuenta && (
                    <p className="text-validate">
                      {errors.datos_bancarios_numero_cuenta.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default UsuarioNuevo;

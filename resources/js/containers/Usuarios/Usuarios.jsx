import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import usuariosServices from "../../components/services/Usuarios"

const Usuarios = () => {
  const columnas = [
    {
      label: "Nombre",
      field: "nombre",
      width: 100,
      attributes: {
        "aria-controls": "DataTable",
        "aria-label": "Nombre",
      },
    },
    {
      label: "Usuario",
      field: "usuario",
      width: 200,
    },
    {
      label: "Email",
      field: "email",
      width: 200,
    },
    {
      label: "Rol",
      field: "rol",
      width: 200,
    },
    {
      label: "Telefono",
      field: "telefono",
      width: 100,
    },
    {
      label: "Lugar",
      field: "lugar",
      width: 100,
    },
    {
      label: "",
      field: "asignar",
      width: 25,
    },
    {
      label: "",
      field: "ver",
      width: 25,
    },
    {
      label: "",
      field: "editar",
      width: 25,
    },
    {
      label: "",
      field: "borrar",
      width: 25,
    },
  ];

  const [datatable, setDatatable] = useState({
    columns: columnas,
    rows: [],
  });

  const onDeleteUsuario = async (id) => {
    if (window.confirm("Seguro que desea eliminar el usuario")) {
      const res = await usuariosServices.delete(id);
      getUsuarios();
      toast("Usuario Eliminado", { type: "error", autoClose: 2000 });
    }
  };

  const getUsuarios = async () => {
    const res = await usuariosServices.list();
    const nuevo = [];
    res.data.forEach((doc) => {
      nuevo.push({
        nombre: doc.persona.nombre,
        usuario: doc.name,
        email: doc.email,
        idrol: doc.id_rol,
        rol: doc.cat_roles.rol,
        telefono: doc.persona.telefono1,
        lugar: doc.direccion_d.estado.nombre,
        asignar: (
          <MDBLink
            to={`/usuarios/${doc.id}/asignar`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-bullseye"></i>
          </MDBLink>
        ),
        ver: (
          <MDBLink
            to={`/usuarios/${doc.id}/ver`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-eye"></i>
          </MDBLink>
        ),
        editar: (
          <MDBLink
            to={`/usuarios/${doc.id}/editar`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-edit"></i>
          </MDBLink>
        ),
        borrar: (
          <MDBBtn
            onClick={() => {
              onDeleteUsuario(doc.id);
            }}
            size="sm"
            color="danger"
          >
            <i className="fas fa-trash-alt"></i>
          </MDBBtn>
        ),
      });
    });
    setDatatable({
      columns: columnas,
      rows: nuevo,
    });

  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div className="Usuarios">
      <Rutas ruta={"Usuarios"} />

      <div className="row mt-4 container-fluid">
        <div className="col-6 card bg-light mb-3 pl-2">
          <div className="card-header">Informacion</div>
          <div className="card-body">
            <div className="card-title">
              <h2>--</h2> <h4>Usuarios activos</h4>
            </div>
            <p className="card-text">
              Los usuarios que se han conectado al sistema durante los ultimos 7
              dias.
            </p>
          </div>
        </div>
        <div className="col-6 card border-light mb-3">
          <div className="card-header">Validacion</div>
          <div className="card-body">
            <h4 className="card-title">Revision de datos</h4>
            <p className="card-text">
              Existen usuarios por agregar informacion
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row-reverse">
        <Link
          to="/usuarios/nuevo"
          type="button"
          className="btn btn-primary p-2"
        >
          Nuevo Usuario
        </Link>
      </div>

      <div className="container-fluid">
        <Tabla datatable={datatable} />
      </div>
    </div>
  );
};

export default Usuarios;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import asignacionActividadesServices from "../../components/services/AsignacionActividades"

const AsignacionActividades = () => {
  const columnas = [
    {
      label: "Proyecto",
      field: "proyecto",
      width: 150,
      attributes: {
        "aria-controls": "DataTable",
        "aria-label": "Proyecto",
      },
    },
    {
      label: "Tecnico",
      field: "tecnico",
      width: 270,
    },
    {
      label: "Localidad",
      field: "localidad",
      width: 270,
    },
    {
      label: "Equipos Asignados",
      field: "num_servicio",
      width: 200,
    },
    {
      label: "Avance",
      field: "avance",
      width: 100,
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

  const onDeleteAsignacion = async (id) => {
    if (window.confirm("Seguro que desea eliminar la asignacion")) {
      const res = await asignacionActividadesServices.delete(id);
      getAsignaciones();
      toast("Asignacion Eliminada", { type: "error", autoClose: 2000 });
    }
  };

  const getAsignaciones = async () => {
    const res = await asignacionActividadesServices.list();
    const nuevo = [];
    res.data.forEach((doc) => {
      nuevo.push({
        proyecto: doc.id_proyecto.nombre_proyecto,
        tecnico: doc.user_id.name,
        localidad: doc.localidad.nombre,
        num_servicio: doc.numero_servicios,
        avance: doc.estatus,
        ver: (
          <MDBLink
            to={`/asignacionActividades/${doc.id_asignacion_actividades}/ver`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-eye"></i>
          </MDBLink>
        ),
        editar: (
          <MDBLink
            to={`/asignacionActividades/${doc.id_asignacion_actividades}/editar`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-edit"></i>
          </MDBLink>
        ),
        borrar: (
          <MDBBtn
            onClick={() => {
              onDeleteAsignacion(doc.id_asignacion_actividades);
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
    getAsignaciones();
  }, []);

  return (
    <div className="AdignacionActividades">
      <Rutas ruta={"Asignacion de Actividades"} />
      <div className="row mt-4 container-fluid">
        <div className="col-6 card bg-light mb-3 pl-2">
          <div className="card-header">Informacion</div>
          <div className="card-body">
            <div className="card-title">
              <h2>--</h2>
              <h4>Servicios Finalizados</h4>
            </div>
            <p className="card-text">
              Un servicio finalizado contiene los documentos completos firmados.
            </p>
          </div>
        </div>
        <div className="col-6 card border-light mb-3">
          <div className="card-header">Informacion</div>
          <div className="card-body">
            <div className="card-title">
              <h2>--</h2>
              <h4>Servicios En curso</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row-reverse">
        <Link
          to="/asignacionActividades/nuevo"
          type="button"
          className="btn btn-primary p-2"
        >
          Nueva asignacion
        </Link>
      </div>

      <div className="container-fluid">
        <Tabla datatable={datatable} />
      </div>
    </div>
  );
};

export default AsignacionActividades;

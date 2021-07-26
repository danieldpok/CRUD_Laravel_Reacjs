import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBIcon, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import bandejaActividades from "../../components/services/BandejaActividades"

const BandejaPendientePago = () => {
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
      label: "Equipos Iniciados",
      field: "equipo_iniciado",
      width: 100,
    },
    {
      label: "Equipos Finalizados",
      field: "equipo_finalizado",
      width: 100,
    },
    {
      label: "Avance",
      field: "avance",
      width: 100,
    },
    {
      label: "",
      field: "asignacion",
      width: 50,
    },
    {
      label: "",
      field: "pago",
      width: 50,
    },
    {
      label: "",
      field: "cancelar",
      width: 50,
    },
  ];

  const [datatable, setDatatable] = useState({
    columns: columnas,
    rows: [],
  });

  const [buttonState, setButtonState] = useState(false);
  const [estatusActividad, setEstatusActividad] = useState(10);

  const onDeleteBandejaAsignacion = async (id) => {
    if (window.confirm("Seguro que desea cancelar la asignacion")) {
      const res = await bandejaActividades.cancelarAsignacion(id);
      getAsignaciones();
      toast("Asignacion Cancelada", { type: "error", autoClose: 2000 });
    }
  };

  const getAsignaciones = async (estatusActividad) => {
    const res = await bandejaActividades.list(estatusActividad);
    const nuevo = [];

    res.data.forEach((doc) => {
      nuevo.push({
        proyecto: doc.id_proyecto.nombre_proyecto,
        localidad: doc.localidad.nombre,
        num_servicio: doc.numero_servicios,
        equipo_iniciado: doc.servicios.length,
        equipo_finalizado: 0,
        avance: "0%",
        asignacion: (
          <MDBLink
            to={`/bandejaProveedor/${doc.id_asignacion_actividades}/progreso`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-eye"></i>
          </MDBLink>
        ),
        pago: (
          <MDBBtn
            to={`/bandejaProveedor/${doc.id_asignacion_actividades}/pago`}
            className="btn btn-outline-success btn-sm p-2"
          >
            <i className="fas fa-hand-holding-usd"></i>
          </MDBBtn>
        ),
        cancelar: (
          <MDBBtn
            onClick={() => {
              onDeleteBandejaAsignacion(doc.id_asignacion_actividades);
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
    getAsignaciones(estatusActividad);
  }, []);

  return (
    <div className="BandejaAct">
      <Rutas ruta={"Bandeja de Actividades"} />
      <div className="row mt-4 container-fluid">
        <div className="col-6 card bg-light mb-3 pl-2">
          <div className="card-header">Informacion</div>
          <div className="card-body">
            <div className="card-title">
              <h2>--</h2>
              <h4>Servicios Finalizados</h4>
            </div>
          </div>
        </div>
        <div className="col-6 card border-light mb-3">
          <div className="card-header">Informacion</div>
          <div className="card-body">
            <div className="card-title">
              <h2>--</h2>
              <h4>Servicios pagados</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex ">
        <Link
          to={`/bandejaProveedor`}
          type="button"
          className="btn btn-secondary ml-1 p-2"
        >Asignaciones Nuevas</Link>
        <Link
          to={`/bandejaProveedor/pendienteFactura`}
          type="button"
          className="btn btn-warning ml-1 p-2"
        >Pendiente Factura</Link>
        <button
          className="btn btn-primary ml-1 p-2"
          disabled={true}
        >Pendientes de pago</button>
        <Link
          to={`/bandejaProveedor/pagadas`}
          type="button"
          className="btn btn-info ml-1 p-2"
        >Pagadas</Link>
        <Link
          to={`/bandejaProveedor/canceladas`}
          type="button"
          className="btn btn-danger ml-1 p-2"
        >Canceladas</Link>
      </div>

      <div className="container-fluid">
        <Tabla datatable={datatable} />
      </div>
    </div>
  );
};

export default BandejaPendientePago;

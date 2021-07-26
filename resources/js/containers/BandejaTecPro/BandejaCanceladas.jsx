import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBIcon, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import bandejaActividades from "../../components/services/BandejaActividades"
import { Button } from "bootstrap";

const BandejaCanceladas = () => {
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
      label: "Estatus",
      field: "estatus",
      width: 100,
    },
  ];

  const [datatable, setDatatable] = useState({
    columns: columnas,
    rows: [],
  });

  const [estatusActividad, setEstatusActividad] = useState(2);

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
        estatus: "Cancelado",
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
          to={`/bandejaActividades`}
          type="button"
          className="btn btn-secondary ml-1 p-2"
        >Asignaciones Nuevas</Link>
        <Link
          to={`/bandejaActividades/pendienteFactura`}
          type="button"
          className="btn btn-warning ml-1 p-2"
        >Pendiente Factura</Link>
        <Link
          to={`/bandejaActividades/pendientePago`}
          type="button"
          className="btn btn-primary ml-1 p-2"
        >Pendientes de pago</Link>
        <Link
          to={`/bandejaActividades/pagadas`}
          type="button"
          className="btn btn-info ml-1 p-2"
        >Pagadas</Link>
        <button
          className="btn btn-danger ml-1 p-2"
          disabled={true}
        >Canceladas</button>
      </div>

      <div className="container-fluid">
        <Tabla datatable={datatable} />
      </div>
    </div>
  );
};

export default BandejaCanceladas;

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBIcon, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import bandejaActividades from "../../components/services/BandejaActividades"

const BandejaPagoRealizado = () => {
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
      label: "Equipos Finalizados",
      field: "equipo_finalizado",
      width: 200,
    },
    {
      label: "",
      field: "servicios",
      width: 50,
    },
  ];

  const [datatable, setDatatable] = useState({
    columns: columnas,
    rows: [],
  });

  const [buttonState, setButtonState] = useState(false);
  const [estatusActividad, setEstatusActividad] = useState(11);

  const onCancelarAccion = async (id) => {
    if (window.confirm("Seguro que desea cancelar el pago")) {
      const estatus = 12;
      const res = await bandejaActividades.revisionAsignacion(id, estatus);
      toast("Pago Cancelado", { type: "error", autoClose: 2000 });
      await getAsignaciones(estatusActividad);
    }
  };

  const onSolicitarAccion = async (id) => {
    if (window.confirm("Seguro que desea autorizar el pago")) {
      const estatus = 11;
      const res = await bandejaActividades.revisionAsignacion(id, estatus);
      toast("Pago Autorizado", { type: "success", autoClose: 2000 });
      await getAsignaciones(estatusActividad);
    }
  };

  const getAsignaciones = async (estatusActividad) => {
    const res = await bandejaActividades.list(estatusActividad);
    const nuevo = [];

    res.data.forEach((doc) => {
      nuevo.push({
        proyecto: doc.id_proyecto.nombre_proyecto,
        localidad: doc.localidad.nombre,
        equipo_finalizado: doc.numero_servicios,
        servicios: (
          <MDBLink
            to={`/bandejaRevision/${doc.id_asignacion_actividades}/revision`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-folder-open"></i>
          </MDBLink>
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
      <Rutas ruta={"Bandeja de Pago"} />

      <div className="d-flex ">
        <button
          className="btn btn-primary ml-1 p-2"
          disabled={true}
        >Bandeja de Pago </button>
        <Link
          to={`/bandejaPagoRealizado`}
          type="button"
          className="btn btn-warning ml-1 p-2"
        >Pagos Realizados</Link>
        <Link
          to={`/bandejaPagoCancelado`}
          type="button"
          className="btn btn-danger ml-1 p-2"
        >Pagos Cancelados</Link>
      </div>

      <div className="container-fluid">
        <Tabla datatable={datatable} />
      </div>
    </div>
  );
};

export default BandejaPagoRealizado;

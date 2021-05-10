import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBIcon, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import bandejaActividades from "../../components/services/BandejaActividades"

const BandejaPosPago = () => {
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
    {
      label: "",
      field: "autorizar",
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
  const [estatusActividad, setEstatusActividad] = useState(9);

  const onCancelarAccion = async (id) => {
    if (window.confirm("Seguro de regresar la factura")) {
      const estatus = 7;
      const res = await bandejaActividades.revisionAsignacion(id, estatus);
      toast("Factura Regresada", { type: "error", autoClose: 2000 });
      await getAsignaciones(estatusActividad);
    }
  };

  const onSolicitarAccion = async (id) => {
    if (window.confirm("Seguro que desea autorizar la factura para pago")) {
      const estatus = 10;
      const res = await bandejaActividades.revisionAsignacion(id, estatus);
      toast("Factura Autorizada para pago", { type: "success", autoClose: 2000 });
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
        autorizar: (
          <MDBBtn
            onClick={() => {
              onSolicitarAccion(doc.id_asignacion_actividades);
            }}
            className="btn btn-outline-success btn-sm p-2"
          >
            <i className="fas fa-check-circle"></i>
          </MDBBtn>
        ),
        cancelar: (
          <MDBBtn
            onClick={() => {
              onCancelarAccion(doc.id_asignacion_actividades);
            }}
            size="sm"
            color="danger"
          >
            <i className="fas fa-minus-circle"></i>
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
      <Rutas ruta={"Bandeja PosPago"} />

      <div className="d-flex ">
        <button
          className="btn btn-primary ml-1 p-2"
          disabled={true}
        >Facturas por Autorizar para pago</button>
      </div>

      <div className="container-fluid">
        <Tabla datatable={datatable} />
      </div>
    </div>
  );
};

export default BandejaPosPago;

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBIcon, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal'
import bandejaActividades from "../../components/services/BandejaActividades"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cuenta Bancaria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Banco: {props.banco}</p>
        <p>Nombre: {props.nombre}</p>
        <p>CLABE: {props.clabe}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const BandejaPago = () => {
  const [modalShow, setModalShow] = useState(false);
  const [cuenta, setCuenta] = useState("");

  const columnas = [
    {
      label: "IdAsig",
      field: "idasig",
      width: 150,
    },
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
      label: "Total Pagar",
      field: "total_pagar",
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
      field: "datos_pago",
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

  const onCancelarAccion = async (id) => {
    if (window.confirm("Seguro que desea cancelar el pago")) {
      const estatus = 12;
      const res = await bandejaActividades.revisionAsignacion(id, estatus);
      toast("Pago Cancelado", { type: "error", autoClose: 2000 });
      await getAsignaciones(estatusActividad);
    }
  };


  const getAsignaciones = async (estatusActividad) => {

    const res = await bandejaActividades.list(estatusActividad);
    const nuevo = [];

    res.data.forEach((doc) => {
      nuevo.push({
        idasig: doc.id_asignacion_actividades,
        proyecto: doc.id_proyecto.nombre_proyecto,
        localidad: doc.localidad.nombre,
        equipo_finalizado: doc.numero_servicios,
        total_pagar: doc.numero_servicios * doc.costo_servicio,
        datos_pago: (
          <MDBBtn
            onClick={() => { setModalShow(true); setCuenta({ nombre: doc.cuenta_bancaria.nombre, clabe: doc.cuenta_bancaria.clabe, banco: doc.cuenta_bancaria.banco }) }}
            size="sm"
            color="primary"
          >
            <i className="fas fa-wallet"></i>
          </MDBBtn>
        ),
        servicios: (
          <MDBLink
            to={`/bandejaRevision/${doc.id_asignacion_actividades}/revision`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-folder-open"></i>
          </MDBLink>
        ),
        autorizar: (
          <MDBLink
            to={`/bandejaPago/${doc.id_asignacion_actividades}/autorizar`}
            className="btn btn-outline-success btn-sm p-2"
          >
            <i className="fas fa-check-circle"></i>
          </MDBLink>
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
      <Rutas ruta={"Bandeja de Pago"} />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        nombre={cuenta.nombre}
        banco={cuenta.banco}
        clabe={cuenta.clabe}
      />

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

export default BandejaPago;

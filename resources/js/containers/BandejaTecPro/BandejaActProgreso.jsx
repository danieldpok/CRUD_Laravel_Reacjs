import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { MDBBtn, MDBIcon, MDBLink } from "mdbreact";
import Tabla from "../../components/Tabla";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import bandejaActividades from "../../components/services/BandejaActividades"

const BandejaActProgeso = () => {
  const { id } = useParams();
  const [asignacionServicio, setAsignacionServicio] = useState([]);

  const columnas = [
    {
      label: "Actividad",
      field: "actividad",
      width: 150,
      attributes: {
        "aria-controls": "DataTable",
        "aria-label": "Proyecto",
      },
    },
    {
      label: "Avance",
      field: "avance",
      width: 270,
    },
    {
      label: "",
      field: "encuesta",
      width: 50,
    },
    {
      label: "",
      field: "firma",
      width: 50,
    },
    {
      label: "",
      field: "trabajar",
      width: 50,
    },
  ];

  const [datatable, setDatatable] = useState({
    columns: columnas,
    rows: [],
  });


  const getBandejaActividadProgreso = async () => {
    const res = await bandejaActividades.get(id);
    const nuevo = [];
    setAsignacionServicio(res.data);

    const serviciosRestantes = res.data.numero_servicios - res.data.servicios.length;
    const idproyecto = res.data.id_proyecto.id_proyecto;

    res.data.servicios.forEach((doc) => {
      nuevo.push({
        actividad: `Servicio ${doc.nuevo_modelo_serie}`,
        avance: "100%",
        trabajar: (
          <MDBLink
            to={`/bandejaActividades/${id}/pdf/${doc.id_captura_servicio}`}
            className="btn btn-outline-danger btn-sm p-2"
          >
            <i className="fas fa-file-pdf"></i>
          </MDBLink>
        ),
        encuesta: (
          <MDBLink
            to={`/bandejaActividades/${id}/encuesta/${doc.id_captura_servicio}`}
            className="btn btn-outline-secondary btn-sm p-2"
          >
            <i className="fas fa-file-invoice"></i>
          </MDBLink>
        ),
        firma: (
          <MDBLink
            to={`/bandejaActividades/${id}/firma/${doc.id_captura_servicio}`}
            className="btn btn-outline-success btn-sm p-2"
          >
            <i className="fas fa-file-signature"></i>
          </MDBLink>
        ),
      });
    });
    //Los que aun no se capturan
    for (var i = 1; i <= serviciosRestantes; i++) {
      nuevo.push({
        actividad: "Servicio sin capturar",
        avance: "0%",
        trabajar: (
          <MDBLink
            to={`/bandejaActividades/${id}/captura/${idproyecto}`}
            className="btn btn-outline-primary btn-sm p-2"
          >
            <i className="fas fa-pen-square"></i>
          </MDBLink>
        ),
      });
    }

    setDatatable({
      columns: columnas,
      rows: nuevo,
    });
  };

  useEffect(() => {
    getBandejaActividadProgreso();
  }, []);

  return (
    <div className="BandejaProgreso">
      <Rutas ruta={"Bandeja de Actividades"} />
      <div className="row mt-4 container-fluid">
        <div className="col-12 card bg-light mb-3 pl-2">
          <div className="card-header">
            <h4 className="form-section">
              <FontAwesomeIcon icon="user" /> Datos de Asignacion
            </h4>
          </div>
          <div className="card-body">
            <div className="card-title">
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Localidad</label>
                  <label className="form-control">
                    {asignacionServicio.localidad?.nombre || ''}
                  </label>
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Servicio</label>
                  <label className="form-control">
                    {asignacionServicio.id_cat_servicio?.servicio || ''}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Nombre Encargado</label>
                  <label className="form-control">
                    {asignacionServicio.nombre_encargado}
                  </label>
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Departamento Encargado</label>
                  <label className="form-control">
                    {asignacionServicio.departamento_encargado}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>E-mail Encargado</label>
                  <label className="form-control">
                    {asignacionServicio.email_encargado}
                  </label>
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Telefono Encargado</label>
                  <label className="form-control">
                    {asignacionServicio.telefono_encargado}
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Numero de Servicios</label>
                  <label className="form-control">
                    {asignacionServicio.numero_servicios}
                  </label>
                </div>

                <div className="form-group col-md-6 mb-2">
                  <label>Costo por servicio</label>
                  <label className="form-control">
                    {asignacionServicio.costo_servicio}
                  </label>
                </div>

              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="info-circle" /> Comentarios
              </h4>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label className="form-control">
                    {asignacionServicio.comentarios}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <Tabla datatable={datatable} />
      </div>
    </div>
  );
};

export default BandejaActProgeso;

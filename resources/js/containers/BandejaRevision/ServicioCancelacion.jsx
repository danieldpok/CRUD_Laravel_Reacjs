import React, { useState, useRef, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Rutas from "../../components/Rutas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import bandejaRevision from "../../components/services/BandejaRevision";
import bandejaActividades from "../../components/services/BandejaActividades";
import { toast } from "react-toastify";

const ServicioCancelacion = () => {
  const { id } = useParams();
  const [asignacionServicio, setAsignacionServicio] = useState([]);
  const { register, handleSubmit, errors, watch } = useForm();
  const form = useRef(null);
  const history = useHistory();
  const [buttonState, setButtonState] = useState(false);

  const getBandejaActividadProgreso = async () => {
    const res = await bandejaActividades.get(id);
    setAsignacionServicio(res.data);
  };

  const hSubmit = async () => {
    setButtonState(true);
    const formDara = new FormData(form.current);

    try {
      const res = await bandejaRevision.revisionCancelar(formDara, id);
      if (res.success) {
        toast(res.message, { type: "success" });
        history.push("/bandejaRevision");
      }
      else {
        setButtonState(false);
        if (res.data) {
          _.forEach(res.data.errors, function (r) {
            toast(r[0], { type: "error" });
          });
        } else {
          if (res.message.errors) {
            toast(res.message.errors, { type: "error" });
          } else {
            toast(res.message, { type: "error" });
          }

        }
      }

    } catch (error) {
      setButtonState(false);
      toast("Error al crear la asignacion: " + error, { type: "error" });
    }
  };

  useEffect(() => {
    getBandejaActividadProgreso();
  }, []);

  return (
    <div className="BandejaProgreso">
      <Rutas ruta={"Revision"} />
      <div className="row mt-4 container-fluid">
        <div className="col-12 card bg-light mb-3 pl-2">
          <div className="card-header">
            <h4 className="form-section">
              Cancelacion ID {asignacionServicio.id_asignacion_actividades}
            </h4>
          </div>
          <div className="card-body">

            <div className="card-title">
              <form className="form" ref={form}>
                <div className="form-actions text-right">
                  <Link
                    to="/bandejaRevision"
                    type="button"
                    className="btn btn-warning mr-1"
                  >
                    <i className="ft-x"></i>Cancelar
              </Link>
                  <button
                    onClick={handleSubmit(hSubmit)}
                    className="btn btn-primary"
                    disabled={buttonState}
                  >
                    <i className="la la-check-square-o"></i> Guardar
              </button>
                </div>
                <h4 className="form-section">
                  <FontAwesomeIcon icon="info-circle" /> Motivo de Cancelacion
              </h4>
                <div className="row">
                  <div className="form-group col-12 mb-2">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Comentarios"
                      name="comentarios"
                      ref={register({
                        required: "Este Campo es requerido",
                      })}
                    />
                    {errors.comentarios && (
                      <p className="text-validate">
                        {errors.comentarios.message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicioCancelacion;

import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import asignacionActividadesServices from "../../components/services/AsignacionActividades"
import bandejaActividades from "../../components/services/BandejaActividades"

const BandejaPagoAutorizar = () => {
  const { id } = useParams();
  const { register, handleSubmit, errors, watch } = useForm();
  const form = useRef(null);
  const history = useHistory();

  const [buttonState, setButtonState] = useState(false);

  const hSubmit = async () => {
    setButtonState(true);
    const formDara = new FormData(form.current);

    try {
      const estatus = 11;
      const res = await bandejaActividades.revisionAsignacion(id, estatus);
      if (res.success) {
        toast("Pago Autorizado", { type: "success", autoClose: 2000 });
        history.push("/bandejaPago");
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
      toast("Error al realizar el pago: " + error, { type: "error" });
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div className="BandejaPagoAutorizar">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Autorizar Pago
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
                to="/bandejaPago"
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
                <i className="la la-check-square-o"></i> Guardar Pago
              </button>
            </div>
            <div className="form-body">
              <h4 className="form-section">
                <FontAwesomeIcon icon="user" /> Datos de pago
              </h4>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Fecha Pago</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fecha Pago"
                    name="fechaPago"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.fechaPago && (
                    <p className="text-validate">
                      {errors.fechaPago.message}
                    </p>
                  )}
                </div>
                <div className="form-group col-md-6 mb-2">
                  <label>Folio Internet</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Folio Internet"
                    name="folioInternet"
                    ref={register({
                      required: "Este Campo es requerido",
                    })}
                  />
                  {errors.folioInternet && (
                    <p className="text-validate">
                      {errors.folioInternet.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label>Solicitar Complemento de pago</label>
                  <div className="form-control">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mr-2 "
                      name="complementoPago"
                    />
                  </div>
                </div>
              </div>
              <h4 className="form-section">
                <FontAwesomeIcon icon="info-circle" /> Comentarios
              </h4>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Comentarios"
                    name="comentarios"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BandejaPagoAutorizar;

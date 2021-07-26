import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import cataogoServices from "../../components/services/Catalogos"
import bandejaActividades from "../../components/services/BandejaActividades"


const BandejaActEncuesta = () => {
  const { id, idAsignacion } = useParams();

  const initialValidation = {
    loading: false,
    error: null,
    error_info: "",
  };

  const { register, handleSubmit, errors, watch } = useForm();
  const form = useRef(null);
  const history = useHistory();
  const [validation, setValidation] = useState(initialValidation);
  const [pregunta, setPregunta] = useState([]);
  const [buttonState, setButtonState] = useState(false);

  const getInformacion = async () => {
    const res = await cataogoServices.list_preguntas();
    setPregunta(res.data);
  };

  const hSubmit = async () => {
    setButtonState(true);
    const formDara = new FormData(form.current);

    try {
      const res = true;
      if (res) {
        toast("Guardado Exitosamente", { type: "success" });
        history.push(`/bandejaProveedor/${idAsignacion}/progreso`);
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
    getInformacion()
  }, []);

  return (
    <div className="BandejaActCaptura">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title" id="from-actions-top-left">
                Encuesta de servicio
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
                to={`/bandejaProveedor/${idAsignacion}/progreso`}
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
            <div className="form-body">
              <h4 className="form-section">
                <FontAwesomeIcon icon="user" /> Preguntas
              </h4>
              <div className="row">
                {pregunta.map((link, index) => (
                  <div className="form-group col-md-12 mb-2" key={index}>
                    <label>{link.pregunta}</label>
                    <textarea
                      type="text"
                      className="form-control"
                      name={`respuesta[${index}]`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BandejaActEncuesta;

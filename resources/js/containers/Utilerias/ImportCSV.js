import React, { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Utilerias = () => {

    const { register, handleSubmit, errors, watch } = useForm();
    const form = useRef(null);
    const history = useHistory();

    const [buttonState, setButtonState] = useState(false);

    const hSubmit = async () => {
        setButtonState(true);
        const formDara = new FormData(form.current);

        try {
            setButtonState(false);
            toast("Error al cargar el archivo: " + error, { type: "error" });

        } catch (error) {
            setButtonState(false);
            toast("Error al cargar el archivo: " + error, { type: "error" });
        }
    };

    useEffect(() => {
    }, []);

    return (
        <div className="Utilerias">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title" id="from-actions-top-left">
                                Asignacion de Actividad
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
                                to="/"
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
                                SergiceTag
                            </h4>
                            <div className="row">
                                <div className="form-group col-md-6 mb-2">
                                    <label>CSV</label>
                                    <div className="custom-file">
                                        <input type="file" className="form-control custom-file-input" name="filecsv" id="filecsv" />
                                        <label className="form-control custom-file-label">Examinar</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Utilerias;

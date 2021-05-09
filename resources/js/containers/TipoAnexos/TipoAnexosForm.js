import React, { useState, useEffect } from "react";
import tipoAnexosServices from "../../components/services/TipoAnexos";


const initialStateValues = {
    tipo_anexo: "",
};

const TipoAnexoForm = (props) => {
    const [values, setValues] = useState(initialStateValues);

    const hangleSubmit = (e) => {
        e.preventDefault();
        props.addTask(values);
        setValues({ ...initialStateValues });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const getLinkbyId = async (id) => {
        const doc = await tipoAnexosServices.get(id);
        setValues({ ...doc.data });
    };

    useEffect(() => {
        if (props.currentId === "") {
            setValues({ ...initialStateValues });
        } else {
            getLinkbyId(props.currentId);
        }
    }, [props.currentId]);

    return (
        <form className="card card-body" onSubmit={hangleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bd-light">Tipo Anexo</div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tipo Anexo"
                    name="tipo_anexo"
                    required
                    onChange={handleInputChange}
                    value={values.tipo_anexo}
                />
            </div>
            {/*<div className="from-group input-group mb-2">
                <div className="custom-control custom-switch">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        disabled=""
                        checked
                        name="estatus"
                        id="customSwitch2"
                        onChange={handleInputChange}
                        value={values.estatus}
                    />
                    <label className="custom-control-label">
                        Estatus
          </label>
                </div>
            </div>
           */}
            <button className="btn btn-primary">
                {props.currentId === "" ? "Save" : "Update"}
            </button>
        </form>
    );
};

export default TipoAnexoForm;

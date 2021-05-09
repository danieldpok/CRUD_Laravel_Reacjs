import React, { useState, useEffect } from "react";
import preguntasServices from "../../components/services/Preguntas";

const initialStateValues = {
    pregunta: "",
};

const preguntasForm = (props) => {
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
        const doc = await preguntasServices.get(id);
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
                <div className="input-group-text bd-light">Pregunta</div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pregunta"
                    name="pregunta"
                    required
                    onChange={handleInputChange}
                    value={values.pregunta}
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

export default preguntasForm;

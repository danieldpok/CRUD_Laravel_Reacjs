import React, { useState, useEffect } from "react";
import proyectosServices from "../components/services/Proyectos";
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"


const initialStateValues = {
    nombre_proyecto: "",
};

const ProyectosForm = (props) => {
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
        const doc = await proyectosServices.get(id);
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
                <div className="input-group-text bd-light">Proyectos</div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del proyecto"
                    name="nombre_proyecto"
                    required
                    onChange={handleInputChange}
                    value={values.nombre_proyecto}
                />
            </div>
            <div className="from-group input-group mb-2">
                <FormControlLabel
                    control={<Switch name="estatus" />}
                    label="Estatus"
                />
            </div>
            <button className="btn btn-primary">
                {props.currentId === "" ? "Save" : "Update"}
            </button>
        </form>
    );
};

export default ProyectosForm;

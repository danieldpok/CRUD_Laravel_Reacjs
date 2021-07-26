import React, { useState, useEffect } from "react";
import listaDistribucionServices from "../../components/services/ListaDistribucion";
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const initialStateValues = {
    email: "",
};

const ListaForm = (props) => {
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
        const doc = await listaDistribucionServices.get(id);
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
                <div className="input-group-text bd-light">Email</div>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Add Email"
                    name="email"
                    required
                    onChange={handleInputChange}
                    value={values.email}
                />
            </div>
            <button className="btn btn-primary">
                {props.currentId === "" ? "Agregar" : "Update"}
            </button>
        </form>
    );
};

export default ListaForm;

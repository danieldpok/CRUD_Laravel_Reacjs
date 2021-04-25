import React, { useState, useEffect } from "react";

const initialStateValues = {
    name: "",
    estatus: true,
};

const RolesForm = (props) => {
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
        const doc = await db.collection("roles").doc(id).get();
        setValues({ ...doc.data() });
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
                <div className="input-group-text bd-light">Rol</div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de Rol"
                    name="name"
                    required
                    onChange={handleInputChange}
                    value={values.name}
                />
            </div>
            <div className="from-group input-group mb-2">
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
                    <label className="custom-control-label" for="customSwitch2">
                        Estatus
          </label>
                </div>
            </div>
            <button className="btn btn-primary">
                {props.currentId === "" ? "Save" : "Update"}
            </button>
        </form>
    );
};

export default RolesForm;

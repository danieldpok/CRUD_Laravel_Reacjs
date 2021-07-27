import React, { useState, useEffect } from "react";
import listaDistribucionServices from "../../components/services/ListaDistribucion";
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import UsuariosAsignacion from "../../components/services/Usuarios"

const initialStateValues = {
    tecnico: "",
};

const ListaForm = (props) => {
    const [values, setValues] = useState(initialStateValues);
    const [tecnicos, setTecnicos] = useState([]);

    const hangleSubmit = (e) => {
        e.preventDefault();
        props.addTask(values);
        setValues({ ...initialStateValues });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const getLinkbyId = async (id) => {
        const doc = await listaDistribucionServices.get(id);
        setValues({ ...doc.data });
    };

    const getTecnicos = async () => {
        const res = await UsuariosAsignacion.listSelectAsignacion(props.idUsuario);
        setTecnicos(res.data);
    }

    useEffect(() => {
        getTecnicos();
        if (props.currentId === "") {
            setValues({ ...initialStateValues });
        } else {
            getLinkbyId(props.currentId);
        }
    }, [props.currentId]);

    return (
        <form className="card card-body" onSubmit={hangleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bd-light">Usuario</div>
                <select
                    id="tecnico"
                    name="tecnico"
                    className="form-control"
                    onChange={handleSelectChange}
                >
                    <option value="">Seleccionar Usuario</option>
                    {tecnicos.map((link) => (
                        <option key={link.id} value={link.id}>
                            {link.name}
                        </option>
                    ))}
                </select>
            </div>
            <button className="btn btn-primary">
                {props.currentId === "" ? "Asignar" : "Update"}
            </button>
        </form>
    );
};

export default ListaForm;

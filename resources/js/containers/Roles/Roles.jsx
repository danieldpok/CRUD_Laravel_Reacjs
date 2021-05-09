import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { toast } from "react-toastify";
import RolesForm from "./RolesForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rolServices from "../../components/services/Roles"

const Roles = () => {
    const [status, setStatus] = useState(false);
    const changue = (e) => {
        setStatus(!status);
    };

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addTask = async (linkObject) => {
        if (currentId === "") {
            //para diferenciar el mismo boton si actualiza o es nuevo
            const res = await rolServices.createRol(linkObject);
            getLink();
            toast("Nueva tarea agregada", { type: "success" });
        } else {
            const res = await rolServices.update(linkObject)
            getLink();
            toast("Actualizado con exito", { type: "info" });
            setCurrentId("");
        }

    };

    const onDeleteLink = async (id) => {
        if (window.confirm("Deseas Eliminar")) {
            const res = await rolServices.delete(id);
            getLink();
            toast("Rol Eliminado", { type: "error", autoClose: 2000 });
        }
    };

    const getLink = async () => {
        const res = await rolServices.list();
        const nuevo = [];
        res.data.forEach((doc) => {
            nuevo.push({
                id: doc.id,
                rol: doc.rol,
            });
        });
        setLinks(nuevo);
    };

    useEffect(() => {
        getLink();
    }, []);

    return (
        <div className="Roles">
            <Rutas ruta={"Roles"} />

            <div className="row">
                <div className="col-md-4 p-2">
                    <RolesForm {...{ addTask, currentId, links }} />
                </div>
                <div className="col-md-8">
                    {links.map((link) => (
                        <div className="card mb-1" key={link.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4> {link.rol}</h4>
                                    <div>
                                        <span
                                            className="text-danger p-2"
                                            onClick={() => onDeleteLink(link.id)}
                                        >
                                            Borrar
                    </span>
                                        <span
                                            className="text-danger"
                                            onClick={() => setCurrentId(link.id)}
                                        >
                                            Editar
                    </span>
                                    </div>
                                </div>
                Estatus :{" "}
                                <FontAwesomeIcon icon="check-circle" className="text-success" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roles;

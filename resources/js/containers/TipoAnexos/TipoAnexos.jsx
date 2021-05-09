import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { toast } from "react-toastify";
import TipoAnexosForm from "./TipoAnexosForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tipoAnexosServices from "../../components/services/TipoAnexos";

const tipoAnexos = () => {
    const [status, setStatus] = useState(false);
    const changue = (e) => {
        setStatus(!status);
    };

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addTask = async (linkObject) => {
        if (currentId === "") {
            //para diferenciar el mismo boton si actualiza o es nuevo
            const res = await tipoAnexosServices.createTipoAnexo(linkObject);
            getLink();
            toast("Nueva tarea agregada", { type: "success" });
        } else {
            const res = await tipoAnexosServices.update(linkObject)
            getLink();
            toast("Actualizado con exito", { type: "info" });
            setCurrentId("");
        }

    };

    const onDeleteLink = async (id) => {
        if (window.confirm("Deseas Eliminar")) {
            const res = await tipoAnexosServices.delete(id);
            getLink();
            toast("Tipo Anexo Eliminado", { type: "error", autoClose: 2000 });
        }
    };

    const getLink = async () => {
        const res = await tipoAnexosServices.list();
        const nuevo = [];
        res.data.forEach((doc) => {
            nuevo.push({
                id: doc.id,
                tipo_anexo: doc.tipo_anexo,
            });
        });
        setLinks(nuevo);
    };

    useEffect(() => {
        getLink();
    }, []);

    return (
        <div className="Tipo_Anexos">
            <Rutas ruta={"Tipo Anexos"} />

            <div className="row">
                <div className="col-md-4 p-2">
                    <TipoAnexosForm {...{ addTask, currentId, links }} />
                </div>
                <div className="col-md-8">
                    {links.map((link) => (
                        <div className="card mb-1" key={link.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4> {link.tipo_anexo}</h4>
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

export default tipoAnexos;

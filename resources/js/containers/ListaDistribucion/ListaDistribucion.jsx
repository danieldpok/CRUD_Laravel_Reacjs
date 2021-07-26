import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ListaForm from "./ListaForm";
import listaDistribucionServices from "../../components/services/ListaDistribucion"

const listaDistribucion = () => {
    const { id } = useParams();
    const idProyecto = id;
    const [status, setStatus] = useState(false);
    const changue = (e) => {
        setStatus(!status);
    };

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addTask = async (linkObject) => {
        if (currentId === "") {
            //para diferenciar el mismo boton si actualiza o es nuevo
            const res = await listaDistribucionServices.addEmail(linkObject, idProyecto);
            getLink();
            toast("Email Agregado", { type: "success" });
        } else {
            const res = await listaDistribucionServices.update(linkObject)
            getLink();
            toast("Email Actualizado", { type: "info" });
            setCurrentId("");
        }

    };

    const onDeleteLink = async (id) => {
        if (window.confirm("Deseas Eliminar")) {
            const res = await listaDistribucionServices.delete(id);
            getLink();
            toast("Email Eliminado", { type: "error", autoClose: 2000 });
        }
    };

    const getLink = async () => {
        const res = await listaDistribucionServices.list(idProyecto);
        const nuevo = [];
        res.data.forEach((doc) => {
            nuevo.push({
                id: doc.id_lista_distribucion,
                email: doc.email,
            });
        });
        setLinks(nuevo);
    };

    useEffect(() => {
        getLink();
    }, []);

    return (
        <div className="ListaDistribucion">
            <Rutas ruta={"Lista Distribucion"} />
            <div className="row">
                <div className="col-md-6 ">
                    <ListaForm {...{ addTask, currentId, links }} />
                </div>
                <div className="col-md-6">
                    {links.map((link) => (
                        <div className="card mb-1" key={link.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4> {link.email}</h4>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default listaDistribucion;

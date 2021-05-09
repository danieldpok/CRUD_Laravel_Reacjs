import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { toast } from "react-toastify";
import ServiciosForm from "./ServiciosForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import servicioServices from "../../components/services/Servicios";

const Servicios = () => {
    const [status, setStatus] = useState(false);
    const changue = (e) => {
        setStatus(!status);
    };

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addTask = async (linkObject) => {
        if (currentId === "") {
            //para diferenciar el mismo boton si actualiza o es nuevo
            const res = await servicioServices.createServicio(linkObject);
            getLink();
            toast("Nueva tarea agregada", { type: "success" });
        } else {
            const res = await servicioServices.update(linkObject)
            getLink();
            toast("Actualizado con exito", { type: "info" });
            setCurrentId("");
        }

    };

    const onDeleteLink = async (id) => {
        if (window.confirm("Deseas Eliminar")) {
            const res = await servicioServices.delete(id);
            getLink();
            toast("Rol Eliminado", { type: "error", autoClose: 2000 });
        }
    };

    const getLink = async () => {
        const res = await servicioServices.list();
        const nuevo = [];
        res.data.forEach((doc) => {
            nuevo.push({
                id: doc.id,
                servicio: doc.servicio,
            });
        });
        setLinks(nuevo);
    };

    useEffect(() => {
        getLink();
    }, []);

    return (
        <div className="Servicios">
            <Rutas ruta={"Servicios"} />

            <div className="row">
                <div className="col-md-4 p-2">
                    <ServiciosForm {...{ addTask, currentId, links }} />
                </div>
                <div className="col-md-8">
                    {links.map((link) => (
                        <div className="card mb-1" key={link.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4> {link.servicio}</h4>
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

export default Servicios;

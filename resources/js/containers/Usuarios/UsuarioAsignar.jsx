import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ListaForm from "./ListaForm";
import UsuariosAsignacion from "../../components/services/Usuarios"

const usuarioAsignar = () => {
    const { id } = useParams();
    const idUsuario = id;
    const [status, setStatus] = useState(false);
    const changue = (e) => {
        setStatus(!status);
    };

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addTask = async (linkObject) => {
        const res = await UsuariosAsignacion.addAsignacion(linkObject, idUsuario)
        getLink();
        toast("Asignacion Actualizada", { type: "info" });
        setCurrentId("");
    };

    const onDeleteLink = async (id) => {
        if (window.confirm("Deseas Desasignar")) {
            const res = await UsuariosAsignacion.removeAsignacion(id);
            getLink();
            toast("Desasignacion Realizada", { type: "error", autoClose: 2000 });
        }
    };

    const getLink = async () => {
        const res = await UsuariosAsignacion.listAsignacion(idUsuario);
        const nuevo = [];
        res.data.forEach((doc) => {
            nuevo.push({
                id: doc.id,
                name: doc.name,
                email: doc.email,
            });
        });
        setLinks(nuevo);
    };

    useEffect(() => {
        getLink();
    }, []);

    return (
        <div className="AsigarUsuario">
            <Rutas ruta={"Asignar Usuario"} />
            <div className="row">
                <div className="col-md-6 ">
                    <ListaForm {...{ addTask, currentId, links, idUsuario }} />
                </div>
                <div className="col-md-6">
                    {links.map((link) => (
                        <div className="card mb-1" key={link.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4> {link.name}</h4>
                                    <h5> {link.email}</h5>
                                    <div>
                                        <span
                                            className="text-danger p-2"
                                            onClick={() => onDeleteLink(link.id)}
                                        >
                                            Desasignar
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

export default usuarioAsignar;

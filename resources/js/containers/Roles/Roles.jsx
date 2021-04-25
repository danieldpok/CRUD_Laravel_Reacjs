import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { toast } from "react-toastify";
import RolesForm from "./RolesForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Roles = () => {
    const [status, setStatus] = useState(false);
    const changue = (e) => {
        setStatus(!status);
    };

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");

    const addTask = async (linkObject) => {
        console.log(linkObject.name);
        const snapshot = await db
            .collection("roles")
            .where("name", "==", linkObject.name)
            .get();
        console.log(snapshot.empty);

        if (snapshot.empty) {
            if (currentId === "") {
                //para diferenciar el mismo boton si actualiza o es nuevo
                await db.collection("roles").doc().set(linkObject);
                console.log("nueva tarea agregada");
                toast("Nueva tarea agregada", { type: "success" });
            } else {
                await db.collection("roles").doc(currentId).update(linkObject);
                toast("Actualizado con exito", { type: "info" });
                setCurrentId("");
            }
        } else {
            toast("Existe el usuario", { type: "error" });
        }
    };

    const onDeleteLink = (id) => {
        if (window.confirm("seguro de elimiar")) {
            db.collection("roles").doc(id).delete();
            toast("Mensaje Eliminado", { type: "error", autoClose: 2000 });
        }
    };

    const onEditLink = () => {
        console.log("editar");
    };

    const getLink = async () => {
        db.collection("roles").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            console.log(docs);
            setLinks(docs);
        });
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
                                    <h4> {link.name}</h4>
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

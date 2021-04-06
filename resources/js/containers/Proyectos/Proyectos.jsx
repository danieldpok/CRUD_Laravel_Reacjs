import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ProyectosForm from "../../components/ProyectosForm";
import proyectosServices from "../../components/services/Proyectos"

const Proyectos = () => {
  const [status, setStatus] = useState(false);
  const changue = (e) => {
    setStatus(!status);
  };

  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addTask = async (linkObject) => {
    if (currentId === "") {
      //para diferenciar el mismo boton si actualiza o es nuevo
      const res = await proyectosServices.createProyectoName(linkObject);
      getLink();
      toast("Nueva tarea agregada", { type: "success" });
    } else {
      const res = await proyectosServices.update(linkObject)
      getLink();
      toast("Actualizado con exito", { type: "info" });
      setCurrentId("");
    }

  };

  const onDeleteLink = async (id) => {
    if (window.confirm("Deseas Eliminar")) {
      const res = await proyectosServices.delete(id);
      getLink();
      toast("Proyecto Eliminado", { type: "error", autoClose: 2000 });
    }
  };

  const getLink = async () => {
    const res = await proyectosServices.list();
    const nuevo = [];
    res.data.forEach((doc) => {
      nuevo.push({
        id: doc.id_proyecto,
        nombre_proyecto: doc.nombre_proyecto,
      });
    });
    setLinks(nuevo);
  };

  useEffect(() => {
    getLink();
  }, []);

  return (
    <div className="Proyectos">
      <Rutas ruta={"Proyectos"} />
      <div className="row">
        <div className="col-md-6 ">
          <ProyectosForm {...{ addTask, currentId, links }} />
        </div>
        <div className="col-md-6">
          {links.map((link) => (
            <div className="card mb-1" key={link.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4> {link.nombre_proyecto}</h4>
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

                <Link
                  to="/proyectos/asignarInformacion/"
                  type="button"
                  className="btn btn-primary p-2"
                >
                  Asignar Informacion de proyecto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;

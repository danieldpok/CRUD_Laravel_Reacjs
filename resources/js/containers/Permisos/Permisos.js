import React, { useState, useEffect } from "react";
import Rutas from "../../components/Rutas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import rolServices from "../../components/services/Roles"

const Permisos = () => {
  const [status, setStatus] = useState(false);
  const changue = (e) => {
    setStatus(!status);
  };

  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLink = async () => {
    const res = await rolServices.list();
    console.log(res);
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
    <div className="Permisos">
      <Rutas ruta={"Permisos"} />

      <div className="row">
        <div className="col-md-12">
          {links.map((link) => (
            <div className="card mb-1" key={link.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4> {link.rol}</h4>
                  <div>
                    <Link
                      to={`/permisos/${link.id}/editar`}
                      type="button"
                      className="btn btn-primary p-2"
                    >
                      Cambiar Permisos
                    </Link>
                  </div>
                </div>
                <FontAwesomeIcon icon="check-circle" className="text-success" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Permisos;

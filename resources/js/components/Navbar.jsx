import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./styles/images/logo_mos.png";
import "./styles/components/Navbar.css";

const Navbar = () => {
    const boton = false;
    return (
        <div
            className={
                boton ? "vertical-nav bg-white active" : "vertical-nav bg-white"
            }
            id="sidebar"
        >
            <div className="py-4 px-3 mb-4 bg-light">
                <div className="media d-flex align-items-center">
                    <img
                        src={logo}
                        alt="..."
                        width="65"
                        className="mr-3 rounded-circle img-thumbnail shadow-sm"
                    />
                    <div className="media-body">
                        <h4 className="m-0">App</h4>
                        <p className="font-weight-light text-muted mb-0">Mos Services</p>
                    </div>
                </div>
            </div>

            <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
                Main
      </p>

            <ul className="nav flex-column bg-white mb-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-dark font-italic bg-light">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="th-large" />
                        </span>
            Home
          </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/asignacionActividades"
                        className="nav-link text-dark font-italic"
                    >
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="address-card" />
                        </span>
            Asignacion de Actividades
          </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/bandejaActividades"
                        className="nav-link text-dark font-italic"
                    >
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="address-card" />
                        </span>
            Bandeja de Actividades
          </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/bandejaTecPro"
                        className="nav-link text-dark font-italic"
                    >
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="address-card" />
                        </span>
            Bandeja de TecPro
          </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/bandejaProveedor"
                        className="nav-link text-dark font-italic"
                    >
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="address-card" />
                        </span>
            Bandeja de Proveedor
          </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/bandejaRevision"
                        className="nav-link text-dark font-italic"
                    >
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="address-card" />
                        </span>
            Bandeja de Revision
          </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/bandejaPosPago"
                        className="nav-link text-dark font-italic"
                    >
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="address-card" />
                        </span>
            Bandeja de PosPagos
          </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/bandejaPago"
                        className="nav-link text-dark font-italic"
                    >
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="address-card" />
                        </span>
            Bandeja de Pagos
          </Link>
                </li>
            </ul>

            <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
                Configuracion
      </p>

            <ul className="nav flex-column bg-white mb-0">
                <li className="nav-item">
                    <Link to="/usuarios" className="nav-link text-dark font-italic">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="user" />
                        </span>
            Usuarios
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/roles" className="nav-link text-dark font-italic">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="user-tag" />
                        </span>
            Roles
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/proyectos" className="nav-link text-dark font-italic">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="file-invoice" />
                        </span>
            Proyectos
          </Link>
                </li>
                <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
                    Catalogos
        </p>
                <li className="nav-item">
                    <Link to="/servicios" className="nav-link text-dark font-italic">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="stroopwafel" />
                        </span>
            Servicios
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/tipoAnexos" className="nav-link text-dark font-italic">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="stroopwafel" />
                        </span>
            Tipo de Anexos
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/preguntas" className="nav-link text-dark font-italic">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="stroopwafel" />
                        </span>
            Preguntas
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/permisos" className="nav-link text-dark font-italic">
                        <span className="mr-3 text-danger">
                            <FontAwesomeIcon icon="stroopwafel" />
                        </span>
            Permisos
          </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

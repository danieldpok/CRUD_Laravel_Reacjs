import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import UsuarioService from "../components/services/Usuarios"

const Header = () => {

    const [error, setError] = useState("")
    const history = useHistory()

    async function handleLogout() {
        const res = await UsuarioService.logout();
        console.log(res);
    }

    return (
        <div className="container-fluid bg-primary text-white ">
            <div className="row">
                <div className="col-1">
                    <button
                        id="sidebarCollapse"
                        type="button"
                        className="btn text-white shadow-sm"
                    >
                        <span className="">
                            <FontAwesomeIcon icon="bars" />
                        </span>
                    </button>
                </div>
                <div className="col-5 align-baseline">Informacion</div>
                <div className="col align-baseline">
                    <span>Notificaciones</span>
                </div>
                <div className="col align-baseline">
                    <strong></strong>
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;

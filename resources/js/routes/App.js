import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Usuarios from "../containers/Usuarios/Usuarios";
import UsuarioNuevo from "../containers/Usuarios/UsuarioNuevo";
import UsuarioEditar from "../containers/Usuarios/UsuarioEditar";
import UsuarioVer from "../containers/Usuarios/UsuarioVer";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/usuarios" component={Usuarios} />
                    <Route exact path="/usuarios/nuevo" component={UsuarioNuevo} />
                    <Route exact path="/usuarios/:id/editar" component={UsuarioEditar} />
                    <Route exact path="/usuarios/:id/ver" component={UsuarioVer} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;

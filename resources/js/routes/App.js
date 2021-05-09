import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Usuarios from "../containers/Usuarios/Usuarios";
import UsuarioNuevo from "../containers/Usuarios/UsuarioNuevo";
import UsuarioEditar from "../containers/Usuarios/UsuarioEditar";
import UsuarioVer from "../containers/Usuarios/UsuarioVer";
import Proyectos from "../containers/Proyectos/Proyectos";
import ProyectoAsigInfo from "../containers/Proyectos/ProyectoAsigInfo";
import Roles from '../containers/Roles/Roles';
import Servicios from '../containers/Servicios/Servicios';
import TipoAnexos from '../containers/TipoAnexos/TipoAnexos';
import Preguntas from '../containers/Preguntas/Preguntas';
import AsignacionActividades from '../containers/AsignacionActividades/AsignacionActividades';
import AsignacionActividadesNuevo from '../containers/AsignacionActividades/AsignacionActividadesNuevo';
import AsignacionActividadesEditar from '../containers/AsignacionActividades/AsignacionActividadesEditar';
import AsignacionActividadesVer from '../containers/AsignacionActividades/AsignacionActividadesVer';

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
                    <Route exact path="/proyectos" component={Proyectos} />
                    <Route exact path="/proyectos/asignarInformacion/:id" component={ProyectoAsigInfo} />
                    <Route exact path="/roles" component={Roles} />
                    <Route exact path="/servicios" component={Servicios} />
                    <Route exact path="/tipoanexos" component={TipoAnexos} />
                    <Route exact path="/preguntas" component={Preguntas} />
                    <Route exact path="/asignacionActividades" component={AsignacionActividades} />
                    <Route
                        exact
                        path="/asignacionActividades/nuevo"
                        component={AsignacionActividadesNuevo}
                    />
                    <Route
                        exact
                        path="/asignacionActividades/:id/editar"
                        component={AsignacionActividadesEditar}
                    />
                    <Route
                        exact
                        path="/asignacionActividades/:id/ver"
                        component={AsignacionActividadesVer}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;

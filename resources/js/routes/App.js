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
import BandejaAct from "../containers/BandejaActividades/BandejaAct";
import BandejaActProgreso from "../containers/BandejaActividades/BandejaActProgreso";
import BandejaActCaptura from "../containers/BandejaActividades/BandejaActCaptura";
import BandejaActPdf from "../containers/BandejaActividades/BandejaActPdf";
import BandejaActFirma from "../containers/BandejaActividades/BandejaActFirma";
import BandejaActEncuesta from "../containers/BandejaActividades/BandejaActEncuesta";
import BandejaPendientePago from "../containers/BandejaActividades/BandejaPendientePago";
import BandejaPendienteFactura from "../containers/BandejaActividades/BandejaPendienteFactura";
import BandejaPagadas from "../containers/BandejaActividades/BandejaPagadas";
import BandejaCanceladas from "../containers/BandejaActividades/BandejaCanceladas";
import BandejaRevision from "../containers/BandejaRevision/BandejaRevision";
import ServicioRevision from "../containers/BandejaRevision/ServicioRevision";
import BandejaRevisionFactura from "../containers/BandejaRevision/BandejaRevisionFactura";
import BandejaPosPago from "../containers/BandejaPosPago/BandejaPosPago";
import BandejaPago from "../containers/BandejaPago/BandejaPago";
import BandejaPagoRealizado from "../containers/BandejaPago/BandejaPagoRealizado";
import BandejaPagoCancelado from "../containers/BandejaPago/BandejaPagoCancelado";


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
                    <Route exact path="/bandejaActividades" component={BandejaAct} />
                    <Route exact path="/bandejaActividades/pendientePago" component={BandejaPendientePago} />
                    <Route exact path="/bandejaActividades/pendienteFactura" component={BandejaPendienteFactura} />
                    <Route exact path="/bandejaActividades/pagadas" component={BandejaPagadas} />
                    <Route exact path="/bandejaActividades/canceladas" component={BandejaCanceladas} />
                    <Route
                        exact
                        path="/bandejaActividades/:id/progreso"
                        component={BandejaActProgreso}
                    />
                    <Route
                        exact
                        path="/bandejaActividades/:id/captura/:idproyecto"
                        component={BandejaActCaptura}
                    />
                    <Route
                        exact
                        path="/bandejaActividades/:idAsignacion/encuesta/:id"
                        component={BandejaActEncuesta}
                    />
                    <Route
                        exact
                        path="/bandejaActividades/:idAsignacion/firma/:id"
                        component={BandejaActFirma}
                    />
                    <Route
                        exact
                        path="/bandejaActividades/:idAsignacion/pdf/:id"
                        component={BandejaActPdf}
                    />
                    <Route
                        exact
                        path="/bandejaRevision"
                        component={BandejaRevision}
                    />
                    <Route
                        exact
                        path="/bandejaRevisionFactura"
                        component={BandejaRevisionFactura}
                    />
                    <Route
                        exact
                        path="/bandejaRevision/:id/revision"
                        component={ServicioRevision}
                    />
                    <Route
                        exact
                        path="/bandejaPosPago"
                        component={BandejaPosPago}
                    />
                    <Route
                        exact
                        path="/bandejaPago"
                        component={BandejaPago}
                    />
                    <Route
                        exact
                        path="/bandejaPagoRealizado"
                        component={BandejaPagoRealizado}
                    />
                    <Route
                        exact
                        path="/bandejaPagoCancelado"
                        component={BandejaPagoCancelado}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;

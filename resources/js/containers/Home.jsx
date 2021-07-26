import React from "react";

const Home = () => {
    return (
        <div className="Home">
            <div className="jumbotron">
                <h1 className="display-3">Hola!</h1>
                <p className="lead">
                    Aplicacion para el control de pagos y proceso administrativo
                </p>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-6">
                        <div className="list-group">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action flex-column align-items-start active"
                            >
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Envio de informacion para factura</h5>
                                    <small>hace 3 dias</small>
                                </div>
                                <p className="mb-1">Envio pendiente de facturas</p>
                                <small>mas informacion.</small>
                            </a>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action flex-column align-items-start"
                            >
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Proyectos finalizados</h5>
                                    <small className="text-muted">hace 3 dias</small>
                                </div>
                                <p className="mb-1">Listado de proyectos finalizados</p>
                                <small className="text-muted">mas informacion </small>
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Informes</div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    proyecto: Nacional Monte de piedad
                                </h4>
                                <p className="card-text">Revisar avances de proyecto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

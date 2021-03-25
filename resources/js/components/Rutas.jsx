import React from "react";

const Rutas = ({ ruta }) => {
    return (
        <div className="Rutas">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">{ruta}</li>
            </ol>
        </div>
    );
};

export default Rutas;

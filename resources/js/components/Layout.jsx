import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer, toast, Zoom } from "react-toastify";

const Layout = ({ children }) => {
    const boton = false;

    return (
        <React.Fragment>
            <Navbar />
            <div
                className={
                    boton
                        ? "container-fluid page-content active"
                        : "container-fluid page-content "
                }
                id="content"
            >
                <Header />
                <ToastContainer draggable={true} transition={Zoom} autoClose={8000} />
                {children}
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Layout;

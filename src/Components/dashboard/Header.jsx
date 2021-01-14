import React, { useState } from "react";

//Components.
import "../../css/Sidebar.css";

export default function DashboardHeader(props) {

    const [onLine, setOnLine] = useState("text-success");

    window.ononline = () => {
        setOnLine("text-success");
    };
    window.onoffline = () => {
        setOnLine("text-danger");
    };

    const handleMenu = () => {

        const menu = document.querySelector(".sidebarcontent");

        menu.classList.toggle("hide");

        menu.onmouseup = () => {
            menu.classList.toggle("hide");
        }

    };


    return (
        <React.Fragment>
            <nav className="navbar w-100 ml-auto justify-content-end bg-primary pl-2 pr-4">
                <button className="btn button_menu d-flex justify-content-center p-1 ml-3 my-auto" onClick={handleMenu}>
                    menu{" "}
                    <i className="fas fa-ellipsis-v align-self-center m-0 ml-2"></i>
                </button>
                <h4 className="mb-0 ml-auto mr-5 align-self-center">
                    Bienvenido {props.admin.name}!
                </h4>
                <h6 className="h4 clock_header font_clock mb-0 mx-2 align-self-center">
                    {props.time}
                </h6>
                <i
                    className={`fas fa-power-off fa-2x ml-3 ${onLine}`}
                    data-toogle="tooltips"
                    title={
                        onLine === "text-success"
                            ? "Conectado a Internet"
                            : "Sin Internet"
                    }
                ></i>
            </nav>
        </React.Fragment>
    );
}

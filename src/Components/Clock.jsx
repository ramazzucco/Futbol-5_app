import React from "react";
import { showClockOff, commands } from "../javascript/clock";
import "../css/Clock.css";

export default function Clock(props) {

    commands();

    showClockOff();

    return (
        <div className={`cube-wrapper clock${props.cancha} rounded mb-3`}>
            <div className="cube rounded">
                <div className="cube-back rounded text-center bg-success">
                    <p
                        className="text-center text-uppercase bg-dark font-weight-bold p-2 m-0 rounded-top"
                        datatoggle="tooltip"
                        dataplacement="top"
                        title="Click para ver los comandos"
                    >
                        cancha N° {props.cancha}
                    </p>
                    <span className={`h1 p-2 hora timer`}></span>
                    <span className={`h1 p-2 minutos timer`}></span>
                    <span className={`h1 p-2 segundos timer`}></span>
                    <div className="commands row justify-content-around pt-3 d-none">
                        <i className={`fas fa-stop text-muted`} id={props.cancha} ></i>
                        <i className={`fas fa-pause text-muted`} id={props.cancha} ></i>
                        <i className="fas fa-plus-square text-info" id={props.cancha} ></i>
                        <i className="fas fa-arrow-left text-primary" id={props.cancha} ></i>
                    </div>
                </div>
                <div
                    className={`cube-front ${props.switchMode === "ligth" ? "bg-primary" : "bg-dark"}
                        rounded`
                    }
                >
                    <i className="fas fa-stopwatch fa-6x"></i>
                </div>
            </div>
        </div>
    );
}

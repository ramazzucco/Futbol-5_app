import React from "react";
import "../css/Clock.css";

export default function Clock(props) {
    return (
        <div className={`cube-wrapper clock${props.cancha} rounded mb-3`}>
            <div className="cube rounded">
                <div className="cube-back rounded text-center bg-success">
                    <p className="text-center text-uppercase bg-dark text-white font-weight-bold p-2 m-0 rounded-top">
                        cancha N° {props.cancha}
                    </p>
                    <span className={`h1 p-2 hora timer`}></span>
                    <span className={`h1 p-2 minutos timer`}></span>
                    <span className={`h1 p-2 segundos timer`}></span>
                </div>
                <div className="cube-front bg-primary rounded">
                    <i className="fas fa-stopwatch fa-6x"></i>
                    </div>
            </div>
        </div>
    );
}

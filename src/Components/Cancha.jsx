import React from "react";
import { deleteReserve } from "../javascript/servicesApi";
import { handleShowInfoReserve } from "../javascript/cancha";
import "../css/Cancha.css";

//Components.
import Horarios from "./Horarios";

export default function Cancha(props) {

    handleShowInfoReserve(props.reserves, deleteReserve, props.admin, props.setReservesOfTheDay)

    const background = props.switchMode === "ligth" ? "bg-primary" : "bg-dark";
    const textcolor = props.switchMode === "ligth" ? "text-dark" : "text-light";

    return (
        <div className="col-12 col-md-5 col-lg-2 px-0 cancha flex-column mx-1 mb-5">
            <div className={`title ${background}`}>
                <h5 className={textcolor}>
                    Cancha N° {props.horarios.number}
                </h5>
            </div>
            <div className="horarios">
                {
                    props.horarios.options.map( (option,i) => {
                        return (
                            <Horarios option={option} key={i} />
                        )
                    })
                }
            </div>
        </div>
    );
}

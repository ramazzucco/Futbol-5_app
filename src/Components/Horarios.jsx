import React from "react";

export default function Horarios(props) {
    return (
        <div
            className={`${props.option.reservado ? "bg-danger" : "bg-success"} id${props.option.reserve_id}`}
            data-id={props.option.reserve_id}
        >
            <p className="text-center m-0">
                {props.option.horario}{"Hs"}
                <span className="pl-3 text-uppercase">
                    {props.option.reservado ? "Reservado" : "Libre"}
                </span>
            </p>
        </div>
    );
}

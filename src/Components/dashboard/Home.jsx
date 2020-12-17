import React from "react";
import "../../css/dashboard.css";
import Loading from "../Loading";

//Components.
import TimeReserve from "./TimeReserve";

export default function Cancha(props) {

    return (
            <div className="container-fluid">

                <Loading loading={props.loading} />
                <div className="d-flex flex-wrap p-3 py-5 justify-content-around">
                    {props.reserves.map((cancha, i) => {
                        return (
                            <TimeReserve
                                key={i}
                                horarios={cancha}
                                reserves={props.reservesOfTheDay}
                                cancha={i + 1}
                                cancelarReserva={props.cancelarReserva}
                                showInfoReserve={props.showInfoReserve}
                            />
                        );
                    })}
                </div>
            </div>
    );
}

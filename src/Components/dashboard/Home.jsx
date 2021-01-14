import React from "react";
import "../../css/dashboard.css";

//Components.
import Loading from "../Loading";
import Cancha from "../Cancha";

export default function Home(props) {
    return (
        <div className="container-fluid cancha_container d-flex justify-content-around flex-wrap">
            <Loading loading={props.loading} />
            <div className="canchayhorario-container justify-content-around row w-100 my-5">
                {props.reserves.map((cancha, i) => {
                    return (
                        <Cancha
                            key={i}
                            cancha={i + 1}
                            horarios={cancha}
                            admin={props.admin}
                            reserves={props.reservesOfTheDay}
                            cancelarReserva={props.cancelarReserva}
                            showInfoReserve={props.showInfoReserve}
                            setReservesOfTheDay={props.setReservesOfTheDay}
                        />
                    );
                })}
            </div>
        </div>
    );
}

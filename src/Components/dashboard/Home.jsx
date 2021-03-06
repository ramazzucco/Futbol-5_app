import React from "react";
import "../../css/dashboard.css";

//Components.
import Loading from "../Loading";
import Cancha from "../Cancha";

export default function Home(props) {
    return (
        <div className="container-fluid cancha_container d-flex justify-content-around flex-wrap p-0">
            <Loading loading={props.loading} switchMode={props.switchMode} />
            {/* <div className={`canchayhorario-container ${props.switchMode === "ligth" ? "light" : "secondary" }
                justify-content-around row w-100 my-5`}
            > */}
                {props.reserves.map((cancha, i) => {
                    return (
                        <Cancha
                            key={i}
                            cancha={i + 1}
                            horarios={cancha}
                            admin={props.admin}
                            switchMode={props.switchMode}
                            reserves={props.reservesOfTheDay}
                            cancelarReserva={props.cancelarReserva}
                            showInfoReserve={props.showInfoReserve}
                            setReservesOfTheDay={props.setReservesOfTheDay}
                        />
                    );
                })}
            {/* </div> */}
        </div>
    );
}

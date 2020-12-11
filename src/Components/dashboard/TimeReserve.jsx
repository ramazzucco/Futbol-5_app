import React from "react";
import "../../css/dashboard.css";

export default function TimeReserve(props) {
    const idCancha = props.cancha;

    return (
        <div
            className="col-12 col-md-6 col-lg-3 dashboard pt-3 p-2 mb-3 shadow-lg"
        >
            <h6 className="text-center text-uppercase bg-dark text-light font-weight-bold p-2">
                cancha n°: {idCancha}
            </h6>
            {
                props.horarios.map( (horario,i) => {
                    return (
                        <div
                            className={
                                `text-monospace text-center time_option`
                            }
                            key={i}
                        >
                            <p  className={
                                    `reserve id${horario.reserve_id} horario${i + 1}
                                    mb-0 mt-3 text-uppercase opciones_horarios
                                    ${horario.reservado === true ? "bg-danger" : "bg-success"}`
                                }
                                onClick={props.showInfoReserve}
                                idreserve={horario.reserve_id}
                                datatoogle="tooltip"
                                title="Click para ver detalles."
                            >
                                {
                                    horario.reservado === true
                                        ? `${horario.hora}: Reservado`
                                        : `${horario.hora}: Libre`
                                }
                            </p>
                            {
                                props.reserves.map( (reserve, i) => {
                                    if(reserve.cancha === idCancha && reserve.horario.slice(0,5) === horario.hora.slice(0,5)){
                                        return (
                                            <div className={`col-12 p-3 d-none reserve_info id${reserve.id} mb-2`} key={i}>
                                                <ul className="text-left text-wrap list-unstyled">
                                                    <li>{reserve.nombre + " " + reserve.apellido}</li>
                                                    <li>{"Tel: " + reserve.telefono}</li>
                                                    <li>{reserve.email}</li>
                                                    <li>{reserve.createdAt.slice(0,19).replace("T"," ")}</li>
                                                </ul>
                                                <h6 className="text-right text-white"
                                                    datatoogle="tooltip"
                                                    title="Click para eliminar la reserva del historial."
                                                    onClick={props.cancelarReserva}
                                                    datacancel={JSON.stringify({
                                                        cancha: reserve.cancha,
                                                        horario: reserve.horario,
                                                        reservado: "cancel",
                                                        reserveId: reserve.id
                                                    })}
                                                >
                                                    Cancelar
                                                </h6>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

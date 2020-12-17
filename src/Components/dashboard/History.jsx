import React, { useState, useEffect } from "react";
import mainFunctions from "../../mainFunctions";
import functions from "../../functions";
import Loading from "../Loading";

export default function History() {
    const [history, setHisory] = useState([]);
    const [loading, setLoading] = useState({reservesOfTheDay: true});
    const urlApi = functions.urlApiBase;

    const getHistory = () => {
        fetch(`${urlApi}/api/reserves`)
            .then((res) => res.json())
            .then((response) => {
                setHisory(response.data);
                response.data ? setLoading({reservesOfTheDay: false}) : setLoading({reservesOfTheDay: true})
            });
    };

    const eliminar = (e) => {
        const eliminarReserva =  window.confirm(`Esta seguro que desea eliminar la reserva N° ${e.target.attributes[1].nodeValue}`)
        if(eliminarReserva === true){
            const id = e.target.attributes[1].nodeValue;
            console.log("ID a eliminar: ",id);
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "text/plain",
                }
            }
            fetch(`${urlApi}/api/reserves/delete/${id}`, options)
                .then(res => res.json())
                .then(response => {
                    setHisory(response.data);
                    console.log(response)
                })
        } else {}
    }

    useEffect(() => {
        getHistory();
    },[]);

    return (
        <React.Fragment>
            <div className="container-fluid table-responsive p-3">
                <table className="table table-hover border shadow-lg">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">telefono</th>
                            <th scope="col">Cancha</th>
                            <th scope="col">Horario</th>
                            <th scope="col">Hora Y Fecha</th>
                            <th scope="col">
                                <button
                                    className="btn btn-sm btn-outline-dark-green m-0"
                                    onClick={mainFunctions.sednHistoryReserve}
                                >
                                    Send email <i className="fas fa-envelope ml-2"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((reserve) => {
                            const reserveDate = reserve.createdAt.replace("T", " - ").slice(0,21)
                            return (
                                <tr key={reserve.id}>
                                    <td>{reserve.id}</td>
                                    <td>{reserve.nombre}</td>
                                    <td>{reserve.apellido}</td>
                                    <td>{reserve.email}</td>
                                    <td>{reserve.telefono}</td>
                                    <td>{reserve.cancha}</td>
                                    <td>{reserve.horario}</td>
                                    <td>{reserveDate}</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger"
                                            onClick={eliminar}
                                            data-id={`${Number(reserve.id)}`}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Loading loading={loading} />
        </React.Fragment>
    );
}

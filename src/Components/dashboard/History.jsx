import React, { useState, useEffect } from "react";
import mainFunctions from "../../mainFunctions";
import functions from "../../functions";

export default function History() {
    const [history, setHisory] = useState([]);

    const getHistory = () => {
        fetch(`${functions.urlBase}/reserves`)
            .then((res) => res.json())
            .then((response) => {
                setHisory(response.data);
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
            fetch(`${functions.urlBase}/reserves/delete/${id}`, options)
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
        <div className="container-fluid p-3">
            <table className="table table-striped border">
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
                        <th scope="col"></th>
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
    );
}

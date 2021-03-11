import React, { useState, useEffect } from "react";
import { getHistory, sendHistoryReserve, deleteReserve } from "../../javascript/servicesApi";
import { rowClick, cancelSelectRows, selectAll } from "../../javascript/history";

//Components.
import Loading from "../Loading";

export default function History(props) {
    const [history, setHisory] = useState([]);
    const [loading, setLoading] = useState({reservesOfTheDay: true});
    const [selectRows, setSelectRows] = useState(false);
    const [selectAllRows, setSelectAllRows] = useState(false);
    const [ids, setIds] = useState([]);

    useEffect(() => {
        getHistory(props.admin, setHisory, setLoading);
    },[]);

    const handlerSendMail = () => {
        sendHistoryReserve(props.admin)
    }

    const handlerSelectRows = () => {
        setSelectRows(!selectRows);
    }

    rowClick(setIds, ids, selectRows);

    const deleteOne = (e) => {
        const id = Number(e.target.attributes.id.value);
        const reserve = history.find( reserve => reserve.id === id )

        deleteReserve(reserve, props.admin, setHisory, "reserves");
    }

    const deleteSelected = () => {
        deleteReserve(ids, props.admin, setHisory, "reserves");
    }

    const handleCancelSelectRows = () => {
        cancelSelectRows(setIds, setSelectRows, selectRows);
    }

    const handleSelecAll = () => {
        selectAll(setIds);
        setSelectAllRows(!selectAllRows);
    }

    const background = props.switchMode === "ligth" ? "bg-primary" : "bg-dark";
    const textcolor = props.switchMode === "ligth" ? "text-dark" : "text-light";

    return (
        <React.Fragment>
            <div className="container-fluid table-responsive mx-auto py-3 px-4">
                <header className={`card-header ${background} my-3`}>
                    <button
                        className={`btn btn-sm ${selectRows ? "btn-secondary" : "btn-outline-light"} mr-2 mb-2`}
                        onClick={handlerSelectRows}
                    >
                        Seleccionar Columna
                    </button>
                    <button
                        className={`btn btn-sm ${selectRows ? "" : "d-none"}
                            ${selectAllRows ? "btn-secondary" : "btn-outline-light"} mr-2 mb-2`
                        }
                        onClick={handleSelecAll}
                    >
                        Seleccionar Todos
                    </button>
                    <button
                        className="btn btn-sm btn-outline-light mb-2"
                        onClick={handlerSendMail}
                    >
                        Send email <i className="fas fa-envelope ml-2"></i>
                    </button>
                </header>
                <table className={`table table-hover border shadow-lg
                    ${window.screen.width < 768 ? "table-sm" : ""}`}
                >
                    <thead className={`${background} text-white text-truncate`}>
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
                    <tbody className={`${textcolor} overflow-auto`}>
                        {history.map((reserve) => {
                            return (
                                <tr className="rows" key={reserve.id}>
                                    <td>{reserve.id}</td>
                                    <td>{reserve.name}</td>
                                    <td>{reserve.lastname}</td>
                                    <td>{reserve.email}</td>
                                    <td>{reserve.telefono}</td>
                                    <td className="text-center">{reserve.cancha}</td>
                                    <td>{reserve.horario}</td>
                                    <td>{reserve.date}</td>
                                    <td>
                                        <a href="#modal" className="text-decoration-none">
                                            <button
                                                id={`${Number(reserve.id)}`}
                                                className={`btn btn-sm btn-outline-danger border-0 mr-3 ${selectRows ? "d-none" : ""}`}
                                                onClick={deleteOne}
                                            >
                                                <i className="fas fa-trash" id={`${Number(reserve.id)}`}></i>
                                            </button>
                                        </a>
                                        <button
                                            className={`btn btn-sm ${selectRows ? "" : "d-none"} p-0 check mr-3`}
                                        >
                                            <i className={`far fa-1x fa-square`}></i>
                                            <i className={`fas fa-1x fa-check-square d-none`}></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        <tr className={`${selectRows ? "" : "d-none"}`}>
                            <td colSpan="7"></td>
                            <td colSpan="2">
                                <a href="#modal"
                                    className="text-decoration-none d-flex justify-content-end"
                                >
                                    <button
                                        className="btn btn-sm btn-block btn-primary mr-2"
                                        onClick={handleCancelSelectRows}
                                    >
                                        Cencelar
                                    </button>
                                    <button
                                        className="btn btn-sm btn-block btn-danger mt-0 ml-2"
                                        onClick={deleteSelected}
                                    >
                                        Confirmar
                                    </button>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Loading loading={loading} switchMode={props.switchMode}/>
        </React.Fragment>
    );
}

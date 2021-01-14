import React, { useState, useEffect } from "react";
import { sendHistoryReserve, deleteReserve } from "../../mainFunctions";
import functions from "../../functions";
import Loading from "../Loading";

export default function History(props) {
    const [history, setHisory] = useState([]);
    const [loading, setLoading] = useState({reservesOfTheDay: true});
    const [selectRows, setSelectRows] = useState(false);
    const [ids, setIds] = useState([]);
    const urlApi = functions.urlApiBase;

    useEffect(() => {

        getHistory(props.admin);

    },[]);

    const getHistory = () => {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props.admin),
        };

        fetch(`${urlApi}/api/reserves`, options)
            .then((res) => res.json())
            .then((response) => {
                setHisory(response.data);
                response.data ? setLoading({reservesOfTheDay: false}) : setLoading({reservesOfTheDay: true})
            })
            .catch(error => console.log(error));
    };

    const handlerSendMail = () => {
        sendHistoryReserve(props.admin)
    }

    const handlerSelectRows = () => {
        setSelectRows(!selectRows);

    }

    const rows = document.querySelectorAll(".rows");

    rows.forEach( row => {


        row.onclick = () => {
            if(selectRows){

                const id = row.firstChild.innerHTML;
                const icons = row.querySelectorAll(".check i");

                row.classList.toggle("bg-secondary");
                row.classList.toggle("delete");

                icons.forEach( icon => {
                    icon.classList.toggle("d-none");
                })

                if(row.className.includes("delete")){
                    setIds([...ids,id]);
                } else {
                    const newArreyIds = ids.filter( x => x !== id );
                    setIds(newArreyIds);
                }

            }
        }
    })

    const deleteOne = (e) => {

        const id = Number(e.target.attributes[1].value);
        const reserve = history.find( reserve => reserve.id === id )

        deleteReserve(reserve, props.admin, setHisory, "reserves");
    }

    const deleteSelected = () => {
        deleteReserve(ids, props.admin, setHisory, "reserves");
    }

    const cancelSelectRows = () => {

        rows.forEach( row => {

            if(row.className.includes("delete")){

                row.classList.toggle("bg-secondary");
                row.classList.toggle("delete");

                const icons = row.querySelectorAll(".check i");

                icons.forEach( icon => {
                    icon.classList.toggle("d-none")
                })

            }

        })

        setIds([]);
        setSelectRows(!selectRows);
    }

    const selectAll = () => {

        const rows = document.querySelectorAll(".rows");

        const arreyIds = [];

        rows.forEach( row => {

            const id = row.firstChild.innerHTML;

            arreyIds.push(id);

            const icons = row.querySelectorAll(".check i");

            row.classList.toggle("bg-secondary");
            row.classList.toggle("delete");

            icons.forEach( icon => {
                icon.classList.toggle("d-none");
            })

        })

        setIds(arreyIds);
    }

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
                                    className={`btn btn-sm ${selectRows ? "btn-primary" : "btn-outline-primary"} mr-2`}
                                    onClick={handlerSelectRows}
                                >
                                    Select
                                </button>
                                <button
                                    className={`btn btn-sm ${selectRows ? "" : "d-none"} btn-outline-primary mr-2`}
                                    onClick={selectAll}
                                >
                                    Select All
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-primary ml-2"
                                    onClick={handlerSendMail}
                                >
                                    Send email <i className="fas fa-envelope ml-2"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((reserve) => {
                            return (
                                <tr className="rows" key={reserve.id}>
                                    <td>{reserve.id}</td>
                                    <td>{reserve.name}</td>
                                    <td>{reserve.lastname}</td>
                                    <td>{reserve.email}</td>
                                    <td>{reserve.telefono}</td>
                                    <td>{reserve.cancha}</td>
                                    <td>{reserve.horario}</td>
                                    <td>{reserve.date}</td>
                                    <td>
                                        <a href="#modal" className="text-decoration-none">
                                            <button
                                                className={`btn btn-sm btn-danger px-5 ${selectRows ? "d-none" : ""}`}
                                                onClick={deleteOne}
                                                data-id={`${Number(reserve.id)}`}
                                            >
                                                Delete
                                            </button>
                                        </a>
                                        <button
                                            className={`btn btn-sm ${selectRows ? "" : "d-none"} check ml-5`}
                                        >
                                            <i className={`far fa-2x fa-square`}></i>
                                            <i className={`fas fa-2x fa-check-square d-none`}></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        <tr className={`${selectRows ? "" : "d-none"}`}>
                            <td colSpan="7"></td>
                            <td colSpan="2">
                                <a href="#modal" className="text-decoration-none d-flex justify-content-end">
                                    <button
                                        className="btn btn-sm btn-block btn-primary mr-2"
                                        onClick={cancelSelectRows}
                                    >
                                        Cencel
                                    </button>
                                    <button
                                        className="btn btn-sm btn-block btn-danger ml-2"
                                        onClick={deleteSelected}
                                    >
                                        Delete
                                    </button>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Loading loading={loading} />
        </React.Fragment>
    );
}

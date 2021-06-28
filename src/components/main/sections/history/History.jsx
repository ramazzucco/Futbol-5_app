import React, { useCallback, useEffect, useState } from "react";
import { gEbID, hideMenu, modal, qS, reservesListBy, urlapi } from "../../../../functions";
import Loadingdata from "../../../Loading/Loadingdata";
import "./history.css";

// Components.
import Row from './Row';
import Loadinginfo from "../../../Loading/Loadinginfo";

export default function History(props) {
    const [history, setHistory] = useState([]);
    const [orderlistreserves, setOrderlistreserves] = useState("id");
    const [orderbydirection, setOrderbydirection] = useState("up");
    const [reservetodelete, setReservetodelete] = useState([]);

    useEffect(() => {
        if (!history.length) setHistory(props.history);
    }, [props.history, history]);

    const reservesproperties = [
        {
            value: "id",
            title: "Id",
        },
        {
            value: "name",
            title: "Nombre",
        },
        {
            value: "lastname",
            title: "Apellido",
        },
        {
            value: "field",
            title: "Cancha",
        },
        {
            value: "shedule",
            title: "Horario",
        },
        {
            value: "email",
            title: "Email",
        },
        {
            value: "phone",
            title: "Telefono",
        },
        {
            value: "date",
            title: "Fecha",
        },
        {
            value: "status",
            title: "Estado",
        }
    ];

    const orderBy = reservesListBy;

    const orderListBy = useCallback(() => {
        if (orderlistreserves === "id") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).id(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).id(a, b)).reverse());
        }
        if (orderlistreserves === "field") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).field(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).field(a, b)).reverse());
        }
        if (orderlistreserves === "shedule") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).shedule(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).shedule(a, b)).reverse());
        }
        if (orderlistreserves === "name") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).name(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).name(a, b)).reverse());
        }
        if (orderlistreserves === "lastname") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).lastname(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).lastname(a, b)).reverse());
        }
        if (orderlistreserves === "email") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).email(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).email(a, b)).reverse());
        }
        if (orderlistreserves === "phone") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).phone(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).phone(a, b)).reverse());
        }
        if (orderlistreserves === "date") {
            orderbydirection === "up"
                ? setHistory(props.history.sort((a, b) => orderBy(a, b).date(a, b)))
                : setHistory(props.history.sort((a, b) => orderBy(a, b).date(a, b)).reverse());
        }
    }, [props.history, orderlistreserves, orderbydirection, orderBy]);

    useEffect(() => {
        setHistory(props.history);
        orderListBy();
    }, [props.history, orderListBy]);

    const selectRow = (e) => {
        const id = e.target.parentElement.attributes.id.value.slice(1);

        if (e.target.parentElement.style.background === "") {
            e.target.parentElement.style.background = "rgba(0,0,0,0.3)";
            setReservetodelete([...reservetodelete, id]);
        } else {
            e.target.parentElement.style.background = "";
            setReservetodelete(reservetodelete.filter((reservetodelete) => reservetodelete !== id));
        }
    };

    const handlerModalsOnDelete = (loadinginfotext) => {
        qS(".modal-info section button").click();
        qS('#loading-info .title p').innerHTML = '';
        qS('#loading-info .title p').innerHTML = loadinginfotext;
        gEbID('loading-info').classList.toggle('d-none');
    };

    const deleteOneReserve = async (e) => {
        const url = `${urlapi}/reserves/delete`;
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...props.admin,
                ids: [e.target.attributes.dataId.value],
            }),
        };

        handlerModalsOnDelete("Eliminando reserva ...");

        const request = await fetch(url, options);
        const response = await request.json();

        if (response && !response.error) {
            setHistory(response.history);
            gEbID("loading-info").classList.toggle("d-none");
            modal("successful", "Enhorabuena !", response.message);
        }else{
            gEbID("loading-info").classList.toggle("d-none");
            modal("failed", "Lo sentimos !", response.message);
        }
    };

    const deleteMultipleProducts = async (e) => {
        e.preventDefault();

        const url = `${urlapi}/reserves/delete`;
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...props.admin,
                ids: reservetodelete,
            }),
        };

        handlerModalsOnDelete("Eliminando reservas ...");

        const request = await fetch(url, options);
        const response = await request.json();

        if (response && !response.error) {
            setHistory(response.history);
            gEbID("loading-info").classList.toggle("d-none");
            modal("successful", "Enhorabuena !", response.message);
        }else{
            gEbID("loading-info").classList.toggle("d-none");
            modal("failed", "Lo sentimos !", response.message);
        }

    };

    const showModalOnDeleteOne = (e) => {

        const reserve = JSON.parse(e.target.attributes.datareserve.value);
        const div = qS(".modal-info div");

        div.classList.value = "d-flex flex-column p-5 shadow bg-fourth";
        div.setAttribute("style", "border-top: 5px solid #DC3545");

        qS(".modal-info header").classList.value = "text-center mt-2";
        qS(".modal-info header i").classList.value = "fas fa-exclamation-triangle text-danger fa-3x";
        qS(".modal-info header p").classList.value = "text-center text-danger font-weight-bold h4 mt-4";
        qS(".modal-info header p").innerHTML = "Eliminar";

        qS(".modal-info section").classList.value = "my-4";
        qS(".modal-info section p").classList.value = "text-danger text-center font-weight-bold mt-3";
        qS(".modal-info section p").innerHTML = `Reserva N° ${reserve.id} de "${reserve.name} ${reserve.lastname}" ?`;
        qS(".modal-info section div").classList.value = "d-flex justify-content-center mt-5";

        qS(".modal-info section button.cancel").classList.value = "border-0 bg-transparent text-third";
        qS(".modal-info section button.other-action").innerHTML = "Eliminar";
        qS(".modal-info section button.other-action").classList.value = "other-action btn btn-danger ml-4 text-fourth";
        qS(".modal-info section button.other-action").setAttribute("dataId",`${reserve.id}`);
        qS(".modal-info section button.other-action").onclick = deleteOneReserve;

        qS(".container-modalinfo").classList.toggle("d-none");
    };

    const showModalOnDeleteMultiple = () => {
        let liElement = "";

        reservetodelete.map((id) => {
            const reservename = qS(`.items-list #r${id} .name`);
            const reservelastname = qS(`.items-list #r${id} .lastname`);
            liElement = liElement + `<li>${id} - ${reservename.innerText} ${reservelastname.innerText}</li>`;
            return "";
        });

        const ulliElement = `<p>Eliminar las siguientes reservas ?</p><br/><ul>${liElement}</ul>`;

        const div = qS(".modal-info div");

        div.classList.value = "d-flex flex-column p-5 shadow bg-fourth";
        div.setAttribute("style", "border-top: 5px solid #DC3545");

        qS(".modal-info header").classList.value = "text-center mt-2";
        qS(".modal-info header i").classList.value = "fas fa-exclamation-triangle text-danger fa-3x";
        qS(".modal-info header p").classList.value = "";
        qS(".modal-info header p").innerHTML = "";

        qS(".modal-info section").classList.value = "my-4";
        qS(".modal-info section p").classList.value = "text-danger text-center font-weight-bold mt-3";
        qS(".modal-info section p").innerHTML = ulliElement;
        qS(".modal-info section div").classList.value = "d-flex justify-content-center mt-5";

        qS(".modal-info section button").classList.value = "border-0 bg-transparent text-third";
        qS(".modal-info section button.other-action").innerHTML = "Eliminar";
        qS(".modal-info section button.other-action").classList.value = "other-action btn btn-danger ml-4 text-fourth";
        qS(".modal-info section button.other-action").onclick = deleteMultipleProducts;

        qS(".container-modalinfo").classList.toggle("d-none");
    };

    window.onkeydown = (e) => {
        if (e.key === "Escape") {
            const rows = document.querySelectorAll(".history .table tbody tr");

            let rowselected = 0;

            rows.forEach((row) => {
                if (row.style.background === "rgba(0, 0, 0, 0.3) none repeat scroll 0% 0%"){
                    row.rowIndex % 2 === 0
                        ? row.setAttribute(
                              "style",
                              "background: rgba(0, 0, 0, 0) repeat scroll 0% 0%"
                          )
                        : row.setAttribute(
                              "style",
                              "background: rgba(0, 0, 0, 0.05) repeat scroll 0% 0%"
                          );
                    rowselected++;
                }
            });

            if (rowselected > 0) setReservetodelete([]);
        }
    };

    return (
        <div className="history section bg-first p-4" onClick={hideMenu}>
            <Loadinginfo />

            <div className="title text-left text-third mb-5">
                <h5>
                    Booking history
                </h5>
                <hr className='bg-third w-100 mx-auto mt-2' />
            </div>
            <div className="col-12 d-flex align-items-center my-3">
                <label
                    htmlFor="order-list-reserve"
                    className="text-third mb-0 mr-4 d-none d-sm-flex"
                >
                    Ordenar por
                </label>
                <select
                    name="order-list-reserve"
                    id="order-list-reserve"
                    className="text-center text-third bg-first py-1 px-3"
                    onChange={(e) => {
                        setOrderlistreserves(e.target.value);
                        setHistory([]);
                    }}
                >
                    {reservesproperties.map((property, i) => {
                        return (
                            <option key={i} value={property.value}>
                                {property.title}
                            </option>
                        );
                    })}
                </select>
                <button
                    className="mx-2 border-0 bg-transparent text-third rounded"
                    style={{fontSize: "1.5rem"}}
                    onClick={() => {
                        setOrderbydirection("up");
                        setHistory([]);
                    }}
                >
                    <i className={`${ orderbydirection === "up" ? "fas" : "far"} fa-arrow-alt-circle-up`}></i>
                </button>
                <button
                    className="mx-2 border-0 bg-transparent text-third rounded"
                    style={{fontSize: "1.5rem"}}
                    onClick={() => {
                        setOrderbydirection("down");
                        setHistory([]);
                    }}
                >
                    <i className={`${orderbydirection === "down" ? "fas" : "far"} fa-arrow-alt-circle-down`}></i>
                </button>
                <button
                    className={`delete-select-rows ml-auto btn-rm btn-third
                        ${reservetodelete.length ? "" : "d-none"}`}
                    onClick={showModalOnDeleteMultiple}
                >
                    Eliminar filas seleccionadas
                </button>
            </div>
            <table className="items-list table table-hover table-striped rounded shadow">
                <thead>
                    <tr className="text-third">
                        {reservesproperties.map((property, i) => {
                            return (
                                <th scope="col" key={i}>
                                    {property.title}
                                </th>
                            );
                        })}
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((reserve, i) => {
                        return (
                            <Row
                                key={i}
                                reserve={reserve}
                                selectRow={selectRow}
                                showModal={showModalOnDeleteOne}
                            />
                        );
                    })}
                </tbody>
            </table>
            {!history.length ? (
                <div className="d-flex text-third py-4">
                    <Loadingdata />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { qS, urlapi } from "../../../../functions";

export default function Field(props) {
    const [field, setField] = useState();
    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        if (!field) {
            setField(props.field);
            setReserves(props.field.options);
        }
    }, [props.field, field]);

    const showModalOnCancelReserve = (id) => {
        if (id) {
            const reserve = props.history.filter((reserve) => reserve.id === id)[0];
            const div = qS(".modal-info div");

            div.classList.value = "d-flex flex-column p-5 shadow bg-fourth";
            div.setAttribute("style", "border-top: 5px solid #DC3545");

            qS(".modal-info header").classList.value = "text-center mt-2";
            qS(".modal-info header i").classList.value =
                "fas fa-exclamation-triangle text-danger fa-3x";
            qS(".modal-info header p").classList.value =
                "text-center text-danger font-weight-bold h4 mt-4";
            qS(".modal-info header p").innerHTML = "Cancelar";

            qS(".modal-info section").classList.value = "my-4";
            qS(".modal-info section p").classList.value =
                "text-danger text-center font-weight-bold mt-3";
            qS(".modal-info section p").innerHTML = `Reserva N° ${reserve.id} de "${reserve.name} ${reserve.lastname}" ?`;
            qS(".modal-info section div").classList.value =
                "d-flex justify-content-center mt-5";

            qS(".modal-info section button.cancel").innerHTML = "Salir";
            qS(".modal-info section button.cancel").classList.value =
                "border-0 bg-transparent text-third";
            qS(".modal-info section button.other-action").innerHTML = "Aceptar";
            qS(".modal-info section button.other-action").classList.value =
                "other-action btn btn-danger ml-4 text-fourth";
            qS(".modal-info section button.other-action").setAttribute(
                "dataId",
                `${reserve.id}`
            );
            qS(".modal-info section button.other-action").onclick = () =>
                cancelReserve(reserve);

            qS(".container-modalinfo").classList.toggle("d-none");
        }
    };

    const cancelReserve = async (reserve) => {
        const url = `${urlapi}/reserves/cancel`;
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...props.admin,
                reserve: reserve,
            }),
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if (response && !response.error) {
            props.setRefresh(true);
            qS(".modal-info section button.cancel").click();
        }
    };

    const handlerOnMouseOver = (selector) => {
        if (selector !== "") {
            const element = qS(selector);
            if (element) element.classList.add("d-flex");
        }
    };

    const handlerOnMouseOut = (selector) => {
        if (selector !== "") {
            const element = qS(selector);
            if (element) element.classList.remove("d-flex");
        }
    };

    return (
        <div className="field d-flex flex-column align-items-center mb-4 shadow">
            {field ? (
                <p className="col-12 text-center text-third font-weight-bold bg-second py-2 px-lg-4 px-xl-5">
                    Cancha N° {field.number}
                </p>
            ) : (
                ""
            )}
            {reserves.length ? (
                props.field.options.map((option, i) => {
                    const selector = option.reserved ? `#field${option.field} #reserve${option.reserve_id}` : "";
                    return (
                        <div
                            key={i}
                            id={`field${option.field}`}
                            onMouseOver={() => handlerOnMouseOver(selector)}
                            onMouseOut={() => handlerOnMouseOut(selector)}
                        >
                            <span
                                id={`reserve${option.reserve_id}`}
                                className={`mytooltip text-center reserve${option.reserve_id}`}
                                datatitle={`${option.name} ${option.phone}`}
                            ></span>
                            <p
                                idreserve={option.reserve_id ? option.reserve_id : ""}
                                className={`row mb-1 text-first ${option.incomming ? 'reserved' : ''} ${option.reserved ? "text-danger" : ""}`}
                                onClick={() => showModalOnCancelReserve(option.reserve_id)}
                                onMouseOver={() => props.checkReserve(field.number - 1,i, option.incomming)}
                            >
                                {option.shedule} - hs
                                <span
                                    idreserve={option.reserve_id ? option.reserve_id : ""}
                                    className={`${option.reserved ? "text-danger" : "text-success"}`}
                                >
                                    {option.reserved ? "Reservado" : "Libre"}
                                </span>
                            </p>
                        </div>
                    );
                })
            ) : (
                <p>Loading ...</p>
            )}
        </div>
    );
}

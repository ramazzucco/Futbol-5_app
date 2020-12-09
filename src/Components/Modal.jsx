import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import validacion from "../validations";
import functions from "../functions";

//Components.
import FormReserve from "./FormReserve";
import ModalResponse from "./ModalResponse";

export default function Modal() {

    const [ canchaYhorario, setCanchaYhorario ] = useState([]);

    const [ horario, setHorario ] = useState([]);

    const [ opcionCancha, setOpcionCancha ] = useState(0);

    const { register, handleSubmit, errors } = useForm();


    const selectCancha = (e) => {
        setOpcionCancha(Number(e.target.value));
        console.log(e.target.value)
        selectCanchaYhorario(e.target.value);
    }

    const getCanchaYhorario = () => {

        fetch(`${functions.urlBase}/reserves/canchaYhorario`)
        .then( res => res.json())
        .then(response => {
            setCanchaYhorario(response.data);
            console.log(response.data)
        })
    }

    const selectCanchaYhorario = (cancha) => {
        console.log("el numero que va al FETCH es: ", cancha)
        fetch(`${functions.urlBase}/reserves/canchaYhorario/${cancha}`)
        .then( res => res.json())
        .then(response => {
            setHorario(response.data)
            console.log(response.data)
        })

    }

    useEffect(() => {

        window.onload = () => {
            getCanchaYhorario()
        }

    })

    const onSubmit = (data, e) => {
        e.preventDefault()

        console.log(data.cancha)

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        fetch(`${functions.urlBase}/reserves/send`, options)
        .then(res => res.json())
        .then(response => {
            console.log(response.meta.msg)
            if(response.meta.msg === "La Reserva Fue Exitosa!"){
                document.querySelector(".modal-dialog").innerHTML = functions.responseSuccess(response)
            }
            const data = {
                reserveId: response.data.id,
                cancha: response.data.cancha,
                horario: response.data.horario,
                reservado: true
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
            fetch(`${functions.urlBase}/reserves/modify`, options)
            .then(res => res.json())
            .then(response => {
                console.log(response)
            })
        })
        e.target.reset()
    }

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title text-primary font-weight-bold"
                            id="exampleModalLabel"
                        >
                            Reserva tu Cancha
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <FormReserve
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        register={register}
                        validacion={validacion}
                        selectCancha={selectCancha}
                        canchaYhorario={canchaYhorario}
                        horario={horario}
                        opcionCancha={opcionCancha}
                        setOpcionCancha={setOpcionCancha}
                        errors={errors}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import validacion from "../validations";
import functions from "../functions";
import mainFunctions from "../mainFunctions";

//Components.
import FormReserve from "./FormReserve";

export default function Modal() {

    const [ canchaYhorario, setCanchaYhorario ] = useState([]);

    const [ horario, setHorario ] = useState([]);

    const [ opcionCancha, setOpcionCancha ] = useState(0);

    const { register, handleSubmit, errors } = useForm();

    const urlApi = functions.urlApiBase;

    const selectCancha = (e) => {
        setOpcionCancha(Number(e.target.value));
        console.log(e.target.value)
        selectCanchaYhorario(e.target.value);
    }

    const getCanchaYhorario = () => {

        fetch(`${urlApi}/api/reserves/canchaYhorario`)
        .then( res => res.json())
        .then(response => {
            setCanchaYhorario(response.data);
            console.log(response.data)
        })
    }

    const selectCanchaYhorario = (cancha) => {
        console.log("el numero que va al FETCH es: ", cancha)
        fetch(`${urlApi}/api/reserves/canchaYhorario/${cancha}`)
        .then( res => res.json())
        .then(response => {
            setHorario(response.data)
            console.log(response.data)
        })

    }

    useEffect(() => {

        getCanchaYhorario();

    },[])

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
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
                            onSubmit={mainFunctions.onSubmit}
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

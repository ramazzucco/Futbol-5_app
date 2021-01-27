import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { submitCreateReserve } from "../../javascript/servicesApi";
import { fieldsNewReserve } from "../../javascript/constantes";
import validations from "../../validations";

//Components.
import Input from "../Input";
import Select from "../Select";
import Loading from "../Loading";

export default function Newreserve(props) {

    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ data, setData ] = useState({user: props.admin});
    const { register, handleSubmit } = useForm();

    useEffect(() => {

        dataFields.length
            ? setLoading({reservesOfTheDay: false})
            : console.log("Cargando formulario...")

    },[])

    const onSubmit = {

        createReserve: () => {

            submitCreateReserve(
                data,props.setReservesOfTheDay,props.reservesOfTheDay,props.setErrors,props.setShowError
            );

        }

    }

    const handlerChange = (e) => {

        if(e.target.name === "cancha"){
            const cancha = e.target.value;
            const optionsHorarios = window.document.querySelectorAll(`.horarioOption`);

            optionsHorarios.forEach( option => {

                if(!option.className.includes("d-none") && !option.className.includes(`cancha${cancha}`)){
                    option.classList.toggle("d-none");
                }

                if(option.className.includes(`cancha${cancha}`)){
                    option.classList.toggle("d-none");
                }

            })
        }

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => {
        const inputs = document.querySelectorAll(".new-reserve input");

        inputs.forEach( input => {
            input.value = ""
        });
    }

    const dataFields = fieldsNewReserve(
        register,
        handleSubmit,
        props.errors,
        validations,
        handlerChange,
        onSubmit.createReserve,
        props.reserves,
        props.switchMode
    )

    return (
        <div className="container-fluid d-flex justify-content-center p-5">
            {
                loading.reservesOfTheDay
                    ? <Loading loading={loading} />
                    : (
                        <div className={dataFields[0].component[0].class.classNameCard}>
                            <div className={dataFields[0].component[0].class.classNameCardHeader}>
                                <div className="row justify-content-around align-items-center contentHeader">
                                    {dataFields[0].card}
                                </div>
                            </div>
                            <div className={dataFields[0].component[0].class.classNameCardBody}>
                                <p
                                    className={`text-danger h5 ${props.showError ? "" : "d-none"}`}
                                >
                                    Error!
                                </p>
                                <form onSubmit={handleSubmit(onSubmit.createReserve)} className="row">
                                    {
                                        dataFields[0].component.map((field,i) => {
                                            return (
                                                field.type === "select"
                                                    ? <Select
                                                        key={i}
                                                        field={field}
                                                        dataForm={{title: "new reserve"}}
                                                    />
                                                    : <Input
                                                        key={i}
                                                        field={field}
                                                        dataForm={{
                                                            onChange: field.onChange,
                                                            errors: field.errors,
                                                        }}
                                                    />
                                            );
                                        })
                                    }
                                    <div className="w-100 d-flex justify-content-center mt-4 mb-2 cardPageButtons">
                                        <button
                                            className="btn btn-primary text-capitalize mx-2"
                                            type="submit"
                                        >
                                            enviar
                                        </button>
                                        <button
                                            className="btn btn-danger text-capitalize mx-2"
                                            type="button"
                                            onClick={handleCancel}
                                        >
                                            cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
            }
            
    </div>
    )
}

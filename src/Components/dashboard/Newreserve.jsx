import React, { useState, useEffect } from 'react'
import { fieldsNewReserve } from "../../javascript/constantes";
import { useForm } from "react-hook-form";
import validations from "../../validations";

//Components.
import Input from "../Input";
import Select from "../Select";
import Loading from "../Loading";

export default function Newreserve(props) {

    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ data, setData ] = useState({});
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {

        dataFields.length
            ? setLoading({reservesOfTheDay: false})
            : console.log("Cargando formulario...")

    },[])

    const onSubmit = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        fetch(`/reserve/create`,options)
            .then(res => res.json())
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    const handlerChange = (e) => {
        setData({
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => {
        const inputs = document.querySelectorAll(".new-reserve input");

        inputs.forEach( input => {
            input.value = ""
        });
    }

    const dataFields = fieldsNewReserve(register,handleSubmit,errors,validations,handlerChange,onSubmit,props.reserves)

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
                                <form onSubmit={handleSubmit(onSubmit)} className="row">
                                    {
                                        dataFields[0].component.map((field) => {
                                            return (
                                                field.type === "select"
                                                    ? <Select
                                                        field={field}
                                                        dataForm={{title: "new reserve"}}
                                                    />
                                                    : <Input
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

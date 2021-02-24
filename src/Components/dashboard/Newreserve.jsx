import React, { useState, useEffect } from 'react'
import { fieldsNewReserve } from "../../javascript/Newreserve";
import { submitCreateReserve } from "../../javascript/servicesApi";

//Components.
import Form from '../Form';
import Loading from "../Loading";

export default function New_newreserve(props) {

    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ dataPost, setDataPost ] = useState([]);

    useEffect(() => {
        dataFields.length
            ? setLoading({reservesOfTheDay: false})
            : console.log("Cargando formulario...")

    },[]);

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

        setDataPost({user: props.admin,...dataPost, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        submitCreateReserve(e,dataPost,props.setReservesOfTheDay,props.reservesOfTheDay,props.setErrors,props.setShowError)
    }

    const cancelForm = () => {
        const inputs = document.querySelectorAll(".newreserve input");
        const selects = document.querySelectorAll(".newreserve select");
        const errors = document.querySelectorAll("#newreserve .errors");

        selects.forEach( select => {
            select.options.selectedIndex = 0;
        });

        inputs.forEach( input => {
            input.value = "";
        })

        errors.forEach( error => {
            error.innerHTML = "";
        })
    }

    const dataFields = fieldsNewReserve(
        handlerChange,
        onSubmit,
        props.switchMode,
        dataPost,
        setDataPost,
        cancelForm,
        props.reserves,
    )

    return (
        <div className={dataFields[0].class.container}>
            {
                loading.reservesOfTheDay
                    ? <Loading loading={loading} switchMode={props.switchMode}/>
                    : <div className={dataFields[0].class.card}>
                        <div className={dataFields[0].class.header}>
                            <h5 className={dataFields[0].header.classNameTitle}>{dataFields[0].header.title}</h5>
                        </div>
                        <div className={dataFields[0].class.body + " " + dataFields[0].card}>
                            {
                                <Form  form={dataFields[0]} />
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

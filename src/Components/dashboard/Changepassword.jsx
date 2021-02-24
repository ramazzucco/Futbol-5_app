import React, { useState, useEffect } from 'react';
import { fieldsChangepassword } from "../../javascript/changepassword";
import { submitChangePassword } from "../../javascript/servicesApi";
import { showPasswords } from "../../javascript/form";

//Components.
import Loading from '../Loading';
import Form from '../Form';

export default function Changepassword(props) {

    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ dataPost, setDataPost ] = useState();

    useEffect(() => {
        dataFields.length
            ? setLoading({reservesOfTheDay: false})
            : console.log("Cargando formulario...")
    },[])

    const handlerChange = (e) => {
        setDataPost({user: props.admin,...dataPost,[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        submitChangePassword(e,dataPost, props.setAdmin);
    }

    const cancelForm = () => {
        const inputs = document.querySelectorAll(".changepassword input");
        const errors = document.querySelectorAll("#changepassword .errors");

        inputs.forEach( input => {
            input.value = "";
        })

        errors.forEach( error => {
            error.innerHTML = "";
        })
    }

    const dataFields = fieldsChangepassword(
        props.switchMode,onSubmit,dataPost,setDataPost,handlerChange,cancelForm
    );

    showPasswords();

    return (
        <div className="container-fluid d-flex justify-content-center p-2">
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

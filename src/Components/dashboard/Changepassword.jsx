import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import validations from "../../validations";
import { fieldsChangepassword } from "../../javascript/constantes";
import {urlApiBase} from "../../functions";

//Components.
import Form from '../Form';
import Loading from '../Loading';

//Components.

export default function Changepassword(props) {

    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ dataPost, setDataPost ] = useState();
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        dataFields.length
            ? setLoading({reservesOfTheDay: false})
            : console.log("Cargando formulario...")

    },[])

    const handlerChange = (e) => {
        setDataPost({user: props.admin,...dataPost,[e.target.name]: e.target.value})
    }

    const onSubmit = () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataPost),
        }
        fetch(`${urlApiBase}/api/admin/changepassword`, options)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if(response && response.data[0].error){
                    errors.errors = [{
                        error: true,
                        field: response.data[0].field,
                        message: response.data[0].message
                    }]
                } else {
                    document.querySelector(".card-body.changepassword").innerHTML = `<h5 class=" text-dark p-5">User ${response.data[0].name} ${response.data[0].lastname}</h5><h3 class="text-success mb-3">Password changed successfully!</h3>`
                }

            })
            .catch(error => console.log(error))
    }

    const dataFields = fieldsChangepassword(register,validations)

    const dataFieldsChangePassword = {
        fields: dataFields,
        action: "Change Password",
        class: dataFields[0].class,
        onSubmit: handleSubmit(onSubmit),
        onChange: handlerChange,
        errors: errors,
        buttonContent: "enviar",
    };

    return (
        <div className="container-fluid d-flex justify-content-center p-5">
            {
                loading.reservesOfTheDay
                    ? <Loading loading={loading} />
                    : <Form dataForm={dataFieldsChangePassword} />
            }
        </div>
    )
}

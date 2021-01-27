import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import validations from "../../validations";
import { fieldsChangepassword } from "../../javascript/constantes";
import { submitChangePassword } from "../../javascript/servicesApi";

//Components.
import Form from '../Form';
import Loading from '../Loading';

export default function Changepassword(props) {

    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ dataPost, setDataPost ] = useState();
    const { register, handleSubmit } = useForm();

    const dataFields = fieldsChangepassword(register,validations,props.switchMode);

    useEffect(() => {
        dataFields.length
            ? setLoading({reservesOfTheDay: false})
            : console.log("Cargando formulario...")

    },[])

    const handlerChange = (e) => {
        setDataPost({user: props.admin,...dataPost,[e.target.name]: e.target.value})
    }

    const onSubmit = {
        changePassword: () =>{

            submitChangePassword(dataPost, props.setErrors, props.setShowError, props.setAdmin);

        }
    }

    const dataFieldsChangePassword = {
        fields: dataFields,
        action: "Change Password",
        class: dataFields[0].class,
        onSubmit: handleSubmit(onSubmit.changePassword),
        onChange: handlerChange,
        errors: props.errors,
        buttonContent: "enviar",
    };

    return (
        <div className="container-fluid d-flex justify-content-center p-2">
            {
                loading.reservesOfTheDay
                    ? <Loading loading={loading} />
                    : <Form
                        dataForm={dataFieldsChangePassword}
                        showError={props.showError}
                        switchMode={props.switchMode}
                    />
            }
        </div>
    )
}

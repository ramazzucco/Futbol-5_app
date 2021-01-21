import React, { useState } from "react";
import { fieldsSignup as signupData, fieldsLogin as loginData } from "../../javascript/constantes";
import "../../css/Login.css";

//Components.
import Form from "../Form";

export default function Login(props) {

    const [show, setShow] = useState("login");

    const fieldsLogin = loginData(props);

    const fieldsSignup = signupData(props);

    const dataLogin = {
        fields: fieldsLogin,
        action: "login",
        class: fieldsLogin[0].class,
        onSubmit: props.handleSubmit(props.onSubmit.login),
        onChange: props.handlePassword,
        errors: props.errors,
        buttonContent: "ingresar",
    };

    const dataSignup = {
        fields: fieldsSignup,
        action: "Signup",
        class: fieldsSignup[0].class,
        onSubmit: props.handleSubmit(props.onSubmit.signup),
        onChange: props.handleSignup,
        errors: props.errors,
        buttonContent: "enviar",
    };

    const showLogin = () => {
        setShow("login");
        document.querySelector(".form-content").classList.add("form-content-before")
        document.querySelector(".form-content-back").classList.add("form-content-back-before")
    };

    const showSignin = () => {
        setShow("signup");
        document.querySelector(".form-content").classList.add("form-content-before")
        document.querySelector(".form-content-back").classList.add("form-content-back-before")
    };

    return (
        <div className="container-form d-flex">
            <div className="form-img w-50 my-auto d-flex justify-content-center">
                <img src="/assets/logo.jpg" alt="logo" />
            </div>
            <div className="w-50 bg-primary d-flex">
                <div className="content-absolut form-content rounded shadow-lg p-5">
                    <div className="form-title mb-5 d-flex justify-content-center flex-wrap">
                        <i className="fa fa-user fa-4x text-light my-2 bg-primary rounded-circle p-4"></i>
                        <h1 className="text-light text-uppercase text-center w-100">
                            Welcome to MyApp
                        </h1>
                    </div>
                    <button
                        className="btn btn-block btn-success text-uppercase"
                        onClick={showLogin}
                    >
                        Login
                    </button>
                    <button
                        className="btn btn-block btn-info text-uppercase"
                        onClick={showSignin}
                    >
                        Signup
                    </button>
                </div>
                {
                    show === "login"
                    ? <Form dataForm={dataLogin} showError={props.showError} />
                    : <Form dataForm={dataSignup} showPass={props.showPass} showError={props.showError} />
                }
            </div>
        </div>
    );
}

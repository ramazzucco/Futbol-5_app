import React, { useState, useEffect } from "react";
import { fieldsSignup as signupData, fieldsLogin as loginData } from "../../javascript/login";
import { handlerChange as handlerError} from "../../javascript/cardPage";
import { getAdmin } from "../../javascript/servicesApi";
import { showPasswords } from "../../javascript/form";
import "../../css/Login.css";

//Components.
import Form from "../Form";

export default function Login(props) {

    const [ dataPost, setDataPost ] = useState({});
    const [ show, setShow ] = useState("login");

    // useEffect(() => {
    //     if(!props.admin.session){
    //         const password = { password: "" }
    //         getAdmin(password, props.setAdmin)
    //     }
    // },[props.admin]);

    const handlerChange = (e) => {
        const error = document.getElementById(`error${e.target.attributes.id.value}`);

        if(error.innerHTML !== ""){
            error.innerHTML = "";
        }

        setDataPost({...dataPost,[e.target.name]: e.target.value})
    }

    const showLogin = () => {
        setShow("login");
        document.querySelector(".form-content").classList.add("form-content-before")
        document.querySelector(".form-content-back").classList.add("form-content-back-before", "login")
    };

    const showSignup = () => {
        setShow("signup");
        document.querySelector(".form-content").classList.add("form-content-before")
        document.querySelector(".form-content-back").classList.add("form-content-back-before", "signup")
    };

    const goBack = () => {
        const inputsLogin = document.querySelector("form#login input");
        const inputsSignup = document.querySelectorAll("form#signup input");
        const errors = document.querySelectorAll(".errors p");
        const formContent = document.querySelector(".form-content");
        const formContentBack = document.querySelector(".form-content-back");
        formContent.classList.remove("form-content-before");
        formContentBack.classList.remove("form-content-back-before");

        if(formContentBack.className.includes("login")){
            formContentBack.classList.remove("login");

            inputsLogin.value = "";
        } else {
            formContentBack.classList.remove("signup");
            inputsSignup.forEach( input => {
                input.value = "";
            })
        }

        errors.forEach( error => {
            if(error.innerHTML != "") error.innerHTML = "";
        })

    }

    const fieldsLogin = loginData(props,handlerChange,dataPost,goBack);
    const fieldsSignup = signupData(props,handlerChange,dataPost,goBack);

    showPasswords();

    return (
        <div className={`container-form d-flex`}>
            <div className="form-img col-lg-5 my-auto d-flex justify-content-center p-0">
                <img src="/assets/logo.jpg" alt="logo" />
            </div>
            <div className="col-12 col-lg-7 bg-primary d-flex p-0">
                <div className="content-absolut form-content rounded shadow-lg p-5">
                    <div className="form-title mb-5 d-flex justify-content-center flex-wrap">
                        <i className={`fa fa-user fa-4x my-2 rounded-circle p-4 bg-primary text-white`}></i>
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
                        onClick={showSignup}
                    >
                        Signup
                    </button>
                </div>
                {
                    show === "login"
                        ? <div className={fieldsLogin[0].class.card}>
                            <div className={fieldsLogin[0].class.header}>
                                <h5 className={fieldsLogin[0].header.classNameTitle}>{fieldsLogin[0].header.title}</h5>
                            </div>
                            <div className={fieldsLogin[0].class.body + " " + fieldsLogin[0].card}>
                                {
                                    <Form  form={fieldsLogin[0]} showPass={props.showPass} />
                                }
                            </div>
                        </div>
                        : <div className={fieldsSignup[0].class.card}>
                            <div className={fieldsSignup[0].class.header}>
                                <h5 className={fieldsSignup[0].header.classNameTitle}>{fieldsSignup[0].header.title}</h5>
                            </div>
                            <div className={fieldsSignup[0].class.body + " " + fieldsSignup[0].card}>
                                {
                                    <Form  form={fieldsSignup[0]} showPass={props.showPass} />
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

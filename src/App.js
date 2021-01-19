import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {urlApiBase} from "./functions";
import { useForm } from "react-hook-form";
import validations from "./validations";
import "./App.css";

//Components
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/dashboard/Login";

function App() {

    const [ admin, setAdmin ] = useState({session: false});
    const [ password, setPassword ] = useState("");
    const [ showPass, setShowPass ] = useState(false);
    const [ signup, setSignup ] = useState({
        name: "",
        lastname: "",
        password: "",
        status: "admin",
        key: ""
    });
    const [ validationError, setValidationError ] = useState({signin: false, signup: false});
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        getAdmin();
        if(validationError.signin){
            getAdmin();
        }
    },[validationError.signin]);

    useEffect(() => {
        if(validationError.signup){
            submitSignup();
        } else {
            getAdmin();
        }
    },[validationError.signup]);

    useEffect(() => {

        handleShowPass();

        if(showPass){
            const password = document.getElementById("password");
            password.setAttribute("type","text");
        } else {
            const password = document.getElementById("password");
            password.setAttribute("type","password");
        }

    },[showPass])

    const handleSignup = (e) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value,
        });
    }

    const submitSignup = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signup),
        };
        fetch(`${urlApiBase}/api/admin/create`, options)
            .then(res => res.json())
            .then(response => {

                if(response && response.error){

                    Array.isArray(response.data)
                        ? errors.errors = [...response.data]
                        : errors.errors = [response.data]
                    setValidationError({signin: validationError.signin, signup: true})
                    setAdmin({session: false});

                    if(Array.isArray(response.data)){
                        response.data.map( error => {

                            const input = document.getElementById(`${error.field}`);

                            input.value = ""

                        })
                    } else {

                        const input = document.getElementById(`${response.data.field}`);

                        input.value = ""

                    }

                }

                if(response && response.data.session){
                    setAdmin({session: true,...response.data});
                }
            })
            .catch(error => console.log(error))
    }

    const handleOnFocus = () => { }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const getAdmin = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({password: password}),
        };

        fetch(`${urlApiBase}/api/admin/login`,options)
            .then(res => res.json())
            .then(response => {

                if(response && response.error){

                    errors.errors = [response.data]
                    setValidationError({signin: true, signup: validationError.signup});
                    setAdmin({session: false});

                    const input = document.getElementById(`${response.data.field}`);

                    input.value = ""

                }

                if(response && response.data.session){
                    setAdmin({session: true,...response.data});
                }
            })
            .catch(error => console.log(error))
    }

    const handleShowPass = () => {

        const icons = document.querySelectorAll("form .far");

        icons.forEach(icon => {

            icon.onclick = () => {
                console.log(icon)
                setShowPass(!showPass);
                icons.forEach( icon => {
                    icon.classList.toggle("d-none");
                })
            }

        })

    }

        return (
            <Router>
                {
                    admin.session === false
                        ? <Login
                            getAdmin={getAdmin}
                            handlePassword={handlePassword}
                            register={register}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            validations={validations}
                            handleSignup={handleSignup}
                            submitSignup={submitSignup}
                            showPass={showPass}
                        />
                        : <Route path="/">
                            <Dashboard admin={admin} setAdmin={setAdmin} showPass={showPass} />
                        </Route>
                }
            </Router>
        );
}

export default App;

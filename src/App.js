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
    const [ signup, setSignup ] = useState({
        name: "",
        lastname: "",
        password: "",
        status: "admin",
        key: ""
    });
    const [ validationError, setValidationError ] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        getAdmin();
    },[]);

    useEffect(() => {
        submitSignup();
    }, [errors])

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

                if(response && response.data[0].error){
                    console.log(response.data[0])
                    errors.errors = response.data
                    setValidationError(true)
                    setAdmin({session: false});
                }
            })
            .catch(error => console.log(error))
    }

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

                if(response && response.data[0].error){

                    setAdmin({session: false});
                    errors.errors = [{
                        error: true,
                        field: "password",
                        message: "Wrong Password"
                    }]

                }
                console.log(response)
                if(response && response.data[0].session){
                    setAdmin({session: true,...response.data[0]});
                }
            })
            .catch(error => console.log(error))
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
                        />
                        : <Route path="/">
                            <Dashboard admin={admin} setAdmin={setAdmin} />
                        </Route>
                }
            </Router>
        );
}

export default App;

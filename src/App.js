import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mainFunctions } from "./mainFunctions";
import validations from "./validations";
import "./App.css";

//Components
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/dashboard/Login";

function App() {

    const [ admin, setAdmin ] = useState({session: false});
    const [ createAdmin, setCreateAdmin ] = useState(false);
    const [ password, setPassword ] = useState({password: ""});
    const [ showError, setShowError ] = useState(false);
    const [ signup, setSignup ] = useState({
        name: "",
        lastname: "",
        password: "",
        status: "admin",
        key: ""
    });
    const [ errors, setErrors ] = useState({});
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if(admin.session === false){
            onSubmit.login();
        }
    },[admin]);

    useEffect(() => {
        if(createAdmin){
            onSubmit.login();
        }
    },[createAdmin])

    useEffect(() => {
        if(errors.show){
            setShowError(true);
        } else {
            setShowError(false)
        }
    },[errors])

    const handleSignup = (e) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value,
        });
    }

    const handleOnFocus = () => { }

    const handlePassword = (e) => {
        setPassword({[e.target.name]: e.target.value});
    }

    const onSubmit = {

        login: () => {

            mainFunctions.getAdmin(password,setAdmin,setErrors,setCreateAdmin);

        },
        signup: () => {

            mainFunctions.submitSignup(signup,setAdmin,setErrors,setCreateAdmin);

        }

    }

    mainFunctions.showPasswords();

    return (
        <Router>
            {
                !admin.session
                    ? <Login
                        getAdmin={getAdmin}
                        handlePassword={handlePassword}
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        errors={errors}
                        validations={validations}
                        handleSignup={handleSignup}
                        showError={showError}
                    />
                    : <Route path="/">
                        <Dashboard
                            admin={admin}
                            setAdmin={setAdmin}
                            setErrors={setErrors}
                            setShowError={setShowError}
                            setCreateAdmin={setCreateAdmin}
                        />
                    </Route>
            }
        </Router>
    );
}

export default App;

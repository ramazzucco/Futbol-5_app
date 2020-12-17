import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {urlApiBase} from "./functions";
import "./App.css";

//Components
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Dashboard from "./Components/dashboard/Dashboard";
import Loading from "./Components/Loading";

function App() {
    const path = window.location.pathname;

    const [ admin, setAdmin ] = useState("");
    const [loading, setLoading] = useState({reservesOfTheDay: true});

    useEffect(() => {
        getAdmin()
    },[])

    const redirect = () => {
        window.location.assign(urlApiBase + "/admin");
    }

    const getAdmin = () => {
        fetch(`${urlApiBase}/api/reserves/admin`)
            .then(res => res.json())
            .then(response => {
                console.log("Desde el FETCH: ",response.meta.admin)
                setAdmin(response.meta.admin)
                response.meta.admin
                    ? setLoading({reservesOfTheDay: false})
                    : setLoading({reservesOfTheDay: true})
            })
    }

    if(path === "/"){
        return (
            <Router>
                <Route path="/">
                    <Header />
                    <Main />
                    <Footer />
                </Route>
            </Router>
        )
    } else {
        return (
            <Router>
                <Loading loading={loading} />
                {
                    admin !== "" ?
                        admin ? <Route path="/admin">
                                <Dashboard />
                            </Route>
                            : redirect()
                        : console.log("cargando session")
                }
            </Router>
        );
    }
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//Components
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/dashboard/Login";

function App() {

    const [ admin, setAdmin ] = useState({session: false});
    const [ switchMode, setSwitchMode ] = useState("");

    useEffect(() => {
        const getThemeMode = localStorage.getItem("switchMode");

        if(!getThemeMode){
            setSwitchMode("ligth");
        }

        if(getThemeMode && getThemeMode === "ligth"){
            setSwitchMode("ligth");
        }

        if(getThemeMode && getThemeMode === "dark"){
            document.getElementById("root").classList.toggle("ligth");
            document.getElementById("root").classList.toggle("dark");
            setSwitchMode("dark");
        }
    },[])

    return (
        <Router>
            <Route path="/">
            {
                !admin.session
                    ? <Login
                        switchMode={switchMode}
                        setSwitchMode={setSwitchMode}
                        admin={admin}
                        setAdmin={setAdmin}
                    />
                    : <Dashboard
                        admin={admin}
                        setAdmin={setAdmin}
                        switchMode={switchMode}
                        setSwitchMode={setSwitchMode}
                    />
            }
            </Route>
        </Router>
    );
}

export default App;

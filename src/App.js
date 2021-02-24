import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//Components
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/dashboard/Login";

function App() {

    const [ admin, setAdmin ] = useState({session: false});
    const [ switchMode, setSwitchMode ] = useState("ligth");

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

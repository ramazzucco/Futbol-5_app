import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//Components
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Dashboard from "./Components/dashboard/Dashboard";

function App() {
    const path = window.location.pathname;

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
                <Route path="/admin">
                    <Dashboard />
                </Route>
            </Router>
        );
    }
}

export default App;

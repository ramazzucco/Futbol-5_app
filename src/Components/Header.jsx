import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import functions, {dataLinks, urlAppBase as urlApp} from "../functions";
import {getInfoApp} from "../javascript/constantes";

//Components.
import Links from "./Links";

export default function Header() {

    const [ ip, setIp ] = useState("");
    const links = dataLinks();
    const urlAppBase = urlApp;

    useEffect(() => {
        getIp();
    },[ip])

    const getIp = () => {
        fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(response => {
                setIp("200.3.222.30_secretWord")
            })
    }

    const show = () => {
        const pass = window.document.querySelector(".passApp");
        pass.classList.toggle("d-none")
    }

    const showInfoApp = () => {
        window.document.querySelector(".modal-body").innerHTML = getInfoApp();
        window.document.querySelector(".modal-title").innerHTML = "INFO - APP"
    }

    return (
        <div className="fixed-top navbar-expand-md header">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-success p-4">
                    <ul className="nav nav-pills flex-column">
                        {
                            links.map((link, i) => {
                                return <Links links={link} />
                            })
                        }
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-success justify-content-between">
                <NavLink className="navbar-brand" to="/">
                    <i className="fas fa-futbol fa-2x text-dark" id="logo"></i>
                </NavLink>
                <ul className="nav nav-pills flex-inline">
                    {
                        links.map((link, i) => {
                            return <Links links={link} />
                        })
                    }
                </ul>
                <button className="btn btn-sm btn-outline-dark" onClick={show}>
                    Password-App
                </button>
                <p className="passApp d-none h4">ramiromazzucco</p>
                <button className="btn btn-sm btn-outline-dark" 
                    onClick={showInfoApp}
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Info-App
                </button>
                <a  className={`${ip === "200.3.222.30_secretWord" ? "d-flex" : "d-none"}`}
                    href={`${urlAppBase}/admin`}
                >
                    <button className={`admin btn btn-dark text-uppercase`}>
                        entrar
                    </button>
                </a>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    )
}


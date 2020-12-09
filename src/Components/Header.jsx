import React from 'react';
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import functions from "../functions";
import Links from "./Links";

export default function Header() {

    const links = functions.dataLinks();

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
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    )
}


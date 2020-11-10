import React from 'react';
import { NavLink } from "react-router-dom";
import "../css/Header.css";

export default function Header() {

    return (
        <div className="fixed-top navbar-expand-md header">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-success p-4">
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="main-nav-active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/instalaciones" className="nav-link" activeClassName="main-nav-active">
                                Instalaciones
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/cumpleaños" className="nav-link" activeClassName="main-nav-active">
                                Cumpleaños
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/escuelita" className="nav-link" activeClassName="main-nav-active">
                                Escuelita
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/promociones" className="nav-link" activeClassName="main-nav-active">
                                Promociones
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-success justify-content-between">
                <NavLink className="navbar-brand" to="/">
                    <i className="fas fa-futbol fa-2x text-dark"></i>
                </NavLink>
                <ul className="nav nav-pills flex-inline">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="main-nav-active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/instalaciones" className="nav-link" activeClassName="main-nav-active">
                            Instalaciones
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/cumpleaños" className="nav-link" activeClassName="main-nav-active">
                            Cumpleaños
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/escuelita" className="nav-link" activeClassName="main-nav-active">
                            Escuelita
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/promociones" className="nav-link" activeClassName="main-nav-active">
                            Promociones
                        </NavLink>
                    </li>
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


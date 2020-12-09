import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function DashboardHeader(props) {
    const [onLine, setOnLine] = useState("text-success");

    window.ononline = () => {
        setOnLine("text-success");
    };
    window.onoffline = () => {
        setOnLine("text-danger");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" target="_blanck">
                <i className={`fas fa-futbol fa-2x`}></i>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="nav nav-pills flex-inline mr-auto">
                    <li className="nav-item text-uppercase">
                        <NavLink
                            exact
                            to="/admin"
                            className="nav-link dashboard-nav-link font-weight-bold"
                            activeClassName="dashboard-main-nav-active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item text-uppercase">
                        <NavLink
                            exact
                            to="/admin/history"
                            className="nav-link dashboard-nav-link font-weight-bold text-nowrap"
                            activeClassName="dashboard-main-nav-active"
                        >
                            History
                        </NavLink>
                    </li>
                </ul>
                    <button
                        className="border-0 bg-transparent"
                        data-toggle="tooltips"
                        title="Click para resfrescar las reservas"
                    >
                        <button
                            className="text-capitalize mb-0 font-weight-bold"
                            onClick={() => {
                                props.getCanchaYhorario(
                                    ...props.paramGetCanchaYhorario
                                );
                            }}
                        >
                            Refresh
                            <i class="fas fa-sync-alt text-success ml-1"></i>
                        </button>
                    </button>
                    <h6 className="h4 clock_header font_clock mb-0 mx-2">{props.time}</h6>
                    <i
                        className={`fas fa-power-off fa-2x p-2 ${onLine}`}
                        data-toogle="tooltips"
                        title={
                            onLine === "text-success"
                                ? "Conectado a Internet"
                                : "Sin Internet"
                        }
                    ></i>
            </div>
        </nav>
    );
}

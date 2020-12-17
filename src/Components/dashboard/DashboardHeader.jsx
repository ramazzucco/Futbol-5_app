import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { dataButtons as data} from "../../javascript/constantes";
import { navLinks } from "../../javascript/constantes";

//Components.
import Modal from "../Modal";
import Clock from "./Clock";
import Button from "../Button";

export default function DashboardHeader(props) {
    const [onLine, setOnLine] = useState("text-success");

    window.ononline = () => {
        setOnLine("text-success");
    };
    window.onoffline = () => {
        setOnLine("text-danger");
    };

    const dataButtons = data(props);
    const navlinks = navLinks();

    return (
        <React.Fragment>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light py-0">
            <a className="navbar-brand" href="/" target="_blanck">
                <i className={`fas fa-futbol fa-2x `}></i>
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
                <ul className="nav nav-pills mr-auto">
                    <li className="nav-item flex-inline text-uppercase">
                        {
                            navlinks.map((link, i) => {
                                return (
                                    <NavLink exact {...link} key={i}>
                                        {link.content}
                                    </NavLink>
                                )
                            })
                        }
                    </li>
                </ul>
                {
                    dataButtons.map((btton,i) => {
                        return (
                            <Button {...btton} key={i} />
                        )
                    })
                }
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
        <Modal />
        <div className="col-8 col-md-12 d-flex flex-wrap justify-content-around mx-auto mt-3 p-3 contador">
            {props.reserves.map((cancha, i) => {
                return (
                    <Clock
                        key={i}
                        id={cancha[i].id}
                        addMinutes={props.addMinutes}
                        setAddMinutes={props.setAddMinutes}
                    />
                );
            })}
        </div>
        </React.Fragment>
    );
}

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { qS } from "../../functions";

export default function Header(props) {

    const [ active, setActive ] = useState('')

    const history = useHistory();

    useEffect(() => {
        const path = history.location.pathname.slice(6) === '' ? 'home' : history.location.pathname.slice(6);
        setActive(path)
    },[history])

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-md navbar-light bg-success p-0">
                <Link className="navbar-brand p-2" to="/page">
                    <img
                        className="rounded-circle"
                        src={`${props.data.logo.url}`}
                        alt="logo"
                    />
                </Link>
                <button
                    className="navbar-toggler m-3"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => qS(".navbar .collapse").classList.toggle("d-flex")}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse align-self-end h-100"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav mr-auto p-3 mx-auto mt-2 mt-lg-0">
                        {props.data.links.map((link,i) => {
                            return (
                                <li className="nav-item bttonpage flex-inline h6 mx-2" key={i}>
                                    <Link
                                        to={`${link !== 'home' ? `/page/${link}` : '/page'}`}
                                        className={`nav-link text-capitalize ${active === link ? 'active' : ''}`}
                                        onClick={() => setActive(link)}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

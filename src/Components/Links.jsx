import React from "react";
import { NavLink } from "react-router-dom";

export default function link(props) {
    return (
        <li className="nav-item">
            <NavLink
                exact
                to={props.links === "Home" ? "/" : props.links}
                className="nav-link"
                activeClassName="main-nav-active"
            >
                {props.links}
            </NavLink>
        </li>
    );
}

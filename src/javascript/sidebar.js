import React from "react";
import { Link } from "react-router-dom";
import {urlApiBase} from "../functions";

const showSubMenu = (e) => {
    const buttonClass = e.target.classList.value;

    if (e.target.classList.value.includes("clicked","clickeado")) {
        e.target.classList.replace("clicked", "uncliked");
        e.target.classList.replace("clickeado", "desabrochado");
    } else {
        e.target.classList.value = buttonClass + " clicked";
    }

    const buttonId = e.target.attributes[2].value;

    const subMenu = window.document.querySelector(`.subMenu.${buttonId}`);

    subMenu.classList.toggle("d-none");
};

const hideSubMenu = (e) => {

    const elementId = e.target.getAttribute("mainButton");
    const mainButton = window.document.querySelector(`.mainButtons.${elementId}`);
    const subMenu = window.document.querySelector(`.subMenu.${elementId}`);

    mainButton.classList.toggle("clicked");
    subMenu.classList.toggle("d-none");

};

const dataButtons = (props,showSubMenu, handleSwitchMode, hideSubMenu) => {
    const mainButtonClassName = `sidebarButtons mainButtons
        ${props.switchMode === "ligth" ? "text-dark" : "text-white"}`;
    const subButtonClassName = `sidebarButtons subButtons w-100
        ${props.switchMode === "ligth" ? "text-dark" : "text-white"}`;
    const iconSun = props.switchMode === "ligth" ? "fa-2x text-warning" : "text-secondary"
    const iconMoon = props.switchMode === "ligth" ? "text-dark" : "fa-2x text-light"

    return (
        [
            {
                className:mainButtonClassName + " mode d-flex justify-content-around",
                id: "mainButton",
                content: (
                    <React.Fragment>
                        <i class={`fas fa-sun ${iconSun} align-self-center`}></i><i class={`fas fa-moon ${iconMoon} align-self-center`}></i>
                    </React.Fragment>
                ),
                subMenu: true,
                onClick: () => { handleSwitchMode(props.switchMode,props.setSwitchMode) },
            },
            {
                className:mainButtonClassName,
                id: "mainButton",
                subMenu: false,
                content: (
                    <Link
                        exact="true"
                        to={`/`}
                        className={`${props.switchMode === "ligth" ? "text-dark" : "text-white"}`}
                    >
                        Home
                    </Link>
                ),
                onClick: () => { props.setShowClock("show") },
            },
            {
                className:mainButtonClassName + " reserves",
                id: "mainButton",
                subMenu: true,
                title: "reserves",
                content: "Reserves",
                onClick: (e) => { showSubMenu(e) },
                subButtons: [
                    {
                        className: subButtonClassName,
                        id: "subButton",
                        subMenu: false,
                        content: (
                            <Link
                                exact="true"
                                to={`/history`}
                                mainbutton= "reserves"
                            >
                                History
                            </Link>
                        ),
                        onClick: (e) => {
                            hideSubMenu(e)
                            props.setShowClock("hide")
                        },
                    },
                    {
                        className: subButtonClassName,
                        id: "subButton",
                        mainButton: "reserve",
                        subMenu: false,
                        content: (
                            <Link
                                exact="true"
                                to={`/newreserve`}
                                mainbutton= "reserves"
                            >
                                New
                            </Link>
                        ),
                        onClick: (e) => {
                            hideSubMenu(e)
                            props.setShowClock("hide")
                        },
                    },
                ]
            },
            {
                onClick: () => {
                    props.getCanchaYhorario(...props.paramGetCanchaYhorario, props.admin);
                },
                className:mainButtonClassName,
                id: "mainButton",
                subMenu: false,
                content: (<p>Refresh</p>),
            },
            {
                className:mainButtonClassName,
                id: "mainButton",
                subMenu: false,
                content: (
                    <Link
                        exact="true"
                        to={`/configpage`}
                        className={`${props.switchMode === "ligth" ? "text-dark" : "text-white"}`}
                    >
                        Page
                    </Link>
                ),
                onClick: () => { props.setShowClock("hide") },
            },
            {
                className:mainButtonClassName,
                id: "mainButton",
                subMenu: false,
                content: (
                    <a
                        className={`${props.switchMode === "ligth" ? "text-dark" : "text-white"}`}
                        href={`${urlApiBase}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Go to Page
                    </a>
                ),
            },
            {
                className:mainButtonClassName + " configuration",
                id: "mainButton",
                subMenu: true,
                title: "configuration",
                content: "Configuration",
                onClick: (e) => { showSubMenu(e) },
                subButtons: [
                    {
                        className:subButtonClassName,
                        id: "subButton",
                        subMenu: false,
                        content: (
                            <Link
                                exact="true"
                                to={`/changepassword`}
                                mainbutton= "configuration"
                            >
                                Change Password
                            </Link>
                        ),
                        onClick: (e) => {
                            hideSubMenu(e)
                            props.setShowClock("hide")
                        },
                    }
                ]
            },
            {
                className:mainButtonClassName,
                id: "mainButton",
                subMenu: false,
                onClick: () => {
                    props.handlerLogout(
                        props.admin,
                        props.setAdmin,
                        props.setErrors,
                        props.setShowError,
                        props.setCreateAdmin,
                        props.setSwitchMode
                    )
                },
                content: (<p>Logout</p>),
            },
        ]
    )
}

export { showSubMenu, hideSubMenu, dataButtons };

import React from "react";
import { dataButtons as data } from "../../javascript/constantes";
import { handleSwitchMode } from "../../javascript/dashboard";
import { showSubMenu, hideSubMenu } from "../../javascript/sidebar";
import "../../css/Sidebar.css";

//Components.
import Button from "../Button";

export default function Sidebar(props) {

    // showSubMenu();

    const dataButtons = data(props, showSubMenu, handleSwitchMode, hideSubMenu);

    return (
        <div className={`sidebarcontent bg-primary hide
            ${props.switchMode === "ligth" ? "bg-primary" : "bg-dark"}
        `}>
            {dataButtons.map((btton, i) => {
                return <Button key={i} {...btton} />;
            })}
        </div>
    );
}

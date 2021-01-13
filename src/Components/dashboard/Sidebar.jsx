import React from "react";
import { dataButtons as data } from "../../javascript/constantes";
import { urlApiBase } from "../../functions";
import "../../css/Sidebar.css";

//Components.
import Button from "../Button";

export default function Sidebar(props) {

    const dataButtons = data(props);

    return (
        <div className="sidebarcontent bg-primary hide">
            {dataButtons.map((btton, i) => {
                return <Button key={i} {...btton} />;
            })}
        </div>
    );
}

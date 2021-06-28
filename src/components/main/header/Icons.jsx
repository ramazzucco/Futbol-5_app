import React, { useState } from "react";

export default function Icons(props) {

    const [ online, setOnline ] = useState("green");

    window.ononline = () => {
        setOnline("green");
    };
    window.onoffline = () => {
        setOnline("red");
    };

    return (
        <div className="icons-header col-4 col-md-3 col-lg-2 px-0 pr-3 d-flex justify-content-end align-itmes-center">
            <p className="mb-0">{props.admin.name}</p>
            <i className="fas fa-user-circle ml-2"></i>
            <i className="fas fa-power-off ml-4" style={{ color: online }}></i>
        </div>
    );
}

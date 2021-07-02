import React, { useState } from "react";
import { hideMenu } from "../../../../functions";
import "./configuration.css";

// Components.
import Fields from "./fields/Fields";
import Shedules from "./shedules/Shedules";
import Loadingdata from "../../../Loading/Loadingdata";

export default function Configuration(props) {

    const [ active, setActive ] = useState('');
    const headertitles = ['Fields & Shedules'];

    return (
        <div className="configuration section bg-first p-0 p-md-4" onClick={hideMenu}>
            <div className="title col-12 pt-3 pt-md-0 text-left text-third">
                <h5>Configuration</h5>
                <hr className="bg-third w-100 mx-auto mt-2" />
            </div>
            <div className="header d-flex align-items-end">
                {headertitles.map((title, i) => {
                    return (
                        <button
                            key={i}
                            className={`configuration-button mx-2 p-3 border-0 text-third ${
                                active === title
                                    ? "bg-first-contrast shadow"
                                    : "bg-transparent"
                            }`}
                            onClick={() => setActive(title)}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>
            <div
                className={`content col-12 px-4 py-4 px-md-1 py-md-3 bg-first-contrast shadow d-flex flex-wrap justify-content-center
                    align-items-${active !== "" ? "start" : "center"}
                `}
            >
                {
                    props.reserves && props.reserves.length
                        ? (
                            <React.Fragment>
                                <Shedules reserves={props.reserves} active={active} admin={props.admin} />
                                <Fields reserves={props.reserves} active={active} admin={props.admin} />
                            </React.Fragment>
                        )
                        : <Loadingdata />
                }
                <i className={`fas fa-archive fa-3x text-first ${active === '' ? '' : 'd-none'}`}></i>
            </div>
        </div>
    );
}

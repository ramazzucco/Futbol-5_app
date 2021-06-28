import React from "react";
import { hideMenu } from "../../../../functions";
import "./configuration.css";

// Components.
import Fields from "./fields/Fields";
import Shedules from "./shedules/Shedules";
import Loadingdata from "../../../Loading/Loadingdata";

export default function Configuration(props) {
    return (
        <div className="configuration section bg-first p-4" onClick={hideMenu}>
            <div className="title col-12 text-left text-third">
                <h5>
                    Configuration
                </h5>
                <hr className='bg-third w-100 mx-auto mt-2' />
            </div>
            <div className="content px-4 d-flex flex-wrap align-items-start justify-content-start">
                {props.reserves && props.reserves.length ? (
                    <Shedules reserves={props.reserves} admin={props.admin} />
                ) : (
                    <Loadingdata />
                )}
                {props.reserves && props.reserves.length ? (
                    <Fields reserves={props.reserves} admin={props.admin} />
                ) : (
                    <Loadingdata />
                )}
            </div>
        </div>
    );
}

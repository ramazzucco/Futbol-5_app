import React from "react";

export default function Input(props) {
    return (
        <div className="col-12 form-group">
            <label htmlFor="name">{props.label}</label>
            <input
                className="form-control"
                type={props.type}
                name={props.name}
                ref={props.register(props.validacion)}
            />
            <span className="text-danger text-small d-block mb-2">
                {props.errors? props.errors.message : ""}
            </span>
        </div>
    );
}

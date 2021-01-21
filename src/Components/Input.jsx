import React from "react";

export default function Input(props) {

    const errors = props.dataForm.errors.errors;

    return (
        <div className={`${props.field.input.classNameDiv} form-group m-0`}>
            <label
                htmlFor={props.field.label.htmlFor}
                className={props.field.label.classNameLabel}
            >
                {props.field.label.content}
            </label>
            <input
                className={`${props.field.input.classNameInput} form-control`}
                type={props.field.input.type === "password"
                    ? props.showPass
                        ? "text" : "password"
                    : props.field.input.type
                }
                name={props.field.input.name}
                id={props.field.input.id}
                placeholder={props.field.input.placeholder ? props.field.input.placeholder : ""}
                ref={props.field.input.ref}
                onChange={props.dataForm.onChange}
            />
            {props.field.input.type === "password"
                ? <div>
                    <i className={`far fa-eye ${props.field.input.name} text-dark`} data-id={props.field.input.name}></i>
                    <i className={`far fa-eye-slash ${props.field.input.name} d-none text-dark`} data-id={props.field.input.name}></i>
                </div>
                : ""
            }
            <p className={props.field.input.classNameInputError}>
                {
                    errors && errors.length
                        ? errors.map( (error, i) => {
                            return (
                                error.field === props.field.label.htmlFor
                                ? <i className={`fas fa-exclamation-circle ml-3`} key={i}>{"  "}{error.message}</i>
                                : ""
                            )
                            })
                        : " "
                }
            </p>
        </div>
    );
}

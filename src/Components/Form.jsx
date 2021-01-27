import React from 'react';
import Input from './Input';
import { showPasswords } from "../javascript/form";

export default function Form(props) {

    showPasswords();

    const mode = props.switchMode === "ligth"
        ? "btn-primary"
        : props.switchMode === undefined
            ? "btn-primary"
            : "btn-dark";

    return (
        <div className={props.dataForm.class.classNameInputContentAbsolut}>
            <div className="text-white">
                <div className={props.dataForm.class.classNameInputCardHeader}>
                    {props.dataForm.action}
                </div>
                <div className={props.dataForm.class.classNameInputCardBody}>
                    <p
                        className={`text-danger h5 ${props.showError ? "" : "d-none"}`}
                    >
                        Error!
                    </p>
                    <form onSubmit={props.dataForm.onSubmit}>
                        {
                            props.dataForm.fields.map( (field,i) => {
                                return (
                                        <Input
                                            key={i}
                                            field={field}
                                            dataForm={props.dataForm}
                                            showPass={props.showPass}
                                            switchMode={props.switchMode}
                                        />
                                );
                            })
                        }
                        <button
                            type="submit"
                            className={`btn ${mode}
                                mx-auto text-uppercase mt-4`}
                        >
                            {props.dataForm.buttonContent}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

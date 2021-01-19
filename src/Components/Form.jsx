import React from 'react';
import Input from './Input';


export default function Form(props) {

    return (
        <div className={props.dataForm.class.classNameInputContentAbsolut}>
            <div className="text-white">
                <div className={props.dataForm.class.classNameInputCardHeader}>
                    {props.dataForm.action}
                </div>
                <div className={props.dataForm.class.classNameInputCardBody}>
                    <form onSubmit={props.dataForm.onSubmit}>
                        {
                            props.dataForm.fields.map( (field,i) => {
                                return (
                                        <Input
                                            key={i}
                                            field={field}
                                            dataForm={props.dataForm}
                                            showPass={props.showPass}
                                        />
                                );
                            })
                        }
                        <button
                            type="submit"
                            className="btn btn-primary mx-auto text-uppercase mt-4"
                        >
                            {props.dataForm.buttonContent}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

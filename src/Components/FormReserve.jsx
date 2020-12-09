import React from "react";
import functions from "../functions";
import Input from "./Input";
import Select from "./Select";

export default function FormReserve(props) {

    const dataInputs = functions.dataInputs(props);
    const dataSelect = functions.dataSelect(props);

    return (
        <form
        className="row form-reservar px-5"
        onSubmit={props.handleSubmit(props.onSubmit)}
        >
            {
                dataSelect.map( select => {
                    return (
                        <Select {...select} />
                    )
                })
            }
            {
                dataInputs.map(input => {
                    return <Input {...input}/>
                })
            }
            <div className="col-12 text-right">
                <button
                    className="btn btn-danger"
                    data-dismiss="modal"
                >
                    Cerrar
                </button>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </div>
        </form>
    );
}

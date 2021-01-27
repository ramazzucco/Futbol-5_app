import React from "react";
import { showCardBody } from "../javascript/cardPage";

//Components.
import Input from "./Input";
import Select from "./Select";

export default function CardPage(props) {

    const handleShowCardBody = (e) => {
        showCardBody(e, props.setDataPost);
    }

    const textcolor = props.switchMode === "ligth" ? "text-dark" : "text-white";

    return (
        <div className="col-12 col-md-6 col-lg-6 cardPage canchasYhorarios p-5">
            <div className={props.data.class.classNameCard}>
                <div className={props.data.class.classNameCardHeader}>
                    <div className="row justify-content-around align-items-center contentHeader">
                        <span>{props.data.content}</span>
                        <span className={`font-weight-bold ${textcolor}`}>{props.data.dataPage}</span>
                        <button
                            className="btn btn-sm btn-outline-light"
                            name={props.data.card}
                            onClick={handleShowCardBody}
                        >
                            Cambiar
                        </button>
                    </div>
                </div>
                <div className={props.data.class.classNameCardBody + " " + props.data.card}>
                    <form onSubmit={props.data.onSubmit}>
                        {props.data.component.map((field) => {
                            return (
                                    field.type === "input"
                                    ?<Input
                                        field={field}
                                        dataForm={{
                                            onChange: field.onChange,
                                            errors: field.errors,
                                        }}
                                    />
                                    : <Select field={field} />
                            );
                        })}
                        <div className="d-flex justify-content-end mt-4 cardPageButtons">
                            <button
                                className="btn btn-sm btn-primary text-capitalize mx-2"
                                type="submit"
                            >
                                enviar
                            </button>
                            <button
                                className="btn btn-sm btn-danger text-capitalize mx-2"
                                type="button"
                                onClick={handleShowCardBody}
                                data-action="cancelar"
                                name={props.data.card}
                            >
                                cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

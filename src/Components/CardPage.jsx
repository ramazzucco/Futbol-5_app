import React from "react";

//Components.
import Input from "./Input";
import Select from "./Select";

export default function CardPage(props) {

    const handleShowCardBody = (e) => {
        const buttonClicked = e.target.textContent;
        const cancelButton = document.querySelector(".cardPage .card-body .btn-danger");
        const inputs = document.querySelectorAll(".cardPage .card-body input");
        const cardBody = document.querySelectorAll(".cardPage .card-body");

        if(buttonClicked === "Cambiar"){
            const buttonName = e.target.attributes.name.value

            cardBody.forEach( card => {
                if(card.className.includes(buttonName)){
                    card.classList.toggle("d-none")
                }
            })
        } else {
            const buttonName = e.target.attributes.name.value

            cardBody.forEach( card => {
                if(card.className.includes(buttonName)){
                    card.classList.toggle("d-none")
                }
            })

            if(cancelButton && cancelButton.getAttribute("data-action") === "cancelar"){
                inputs.forEach( input => {
                    input.value = ""
                })
                props.setDataPost([]);
            }
        }
    }

    return (
        <div className="col-12 col-md-6 col-lg-6 cardPage canchasYhorarios p-5">
            <div className={props.data.class.classNameCard}>
                <div className={props.data.class.classNameCardHeader}>
                    <div className="row justify-content-around align-items-center contentHeader">
                        <span>{props.data.content}</span>
                        <span className="font-weight-bold text-dark">{props.data.dataPage}</span>
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

import React from "react";

export default function Select(props) {

    const select = props.field.select;
    const options = props.field.options[0];

    return (
        <div className={`${select.classNameDiv} form-group m-0`}>
            {
                props.field.label
                    ? (
                        <label
                            htmlFor={props.field.label.htmlFor}
                            className={props.field.label.classNameLabel}
                        >
                            {props.field.label.content}
                        </label>
                    )
                    : ""
            }
            <select
                className={select.classNameSelect}
                name={select.name}
                id={select.id}
                ref={select.ref}
                onChange={props.field.onChange}
            >
                <option selected disabled>
                    Seleccione una opcion
                </option>
                {
                    props.dataForm && props.dataForm.title === "new reserve"
                        ? props.field.options.map((option,i) => {
                            const index = i;
                            return (
                                typeof option[0] === "object"
                                    ? option.map( (object,i) => {
                                        return (
                                            object.reservado === true
                                                ? <option
                                                    className={`horarioOption d-none cancha${index + 1} text-danger`}
                                                    value={""}
                                                    key={i}
                                                >
                                                    Reservado
                                                </option>
                                                : <option
                                                    className={`horarioOption d-none cancha${index + 1}`}
                                                    value={object.horario}
                                                    key={i}
                                                >
                                                    {object.horario}
                                                </option>
                                        )
                                    })
                                    : option.map( (string, i) => {
                                        return (
                                            <option value={string} key={i}>
                                                Cancha N° {string}
                                            </option>
                                        )
                                    })
                            )
                        })
                        : props.field.options.map( (option, i) => {
                            return (
                                <option value={option} key={i}>
                                    {option}
                                </option>
                            )
                        })
                }
            </select>
        </div>
    );
}

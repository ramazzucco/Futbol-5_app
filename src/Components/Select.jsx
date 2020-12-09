import React from "react";

export default function Select(props) {
    return (
        <div className="col-sm-12 col-md-6 form-group">
            <label htmlFor={props.htmlFor} className="col-form-label">
                {props.label}
            </label>
            <select
                className="form-control"
                id={props.id}
                name={props.name}
                ref={props.register(props.validacion)}
                onChange={props.selectCancha}
            >
                <option value="">Seleccionar</option>
                {
                   props.data.map((d,i) => {
                       if(props.name === "cancha"){
                           return(
                            <option value={d[i].canchaN === true ? 1 : d[i].canchaN} key={i}>
                                {`Cancha N°  ${d[i].canchaN === true ? 1 : d[i].canchaN}`}
                            </option>
                           )
                       } else {
                           return (
                            d.reservado === true
                                ? <option className="text-danger"
                                        value=""
                                        disabled key={i}
                                >
                                        Reservado
                                </option>
                                : <option value={d.hora} key={i}>{d.hora}</option>
                           )
                       }
                   })
                }
            </select>
            <span className="text-danger text-small d-block mb-2">
                {
                    props.errors ? props.errors.message : ""
                }
            </span>
        </div>
    );
}

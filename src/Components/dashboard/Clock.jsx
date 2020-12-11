import React from "react";

export default function clock(props) {

    return (
        <div
            className={`contador_cancha id${props.id} bg-success mx-3 mb-3 rounded justify-content-center shadow-lg`}
            id={`contador${props.id}`}
        >
            <div className="d-flex text-center bg-dark text-white rounded-top p-2 justify-content-center">
                <h5 className="mb-0 mr-2">
                    Cancha N° {props.id}
                </h5>
                {/* <button
                    className="btn btn-white btn-sm rounded-circle p-0 text-dark my-auto"
                    data-toogle="tooltips"
                    title="Click para agregar minutos."
                >
                    <i
                        class="fas fa-plus p-1"
                        idCancha={props.id}
                        onClick={props.addMinutes}
                    ></i>
                </button> */}
            </div>
            <p className="content text-center text-uppercase font-weight-bold h3 p-2">Libre</p>
            <span className={`text-center h3 p-2 hora timer d-none`}></span>
            <span className={`text-center h3 p-2 minutos timer d-none`}></span>
            <span className={`text-center h3 p-2 segundos timer d-none`}></span>
            {/* <div className={`addMinutes addMinutes${props.id} bg-dark d-none`}>
                <input
                    className="value w-50 bg-dark text-success text-center border-dark-green"
                />
                <input
                    type="button"
                    value="Agregar"
                    className="w-50 bg-dark text-white button"
                    idCancha={props.id}
                    onClick={props.setAddMinutes}
                />
            </div> */}
        </div>
    );
}

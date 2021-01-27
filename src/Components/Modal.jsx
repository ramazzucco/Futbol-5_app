import React from 'react';
import { modalStyle, close} from "../javascript/modal";

export default function Modal() {

    return (
        <div className="card modal-info d-none text-white mb-3" style={modalStyle} id="modal">
            <div className="card-header text-uppercase text-center"></div>
            <div className="card-body p-5"></div>
            <div className="card-footer text-center justify-content-around">
                <button
                    className="btn btn-sm card-button text-uppercase px-5 mr-5"
                    // onClick={handlerOnClick}
                ></button>
                 <button
                    className="card-button text-uppercase btn btn-sm btn-danger px-5 ml-5"
                    onClick={close}
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}

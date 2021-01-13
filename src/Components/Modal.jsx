import React from 'react';

export default function Modal() {

    const modalStyle = {
        minWidth: "230px",
        position: "absolute",
        top: "50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        zIndex: "10"
    }

    const handlerOnClick = () => {

    }

    const close = () => {
        const card = document.querySelector(".modal-info");
        const header = document.querySelector(".modal-info .card-header");
        const body = document.querySelector(".modal-info .card-body");
        const footer = document.querySelector(".modal-info .card-footer");
        const button = document.querySelector(".modal-info .card-button");

        card.classList.value = "card modal-info d-none text-white mb-3";
        header.classList.value = "card-header text-uppercase text-center";
        body.classList.value = "card-body p-5";
        footer.classList.value = "card-footer text-center";


        if(button.className.includes("d-none")){
            button.classList.toggle("d-none");
        }
    }

    return (
        <div className="card modal-info d-none text-white mb-3" style={modalStyle} id="modal">
            <div className="card-header text-uppercase text-center"></div>
            <div className="card-body p-5"></div>
            <div className="card-footer text-center justify-content-around">
                <button
                    className="btn btn-sm card-button text-uppercase px-5 mr-5"
                    onClick={handlerOnClick}
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

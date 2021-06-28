import React from "react";
import { gEbID, qS, qSall } from "../../functions";

export default function Reservemodal() {

    const cancel = () => {

        const modal = qS('.modal-reserve');
        const image = qS('.modal-reserve .image img');
        const title = qS('.modal-reserve .title h1');
        const button = qS('.modal-reserve .button button');

        qS('.reserve-modal-container').classList.toggle('d-flex');

        if(title.className.includes('text-danger')){
            qS('.container-modalreserve').classList.toggle('d-none');
        }else{
            qS('body').classList.toggle('overflow-hidden');

            gEbID('field').options.selectedIndex = 0
            gEbID('shedule').options.selectedIndex = 0;

            qSall('select').forEach( select => {
                if(select.className.includes('border-danger')){
                    select.classList.remove('border-danger');
                }
            })
            qSall('input').forEach( input => {
                if(input.className.includes('border-danger')){
                    input.classList.remove('border-danger');
                    input.innerHTML = '';
                }
            })
        }

        modal.classList.value = 'modal-reserve w-50 shadow rounded bg-light p-5 position-relative';
        image.setAttribute('src','');
        title.classList.value = 'text-center';
        button.classList.value = 'btn w-50';

        if(!qS('.form_reserve button.loading').className.includes('d-none')){
            qS('.form_reserve button.loading').classList.toggle('d-none');
            qS('.form_reserve button.submit').classList.toggle('d-none');
        }
    }

    return (
        <div
            className="d-none reserve-modal-container justify-content-center align-items-center position-absolute"
            style={{
                left: "0",
                width: "100%",
                height: "100vh",
                zIndex: "1040",
                background: "rgba(0,0,0,.3)",
            }}
        >
            <div className="modal-reserve w-50 shadow rounded bg-light p-5 position-relative">
                <div className="title">
                    <h1 className='text-center'>Modal</h1>
                </div>
                <div className="image d-flex justify-content-center">
                    <img src="" width="50%" alt='' />
                </div>
                <div className="content mt-4 d-flex flex-column align-items-center"></div>
                <div className="button col-12 d-flex justify-content-center mt-4">
                    <button className="btn w-50" onClick={cancel}>
                        Salir
                    </button>
                </div>
            </div>
        </div>
    );
}

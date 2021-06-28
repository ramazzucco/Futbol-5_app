import React from 'react';
import { qS } from '../../functions';
import './modal.css';

export default function Modal(props) {

    const closeModal = () => {

        qS('.container-modalinfo').classList.toggle('d-none');

        const div = qS('.modal-info div');

        div.classList.value = 'modal-info';
        div.setAttribute('style','');

        qS('.modal-info header').classList.value = '';
        qS('.modal-info header i').classList.value = '';
        qS('.modal-info header p').classList.value = '';
        qS('.modal-info header p').innerHTML = '';

        qS('.modal-info section').classList.value = '';
        qS('.modal-info section p').classList.value = '';
        qS('.modal-info section p').innerHTML = '';
        qS('.modal-info section div').classList.value = '';
        qS('.modal-info section button').classList.value = 'cancel';
        qS('.modal-info section button.other-action').classList.value = 'other-action d-none';

    }

    return (
        <div className="container-modalinfo position-sticky d-none">
            <div className={`modal-info`}>
                <div className=''>
                    <header className=''>
                        <i className=''/>
                        <p className=''></p>
                    </header>
                    <section className=''>
                        <p className=''></p>
                        <div className=''>
                            <button
                                className='cancel'
                                onClick={closeModal}
                            >
                                Cancelar
                            </button>
                            <button className='other-action d-none'></button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

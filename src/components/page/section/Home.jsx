import React from 'react';
import { qS } from '../../../functions';

export default function Home(props) {

    const handleModal = () => {
        qS('body').classList.toggle('overflow-hidden');
        qS(".container-modalreserve").classList.toggle("d-none");
    }

    return (
        <React.Fragment>
             <div className="reserve d-flex justify-content-center align-items-end rounded px-4 my-5" id="home">
                    <button
                        className="btn btn-success col-12 col-md-8 col-lg-6 text-capitalize mb-5 py-3"
                        data-toggle="modal"
                        data-target="#formreserve"
                        onClick={handleModal}
                    >
                        reservar cancha
                    </button>
            </div>
            <div className="maincontent">
                <hr className="mx-auto w-50 bg-info shadow-lg"/>
                <div className="content my-3">
                    <p className="text-center p-5">
                        {props.data.text}
                    </p>
                    <hr className="mx-auto w-50 bg-info shadow-lg"/>
                    <div className="auspiciantes d-flex flex-wrap justify-content-around my-5">
                        <h1 className='text-center w-100 mb-5'>Nuestros sponsors</h1>
                        {
                            props.data.sponsors.map( (sponsor,i) => {
                                return (
                                    <div className={`${sponsor.name} mb-5`} key={i}>
                                        <img className="img-fluid shadow-lg" src={sponsor.url} alt={sponsor.name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

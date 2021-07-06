import React from "react";

// Components.
import Gallery from "../gallery/Gallery";

export default function Facilities(props) {
    return (
        <div className="page" id="instalaciones">
            <h1 className="text-center my-5 title border-bottom border-secondary pb-3">
                Nuestras Instalaciones
            </h1>
            <div className="row content">
                <div className="col-12 px-5 textContent">
                    <div className="imagesHome col-md-12 col-lg-8 p-0 mb-md-5 mb-lg-0">
                        {
                            props.data.images.length
                                ? <Gallery images={props.data.images} section={props.data.section}/>
                                : ''
                        }
                    </div>
                    <div className="Canchas">
                        <h5 className="text-info">Canchas</h5>
                        <p>{props.data.fields}</p>
                    </div>
                    <div className="Vestuarios">
                        <h5 className="text-info">Vestuarios</h5>
                        <p>{props.data.changingrooms}</p>
                    </div>
                    <div className="Parrillas y Bar">
                        <h5 className="text-info">Parrillas y Bar</h5>
                        <p>{props.data.grillsandbar}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

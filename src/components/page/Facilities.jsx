import React from "react";

export default function Facilities(props) {
    return (
        <div className="page" id="instalaciones">
            <h1 className="text-center mb-5 title border-bottom border-secondary pb-3">
                Nuestras Instalaciones
            </h1>
            <div className="row content">
                <div className="col-12 px-5 textContent">
                    <div className="imagesHome col-md-8 col-lg-8 p-0">
                        {props.data.images.length
                            ? props.data.images.map((image, i) => {
                                  return (
                                      <img
                                          key={i}
                                          className="col-md-5 col-lg-3 p-0"
                                          src={image.url}
                                          alt={image.name}
                                      />
                                  );
                              })
                            : ""}
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

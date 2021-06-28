import React from "react";

export default function School(props) {
    return (
        <div className="page" id="escuelita">
            <h1 className="text-center mb-5 title border-bottom border-secondary pb-3">
                Escuelita de Futbol Infantil
            </h1>
            <div className="row content">
                <div className="images-header col-12 px-5">
                    <div className="imagesHome col-md-8 col-lg-8 p-0">
                        {props.data.schoolImage.length
                            ? props.data.schoolImage.map((image, i) => {
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
                    {props.data.school}
                </div>
            </div>
        </div>
    );
}

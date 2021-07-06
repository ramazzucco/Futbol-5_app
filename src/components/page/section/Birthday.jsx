import React from "react";

// Components.
import Gallery from "../gallery/Gallery";

export default function Birthday(props) {
    return (
        <div className="page" id="cumpleaños">
            <h1 className="text-center my-5 title border-bottom border-secondary pb-3">
                Festeja tu cumpleaños con nosotros
            </h1>
            <div className="row content">
                <div className="images-header col-12 px-5">
                    <div className="imagesHome col-md-12 col-lg-8 p-0 mb-md-5 mb-lg-0">
                        {
                            props.data.birthdaysImage.length
                                ? <Gallery images={props.data.birthdaysImage} section={props.data.section} />
                                : ''
                        }
                    </div>
                    {props.data.birthdays}
                </div>
            </div>
        </div>
    );
}

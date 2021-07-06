import React, { useCallback, useEffect, useState } from "react";
import { qS, qSall } from "../../../functions";
import "./gallery.css";

export default function Gallery(props) {
    const [slideIndex, setSlideindex] = useState(1);

    const showSlides = useCallback((n) => {
        let i;
        const slides = qSall(`.gallery.${props.section} .mySlides`);
        const dots = qSall(`.gallery.${props.section} .demo`);
        const captionText = qS(`.gallery.${props.section} #caption`);

        if (n > slides.length) setSlideindex(1);
        if (n < 1) setSlideindex(slides.length);

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    },[props.section, slideIndex]);

    useEffect(() => {
        showSlides(slideIndex);
    }, [props.images, slideIndex, showSlides]);

    return (
        <div className={`container p-0 px-md-4 gallery ${props.section}`}>
            {/* <!-- Full-width images with number text --> */}
            {props.images.map((img) => {
                return (
                    <div className="mySlides">
                        <div className="numbertext bg-rgba3 rounded">
                            {img.id} / {props.images.length}
                        </div>
                        <img
                            src={img.url}
                            style={{ width: "100%" }}
                            alt={img.name}
                        />
                    </div>
                );
            })}

            {/* <!-- Next and previous buttons --> */}
            <span
                className="prev text-success"
                onClick={() => setSlideindex(slideIndex - 1)}
            >
                &#10094;
            </span>
            <span
                className="next text-success"
                onClick={() => setSlideindex(slideIndex + 1)}
            >
                &#10095;
            </span>
            {/* <!-- Image text --> */}
            <div className="caption-container mb-5 mb-md-0">
                <p id="caption"></p>
            </div>

            {/* <!-- Thumbnail images --> */}
            <div className="row">
                {props.images.map((img) => {
                    return (
                        <div className="column">
                            <img
                                className="demo cursor"
                                src={img.url}
                                style={{ width: "100%" }}
                                onClick={() => setSlideindex(img.id)}
                                alt={img.name}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

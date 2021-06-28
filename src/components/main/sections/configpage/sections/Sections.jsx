import React, { useState } from "react";

//Components.
import Home from "./Home";
import Facilities from "./Facilities";
import Birthday from "./Birthday";
import School from "./School";
import Promotions from "./Promotions";

export default function Sections(props) {
    const [subnavactive, setSubnavactive] = useState("home");

    return (
        <div
            className={`sections col-12 ${
                props.active === "Sections" ? "" : "d-none"
            }`}
        >
            <div className="header pl-3 d-flex flex-wrap align-items-center bg-third">
                {props.data.titles.map((title, i) => {
                    return (
                        <button
                            key={i}
                            className={`mb-0 px-2 py-1 px-md-4 py-md-2 bg-transparent
                                    ${
                                        subnavactive === title
                                            ? "text-second font-weight-bold border-second"
                                            : "text-first border-0"
                                    }`}
                            onClick={() => setSubnavactive(title)}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>

            <Home
                home={props.data.home}
                admin={props.admin}
                subnavactive={subnavactive}
            />
            <Facilities
                facilities={props.data.facilities}
                admin={props.admin}
                subnavactive={subnavactive}
            />
            <Birthday
                birthdays={{
                    text: props.data.birthdays,
                    images: props.data.birthdaysImage
                }}
                admin={props.admin}
                subnavactive={subnavactive}
            />
            <School
                school={{
                    text: props.data.school,
                    images: props.data.schoolImage
                }}
                admin={props.admin}
                subnavactive={subnavactive}
            />
            <Promotions
                promotions={props.data.promotions.data}
                admin={props.admin}
                subnavactive={subnavactive}
            />
        </div>
    );
}

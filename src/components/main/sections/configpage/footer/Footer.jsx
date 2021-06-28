import React, { useState } from 'react';

// Components.
import Socialnetworks from './Socialnetworks';
import Contact from './Contact';

export default function Footer(props) {

    const [subnavactive, setSubnavactive] = useState("social networks");

    return (
        <div className={`footer col-12 ${props.active === 'Footer' ? '' : 'd-none'}`}>
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

            <Socialnetworks
                socialnetworks={props.data.socialnetworks}
                admin={props.admin}
                subnavactive={subnavactive}
            />

            <Contact
                contact={props.data.contact}
                admin={props.admin}
                subnavactive={subnavactive}
            />
        </div>
    )
}

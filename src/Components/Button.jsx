import React from 'react';

export default function Button(props) {

    return (
        <React.Fragment>
            <button
                className={props.className}
                type={props.type}
                data-submenu={props.subMenu}
                data-toggle={props.datatoggle}
                aria-label={props.arialabel}
                onClick={props.onClick}
                title={props.title}
            >
                {props.content}
                {props.icon}
            </button>
                {
                    props.subButtons
                        ? <div className={`subMenu d-none ${props.title}`}>
                            {
                                props.subButtons.map( (btn, i) => {
                                    return (
                                        <button
                                            key={i}
                                            className={btn.className}
                                            type={btn.type}
                                            data-toggle={btn.datatoggle}
                                            data-submenu={btn.subMenu}
                                            aria-label={btn.arialabel}
                                            onClick={btn.onClick}
                                            title={btn.title}
                                        >
                                            {btn.content}
                                            {btn.icon}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        : ""
                }
        </React.Fragment>
    )
}

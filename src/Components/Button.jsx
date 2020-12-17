import React from 'react'

export default function Button(props) {
    return (
        <button
            className={props.className}
            type={props.type}
            data-toggle={props.datatoggle}
            data-target={props.datatarget}
            aria-controls={props.ariacontrols}
            aria-expanded={props.ariaexpanded}
            aria-label={props.arialabel}
            onClick={props.onClick}
            title={props.title}
        >
            {props.content}
            {props.icon}
        </button>
    )
}

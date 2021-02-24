import React from 'react'

//Components.
import Input from './Input';
import Select from "./Select";
import Textarea from './Textarea';

export default function Form(props) {

    const form = props.form.form;
    const buttonsForm = props.form.buttons ? props.form.buttons : "";

    return (
        <form
            encType={form.enctype}
            method={form.method}
            className={form.className}
            onSubmit={form.onSubmit}
            style={form.style}
            id={form.id}
        >
            {
                props.form.components.map( (component, i) => {
                    return (
                        component.componentName === "input"
                            ? component.textarea
                                ? <Textarea dataTextarea={component} key={i} />
                                : <Input dataInput={component} key={i} />
                            : <Select dataSelect={component} key={i} />
                    )
                })
            }
            <div className={props.form.class.buttons}>
                {
                    buttonsForm.map( (button, i) => {
                        return (
                            <button
                                key={i}
                                type={button.type}
                                className={button.className}
                                onClick={button.onClick}
                                id={button.id}
                            >
                                {button.title}
                            </button>
                        )
                    })
                }
            </div>
        </form>
    )
}

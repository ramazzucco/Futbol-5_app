import React from 'react'

export default function Textarea(props) {
    const textarea = props.dataTextarea;

    return (
        <div className={textarea.classNameDiv}>
             {
                textarea.label
                    ? <label
                        className={textarea.label.classNameLabel}
                        htmlFor={textarea.label.htmlFor}
                    >
                        {textarea.label.title}
                    </label>
                    : ""
            }
            <textarea
                type={textarea.type}
                className={textarea.classNameTextarea}
                name={textarea.name}
                id={textarea.id}
                onChange={textarea.onChange}
                placeholder={textarea.placeholder}
                disabled={textarea.disabled ? textarea.disabled : false}
                rows={textarea.rows}
            />
            <p className="datapage textarea d-none">{textarea.data}</p>
            <div className="col-12 errors textarea p-0" id={`error${textarea.errorid}`} ></div>
        </div>
    )
}

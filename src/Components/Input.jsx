import React from 'react'

export default function Input(props) {

    const input = props.dataInput;

    return (
        <div className={input.classNameDiv}>
            {
                input.label
                    ? <label
                        className={input.label.classNameLabel}
                        htmlFor={input.label.htmlFor}
                    >
                        {input.label.title}
                    </label>
                    : ""
            }
            {
                input.type === "file"
                    ? <img
                        className={input.classNameFile}
                        src={input.file.url}
                        alt={input.file.name}
                    />
                    : ""
            }
            <input
                type={input.type}
                className={input.classNameInput}
                name={input.name}
                id={input.id}
                onChange={input.onChange}
                placeholder={input.placeholder}
                disabled={input.disabled ? input.disabled : false}
            />
            {input.type === "password"
                ? <div className="w-100 col-12">
                    <i
                        className={input.classNameIconShowPass}
                        data-id={input.id}
                    ></i>
                    <i
                        className={input.classNameIconHidePass}
                        data-id={input.id}
                    ></i>
                </div>
                : ""
            }
            <p className="datapage input d-none">{input.data}</p>
            <div className="col-12 errors input p-0" id={`error${input.errorid}`} ></div>
        </div>
    )
}

import React from 'react'

export default function Select(props) {

    const select = props.dataSelect;

    return (
        <div className={select.classNameDiv}>
            {
                select.label
                    ? <label
                        className={select.label.classNameLabel}
                        htmlFor={select.label.htmlFor}
                    >
                        {select.label.title}
                    </label>
                    : ""
            }
            <select
                className={select.classNameSelect}
                name={select.name}
                id={select.id}
                onChange={select.onChange}
            >
                {
                    select.options.map( (option, i) => {
                        return (
                            <option
                                key={i}
                                className={option.className}
                                value={option.value}
                                selected={option.selected}
                                disabled={option.disabled}
                            >
                                {option.title}
                            </option>
                        )
                    })
                }
            </select>
            <div
                className={`col-12 errors select ${select.name === "accion" ? "main" : ""} p-0`}
                id={`error${select.errorid}`}
            ></div>
        </div>
    )
}

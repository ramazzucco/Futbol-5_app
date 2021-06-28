import React from "react";

export default function Text(props) {
    return (
        <div className={`${props.data.title} pb-0 pt-4 px-4`}>
            <label
                className="text-third text-capitalize"
                htmlFor={props.data.title}
            >
                {props.data.title}
            </label>
            <textarea
                name={props.data.title}
                id={props.data.title}
                rows="2"
                className="col-12 px-4 py-2 text-third bg-transparent"
                value={props.data.value}
                onChange={props.data.handlerChange}
            />
            <div className={`error w-100 ${props.data.title}`}></div>
            <div className="button col-12 align-items-center justify-content-end p-0">
                <button
                    dataid={props.data.title}
                    className="btn-rm btn-second"
                    onClick={props.data.changeFunction}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

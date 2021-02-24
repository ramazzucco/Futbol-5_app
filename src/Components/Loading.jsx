import React from 'react'

export default function Loading(props) {

    const textcolor = props.switchMode === "ligth" ? "text-dark" : "text-white";

    return (
        <div className="d-flex justify-content-center w-100">
            <div className={
                `${props.loading.reservesOfTheDay ? "d-flex" : "d-none"}
                flex-column justify-content-center align-items-center p-5`
                }
            >
                <div className={`spinner-border text-success mx-auto`} role="status"></div>
                <h4 className={`mt-3 mx-auto ${textcolor}`}>
                    {props.loading.reservesOfTheDay ? `Cargando. . . ` : ""}
                </h4>
            </div>
        </div>
    )
}

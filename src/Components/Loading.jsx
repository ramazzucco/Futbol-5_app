import React from 'react'

export default function Loading(props) {
    return (
        <div className={
            `${props.loading.reservesOfTheDay ? "d-flex" : "d-none"}
            flex-column justify-content-center align-items-center p-5`
            }
        >
            <div className={`spinner-border text-success`} role="status"></div>
            <h4 className="mt-3">
                {props.loading.reservesOfTheDay ? `Cargando. . . ` : ""}
            </h4>
        </div>
    )
}

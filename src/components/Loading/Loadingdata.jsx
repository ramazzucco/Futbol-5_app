import React from 'react'

export default function Loadingdata() {
    return (
        <div className="col-12 text-center text-third">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="title">
                <p>Loading ...</p>
            </div>
        </div>
    )
}

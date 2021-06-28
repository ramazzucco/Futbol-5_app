import React from 'react'

export default function Loadinginfo() {
    return (
        <div
            id='loading-info'
            className='d-none position-sticky'
            style={{
                top: `${window.scrollY}`,
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '1000'
            }}
        >
            <div className='loading-card col-9 col-sm-8 col-md-6 col-lg-4 shadow p-5 bg-second'>
                <div className="spinner-container d-flex justify-content-center">
                    <div
                        className="spinner-grow text-third"
                        role="status"
                    >
                    </div>

                    <div
                        className="spinner-grow text-third mx-4"
                        role="status"
                    >
                    </div>

                    <div
                        className="spinner-grow text-third"
                        role="status"
                    >
                    </div>
                </div>
                <div className="title mt-4">
                    <p className='font-weight-bold text-center mb-0 letter-space-1 text-third'>
                        Cargando...
                    </p>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'

// Components.
import Loadingdata from '../../../Loading/Loadingdata'

export default function Clocks(props) {

    const [ reserves, setReserves ] = useState([])

    useEffect(() => {
        if(!reserves.length){
            setReserves(props.reserves)
        }
    },[props.reserves,reserves])

    return (
        <React.Fragment>
            {
                reserves.length
                    ? reserves.map( (field, i) => {
                        return (
                            <div key={i} className={`clock n${field.number} bg-third d-flex flex-wrap align-items-center text-first shadow mb-4`}>
                                <div className="icon p-2">
                                    <i className="fas fa-stopwatch fa-2x"></i>
                                </div>
                                <div className="time text-truncate d-flex flex-column justify-content-center">
                                    <p className='mb-0 text-center'>
                                        Cancha N° 1
                                    </p>
                                    <div className='d-flex justify-content-center'>
                                        <span className='hour font-weight-bold display-4'>
                                            00
                                        </span>
                                        <span className='font-weight-bold display-4'>
                                            :
                                        </span>
                                        <span className='minutes font-weight-bold display-4'>
                                            15
                                        </span>
                                        <span className='font-weight-bold display-4'>
                                            :
                                        </span>
                                        <span className='seconds font-weight-bold display-4'>
                                            33
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : <Loadingdata />
            }
        </React.Fragment>
    )
}

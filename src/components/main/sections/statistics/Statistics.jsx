import React from 'react';
import { hideMenu } from '../../../../functions';

export default function Statistics(props) {
    return (
        <div className="statistics section bg-first p-4" onClick={hideMenu}>
            <div className="title col-12 text-left text-third">
                <h5>
                    Statistics
                </h5>
                <hr className='bg-third w-100 mx-auto mt-2' />
            </div>
            <div className="content px-4 d-flex flex-wrap align-items-start justify-content-start">
            </div>
        </div>
    )
}

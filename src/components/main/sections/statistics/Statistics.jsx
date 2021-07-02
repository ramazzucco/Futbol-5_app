import React, { useCallback, useEffect, useState } from 'react';
import { hideMenu, urlapi } from '../../../../functions';

// Components.
import Fields from './fields/Fields';
import Shedules from './shedules/Shedules';
import Amounts from './amounts/Amounts';

export default function Statistics(props) {

    const [ charts, setCharts ] = useState({})

    const getCharts = useCallback(async () => {
        if(!charts.fields){
            const url = `${urlapi}/reserves/charts`;
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(props.admin),
            };

            const request = await fetch(url, options);
            const response = await request.json();

            if(response && response.data) setCharts(response.data);
        }
    },[props.admin,charts])

    useEffect(() => {
        if(!charts.fields) getCharts();
    },[charts, getCharts])

    return (
        <div className="statistics section bg-first p-2 p-sm-4" onClick={hideMenu}>
            <div className="title col-12 px-0 px-sm-3 text-left text-third">
                <h5>
                    Statistics
                </h5>
                <hr className='bg-third w-100 mx-auto mt-2' />
            </div>
            <div className="content px-0 px-sm-4 d-flex flex-wrap align-items-start justify-content-between">
                <Amounts admin={props.admin} />
                <Fields charts={charts.fields} />
                <Shedules charts={charts.shedules} />
            </div>
        </div>
    )
}

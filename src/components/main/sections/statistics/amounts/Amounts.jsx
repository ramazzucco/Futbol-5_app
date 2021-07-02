import React, { useCallback, useEffect, useState } from 'react';
import './amounts.css';

// Components.
import Loadingdata from '../../../../Loading/Loadingdata';
import { urlapi } from '../../../../../functions';

export default function Amounts(props) {

    const [ finance, setFinance ] = useState({})

    const getFinance = useCallback(async () => {
        if(!finance.income){
            const url = `${urlapi}/finance/`;
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(props.admin),
            };

            const request = await fetch(url, options);
            const response = await request.json();

            if(response && response.data) setFinance(response.data);
        }
    },[props.admin, finance])

    useEffect(() => {
        getFinance();
    },[finance, getFinance])

    return (
        <div className='col-12 col-md-6 col-lg-2 d-flex flex-wrap flex-lg-column justify-content-between'>
            {
                finance.income
                    ? (
                        <React.Fragment>
                            <div className="income col-12 px-0 d-flex flex-column align-items-center bg-first-contrast mb-4 shadow">
                                <div className="title bg-success text-third text-center w-100 p-1">
                                    <p className='mb-1 font-weight-bold'>Income</p>
                                </div>
                                <div className="amount d-flex align-items-center p-3 text-third">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                    </svg>
                                    <p className="mb-1">{finance.income.toLocaleString()}.-</p>
                                </div>
                            </div>
                            <div className="debt col-12 px-0 d-flex flex-column align-items-center bg-first-contrast mb-4 shadow">
                                <div className="title bg-danger text-third text-center w-100 p-1">
                                    <p className='mb-1 font-weight-bold'>Debt</p>
                                </div>
                                <div className="amount d-flex align-items-center p-3 text-third">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                    </svg>
                                    <p className="mb-1">{finance.debt.toLocaleString()}.-</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                    : <Loadingdata />
            }
        </div>
    )
}

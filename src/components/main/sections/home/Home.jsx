import React, { useEffect, useState } from "react";
import { hideMenu } from "../../../../functions";
import './home.css';

// Components.
import Field from "./Field";
import Clock from "./Clock";
import Loadingdata from "../../../Loading/Loadingdata";
import Loadinginfo from "../../../Loading/Loadinginfo";

export default function Home(props) {

    const [ reserves, setReserves ] = useState([])

    useEffect(() => {
        if(!reserves.length) setReserves(props.reserves);
    },[props.reserves,reserves])

    return (
        <div className='home section d-flex flex-wrap justify-content-center align-items-end bg-first' onClick={hideMenu}>

            <Loadinginfo />

            <div className="clocks col-12 d-flex flex-wrap justify-content-around align-items-center">
                {
                    reserves.length
                        ? props.reserves.map( (field,i ) => {
                            return (
                                <Clock
                                    key={i}
                                    number={field.number}
                                    reserves={field.options}
                                />
                            )
                        })
                        : <Loadingdata />
                }
            </div>
            <div className="reserves col-12 d-flex flex-wrap justify-content-around align-items-center">
                {
                    reserves.length
                        ? props.reserves.map( (field, i) => {
                            return (
                                <Field
                                    key={i}
                                    field={field}
                                    admin={props.admin}
                                    refresh={props.refresh}
                                    setRefresh={props.setRefresh}
                                    history={props.history}
                                    checkReserve={props.checkReserve}
                                />
                            )
                        })
                        : ''
                }
            </div>
        </div>
    );
}

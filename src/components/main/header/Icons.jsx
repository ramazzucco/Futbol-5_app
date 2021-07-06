import React, { useEffect, useState } from "react";

export default function Icons(props) {

    const [ online, setOnline ] = useState("green")
    const [ hours, setHours ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)
    const [ seconds, setSeconds ] = useState(0)

    window.ononline = () => {
        setOnline("green");
    };
    window.onoffline = () => {
        setOnline("red");
    };

    useEffect(() => {
        if(hours === 0){
            setInterval(() => {
                const date = new Date();
                const gethours = date.getUTCHours();
                const getminutes = date.getUTCMinutes();
                const getseconds = date.getUTCSeconds();

                setHours(gethours > 9 ? gethours : `0${gethours}`);
                setMinutes(getminutes > 9 ? getminutes : `0${getminutes}`);
                setSeconds(getseconds > 9 ? getseconds : `0${getseconds}`);
            }, 1000);
        }
    }, [hours, minutes, seconds])

    return (
        <div className="icons-header col-4 col-md-3 pb-2 pb-md-0 px-0 pr-3 d-flex justify-content-end align-items-center">
            <i className="fas fa-user-circle d-flex flex-row-reverse align-items-center">
                <p className="mb-0 mr-2">{props.admin.name}</p>
                <div className="time flex-column shadow">
                    <div className="clock">
                        <i className="fas fa-clock mr-2"></i>
                        <span className="hours">
                            {hours}
                        </span>
                        <span className="minutes">
                            :{minutes}:
                        </span>
                        <span className="seconds">
                            {seconds}
                        </span>
                    </div>
                    <div className="data mt-3">
                        <p className='text-rgba3 font-weight-light'>
                            session started at {props.admin.time ? props.admin.time : 'Yesterday!'}
                        </p>
                        <p className='text-rgba3 font-weight-light'>
                            no messages!
                        </p>
                    </div>
                </div>
            </i>
            <i className="fas fa-power-off ml-4" style={{ color: online }}></i>
        </div>
    );
}

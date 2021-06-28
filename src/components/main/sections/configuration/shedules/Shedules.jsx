import React, { useEffect, useState } from "react";
import { modal, urlapi } from "../../../../../functions";

export default function Shedules(props) {

    const [shedules, setShedules] = useState({ shedules: [] });
    const [hoursoftheday, setHoursoftheday] = useState([]);
    const [hoursondb, setHoursondb] = useState([]);

    useEffect(() => {
        if(props.reserves && props.reserves.length) setHoursondb(props.reserves[0].options.map((option) => option.shedule));
    }, [props.reserves]);

    useEffect(() => {
        const hours = [];

        for (let i = 9; i < 25; i++) {
            i < 10 ? hours.push(`0${i}:00`) : hours.push(`${i}:00`);
        }

        setHoursoftheday(hours);
    }, []);

    const handlerChange = (e) => {
        hoursondb.includes(e.target.attributes.data.value)
            ? setHoursondb(hoursondb.filter( shedule => shedule !== e.target.attributes.data.value))
            : setHoursondb([...hoursondb, e.target.attributes.data.value]);

        hoursondb.includes(e.target.attributes.data.value)
            ? setShedules({shedules: shedules.shedules.filter( shedule => shedule !== e.target.attributes.data.value)})
            : setShedules({shedules: [...shedules.shedules, e.target.attributes.data.value]});
    };

    const submit = async (e) => {
        if(shedules.shedules.length){
            const url = `${urlapi}/reserves/shedules`;
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...props.admin,
                    shedules: { shedules: [...new Set(shedules.shedules)]},
                }),
            };

            const request = await fetch(url, options);
            const response = await request.json();

            console.log(response);

            if (response && !response.error) {
                setHoursondb(response.data[0].options.map((option) => option.shedule));
                setShedules({ shedules: [] });
                modal("successful", "Enhorabuena !", response.message);
            }else{
                if(!response.session) modal('failed','Lo sentimos',response.message);
            }
        }
    }

    return (
        <div className="shedules col-12 col-md-6 p-0 d-flex flex-column justify-content-center bg-first-contrast shadow mb-4 mb-md-0">
            <p className='title p-2 mb-0 bg-third text-second text-center'>
                Available shedules
            </p>
            <ul className='mt-2 mb-0 ml-3 px-5 d-flex flex-wrap'>
                <li className='text-third mr-5'>hours on data base</li>
                <li className='text-fourth'>hours of the day</li>
            </ul>
            <div className="hoursoftheday d-flex flex-wrap justify-content-start p-5">
                {hoursoftheday.map((hours, i) => {
                    return (
                        <button
                            className={`hours py-2 px-4 col-4 col-lg-3 border-third ${
                                hoursondb.includes(hours) ? "db" : ""
                            }`}
                            key={i}
                            id={`shedule${i}`}
                            data={hours}
                            onClick={handlerChange}
                            title={hoursondb.includes(hours) ? 'click to remove' : 'click to add'}
                        >
                            {hours}
                        </button>
                    );
                })}
            <button onClick={submit} className={`btn-rm btn-second col-10 mx-auto mt-4 ${shedules.shedules.length ? '' : 'd-none'}`}>
                Send
            </button>
            </div>
        </div>
    );
}

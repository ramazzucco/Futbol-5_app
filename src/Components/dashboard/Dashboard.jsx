import React, { useEffect, useState } from 'react';
import functions from "../../functions";
import mainFunctions from "../../mainFunctions";
import { initClock, rememberClocks, getRememberClocks } from "../../javascript/clock";
import {getInfo} from "../../javascript/constantes";

//Components
import Main from './Main';
import Header from './Header';
import Clock from "../Clock";

export default function Dashboard(props) {

    const [reserves, setReserves] = useState([]);
    const [reservesOfTheDay, setReservesOfTheDay] = useState([]);
    const [loading, setLoading] = useState({reserves: true, reservesOfTheDay: true});
    const [showClock,setShowClock] = useState("");
    const [time, setTime] = useState("");

    const path = window.location.pathname;

    useEffect(() => {

        if(path !== "/"){
            setShowClock("hide");
        } else {
            setShowClock("show");
        }

        if(loading.reserves && loading.reservesOfTheDay){
            mainFunctions.getCanchaYhorario(loading, setLoading, setReserves, setReservesOfTheDay, props.admin)
        } else {
            setLoading({reserves: false, reservesOfTheDay: false})
        }

        // const clocksSaved = getRememberClocks();

        // if(clocksSaved !== null){
        //     console.log(clocksSaved);
        // }

    }, [reservesOfTheDay]);

    useEffect(() => {

        const refreshTime = setInterval(() => {
            clearInterval(refreshTime)
            const newTime = functions.getDate().time;
            setTime(newTime);
        }, 1000);

        if(!loading.reserves && !loading.reservesOfTheDay){

            reservesOfTheDay.forEach( reserve => {

                const reserveTime = reserve.horario.slice(0,5) + ":00";

                if(reserveTime === time){
                    initClock(reserve.cancha);
                }

            })
        }

        if(time === "21:15"){
            mainFunctions.reset(props.admin);
        }

    }, [time]);

    return (
        <div className="row hidemenu">
            <Header
                time={time}
                admin={props.admin}
            />
            <div className={`clock-conatiner ${showClock} justify-content-around row w-100 my-5`}>
                <div className="wrapper rounded ml-4">
                    {reserves.map((cancha,i) => {
                        return (
                            <Clock  cancha={i + 1} key={i} />
                        )
                    })}
                </div>
            </div>
                <Main
                    time={time}
                    loading={loading}
                    reserves={reserves}
                    admin={props.admin}
                    setShowClock={setShowClock}
                    reservesOfTheDay={reservesOfTheDay}
                    setReservesOfTheDay={setReservesOfTheDay}
                    handlerLogout={mainFunctions.handlerLogout}
                    cancelarReserva={mainFunctions.cancelarReserva}
                    showInfoReserve={mainFunctions.showInfoReserve}
                    getCanchaYhorario={mainFunctions.getCanchaYhorario}
                    paramGetCanchaYhorario={[loading, setLoading, setReserves, setReservesOfTheDay]}
                />
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import functions from "../../functions";
import { getCanchaYhorario, reset, handlerLogout, deleteReserve } from "../../javascript/servicesApi";
import { showInfoReserve, shortCut, handleOverflow } from "../../javascript/dashboard";
import { initClock, getRememberClocks } from "../../javascript/clock";

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

    useEffect( async () => {

        if(path !== "/"){
            setShowClock("hide");
        } else {
            setShowClock("show");
        }

        if(loading.reserves && loading.reservesOfTheDay){
           await getCanchaYhorario(loading, setLoading, setReserves, setReservesOfTheDay, props.admin)
        } else {
            await setLoading({reserves: false, reservesOfTheDay: false})
        }

        const rememberClocks = getRememberClocks();

        if(rememberClocks && rememberClocks.length){
            initClock("", rememberClocks)
        }

    }, [reservesOfTheDay]);

    useEffect(() => {

        const refreshTime = setInterval(() => {
            clearInterval(refreshTime)
            const newTime = functions.getDate().time;
            setTime(newTime);
        }, 1000);

        if(!loading.reserves && !loading.reservesOfTheDay && !reservesOfTheDay[0].error){
            reservesOfTheDay.forEach( reserve => {

                const reserveTime = reserve.horario.slice(0,5) + ":00";

                if(reserveTime === time){
                    initClock(reserve.cancha);
                }

            })
        }

        if(time === "21:15:00"){
            reset(props.admin, setReserves);
        }

    }, [time]);

    shortCut();

    handleOverflow(path);

    return (
        <React.Fragment>
        <Header
            time={time}
            admin={props.admin}
            switchMode={props.switchMode}
        />
        <div className="row hidemenu main">
            <div className={`clock-Conatiner ${showClock} justify-content-around row`}>
                <div className={`wrapper rounded ml-4`}>
                    {reserves.map((cancha,i) => {
                        return (
                            <Clock
                                cancha={i + 1}
                                key={i}
                                switchMode={props.switchMode}
                            />
                        )
                    })}
                </div>
            </div>
                <Main
                    time={time}
                    loading={loading}
                    reserves={reserves}
                    admin={props.admin}
                    switchMode={props.switchMode}
                    setSwitchMode={props.setSwitchMode}
                    showPass={props.showPass}
                    setAdmin={props.setAdmin}
                    setShowClock={setShowClock}
                    reservesOfTheDay={reservesOfTheDay}
                    setCreateAdmin={props.setCreateAdmin}
                    setReservesOfTheDay={setReservesOfTheDay}
                    handlerLogout={handlerLogout}
                    cancelarReserva={deleteReserve}
                    showInfoReserve={showInfoReserve}
                    getCanchaYhorario={getCanchaYhorario}
                    paramGetCanchaYhorario={[loading, setLoading, setReserves, setReservesOfTheDay]}
                />
        </div>
        </React.Fragment>
    )
}

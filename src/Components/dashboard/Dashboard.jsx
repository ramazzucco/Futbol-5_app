import React, { useEffect, useState } from 'react';
import functions from "../../functions";
import mainFunctions from "../../mainFunctions";
import {getInfo} from "../../javascript/constantes";

//Components
import DashboardHeader from './DashboardHeader';
import DashboardMain from './DashboardMain';

export default function Dashboard() {

    const [reserves, setReserves] = useState([]);
    const [reservesOfTheDay, setReservesOfTheDay] = useState([]);
    const [loading, setLoading] = useState({reserves: true, reservesOfTheDay: true});
    const [time, setTime] = useState("");

    
    useEffect(() => {
        loading.reserves && loading.reservesOfTheDay
        ? mainFunctions.getCanchaYhorario(loading, setLoading, setReserves, setReservesOfTheDay)
        : console.log("Cargando reservas y reservas del dia...");

        loading.reserves && loading.reservesOfTheDay
        ? alert(getInfo())
        : console.log("")

        loading.reserves && loading.reservesOfTheDay
        ? console.log("loading: true")
        : mainFunctions.searchReserve(reservesOfTheDay);
    }, [loading]);

    useEffect(() => {
        const refreshTime = setInterval(() => {
            clearInterval(refreshTime)
            const newTime = functions.getDate().time;
            setTime(newTime);
        }, 1000);
 
        if(time === "14:45"){
            const refreshData = setInterval(() => {
                clearInterval(refreshData)
                mainFunctions.getCanchaYhorario(loading, setLoading, setReserves, setReservesOfTheDay);
                loading.reserves && loading.reservesOfTheDay
                    ? console.log("loading: true")
                    : mainFunctions.searchReserve(reservesOfTheDay);
            }, 1000 * 60 * 5);
        }

        if(time === "21:15"){
            mainFunctions.reset();
        }

    }, [time]);


    return (
            <div className="Container">
                <DashboardHeader
                    time={time}
                    reserves={reserves}
                    getCanchaYhorario={mainFunctions.getCanchaYhorario}
                    paramGetCanchaYhorario={[loading, setLoading, setReserves, setReservesOfTheDay]}
                />
                <DashboardMain
                    loading={loading}
                    reserves={reserves}
                    reservesOfTheDay={reservesOfTheDay}
                    cancelarReserva={mainFunctions.cancelarReserva}
                    showInfoReserve={mainFunctions.showInfoReserve}
                    // addMinutes={mainFunctions.addMinutes}
                    // setAddMinutes={mainFunctions.setAddMinutes}
                />
            </div>
    )
}

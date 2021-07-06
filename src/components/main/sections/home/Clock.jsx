import React, { useEffect, useState } from "react";
import { qS } from "../../../../functions";

export default function Clock(props) {
    const [ number, setNumber ] = useState(0);
    const [ start, setStart ] = useState(false)
    const [ stop, setStop ] = useState(false)
    const [ pause, setPause ] = useState(false)
    const [ clock,setClock ] = useState('')
    const [ minutes, setMinutes ] = useState(null)
    const [ seconds, setSeconds ] = useState(null)
    const [ clockpausedon, setClockpausedon ] =useState({})
    const [ commands, setCommands ] = useState(false)

    useEffect(() => {
        if (number === 0) setNumber(props.number);
    }, [props.number, number]);

    useEffect(() => {
        if(number === props.number && minutes !== null && minutes !== 0){
            window.onunload = () => {
                const hours = qS('.header .icons-header .time .clock .hours').innerHTML;
                localStorage.setItem(`clock${number}`,JSON.stringify({ hours: hours, minutes: minutes, seconds: seconds }));
            }
        }
    },[props.number, minutes, seconds, number])

    useEffect(() => {
        const getsavedclock = JSON.parse(localStorage.getItem(`clock${number}`));
        const date = new Date();
        const currenthours = date.getUTCHours();

        if(getsavedclock && getsavedclock.minutes !== null && getsavedclock.minutes !== 0){
            if(Number(getsavedclock.hours) === currenthours){
                setMinutes(getsavedclock.minutes);
                setSeconds(getsavedclock.seconds);
                setStart(true);
            }else{
                localStorage.removeItem(`clock${number}`)
            }
        }
    },[number])

    useEffect(() => {
        if(props.reserves){
            const date = new Date();
            const currenthours = date.getUTCHours();

            props.reserves.forEach( reserve => {
                const reservedhours = Number(reserve.shedule.slice(0,2));

                if(reserve.field === number && reserve.reserved && reservedhours === currenthours && !qS(`.clock.n${number}`).className.includes('show')){
                    setStart(true);
                }
            })
        }
    },[props.reserves, number])

    useEffect(() => {
        minutes !== null && seconds !== null && !stop
            ? setClock(`${minutes > 9 ? minutes : `0${minutes}`} : ${seconds !== null ? seconds > 9 ? seconds : `0${seconds}` : '00'}`)
            : setClock('00 : 00');
    },[minutes, seconds, stop])

    useEffect(() => {
        if(start){

            if(stop){
                setMinutes(0);
                setSeconds(0);
            }

            const intervalClock = setInterval(() => {
                if(seconds === null){
                    setMinutes(59);
                    setSeconds(59);
                }else{
                    if(minutes > 0){
                        if(seconds > 0) setSeconds(seconds - 1);
                        if(seconds === 0){
                            setSeconds(59);
                            setMinutes(minutes - 1);
                        }
                    }else{
                        if(seconds > 0) setSeconds(seconds - 1);
                        if(seconds === 0) setSeconds(0);
                    }
                }
                clearInterval(intervalClock);
            }, 1000);

            if(stop || pause) clearInterval(intervalClock);

            setCommands(true);
        }

        if(start && qS(`.clock.n${number}`) && !qS(`.clock.n${number}`).className.includes('show')){
            qS(`.clock.n${number}`).classList.toggle("show");
        }

        if(!start && qS(`.clock.n${number}`).className.includes('show')){
            qS(`.clock.n${number}`).classList.toggle("show");
        }
    },[start, stop, pause, minutes, seconds, number])

    const stopClock = () => {
        setStop(true);
        setClock('00 : 00');
    }

    const pauseClock = () => {
        setPause(!pause);

        if(pause){
            setMinutes(clockpausedon.minutes);
            setSeconds(clockpausedon.seconds);
        }else{
            setClockpausedon({minutes: minutes, seconds: seconds});
        }
    }

    const addMinutes = () => {
        if(minutes === 0 && seconds === 0){
            setStop(false);
            setMinutes(4);
            setSeconds(59)
        }else{
            setMinutes(minutes + 5);
        }
    }

    const hideClock = () => {
        if(clock === null || '00 : 00') setStart(false); setCommands(false);
    }

    return (
        <div className={`clock n${number} bg-third d-flex flex-wrap align-items-center text-first mb-4`}>
            <div className="icon p-2">
                <i
                    className="fas fa-stopwatch fa-2x"
                    onClick={() => setStart(true)}
                    title='click to start an hour'
                ></i>
            </div>
            <div className="time text-truncate d-flex flex-column justify-content-center">
                <p className="mb-0 text-center">Cancha N° {number}</p>
                <div className="d-flex justify-content-center">
                    <span className="seconds font-weight-bold display-4">
                        {clock}
                    </span>
                </div>
            </div>
            <div className={`commands ${commands ? 'd-flex' : 'd-none'} flex-column`}>
                <i className='fas fa-stop p-1' onClick={stopClock} title='stop'></i>
                <i className='fas fa-pause p-1' onClick={pauseClock} title='pause'></i>
                <i className="fas fa-plus-square p-1" onClick={addMinutes} title='add 5 minutes'></i>
                <i className="fas fa-arrow-left p-1" onClick={hideClock} title='hide'></i>
            </div>
        </div>
    );
}

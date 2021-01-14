import { countDown } from "../functions";

const initClock = (cancha) => {

    const clockCube = document.querySelector(`.clock${cancha}`);
    const clockFront = document.querySelector(`.clock${cancha} .cube-front`);
    const clockBack = document.querySelector(`.clock${cancha} .cube-back`);

    if(clockFront !== null && clockBack !== null){
        clockCube.classList.add("init");
        clockFront.classList.add("cube-front-before");
        clockBack.classList.add("cube-back-before");
    }

    countDown(cancha, 1, 0, 0);

};

let timers = [];

const rememberClocks = () => {

    timers = [];

    const clocks = document.querySelectorAll(".cube-wrapper");

    clocks.forEach( (clock, i) => {

        const hora = clock.querySelector(".hora").innerHTML;
        const minutos = clock.querySelector(".minutos").innerHTML;
        const segundos = clock.querySelector(".segundos").innerHTML;

        if(hora !== null && minutos !== null && segundos !== null){

            timers = [...timers,{
                clock: (i + 1),
                hora: hora,
                minutos: minutos,
                segundos: segundos
            }]

        }

    })

    const timersJSON = JSON.stringify(timers);
    localStorage.setItem("clocks",timersJSON);
}

const getRememberClocks = () => {
    const timers = JSON.parse(localStorage.getItem("clocks"));
    console.log(timers)
    return timers;
}

export {
    initClock,
    rememberClocks,
    getRememberClocks
}
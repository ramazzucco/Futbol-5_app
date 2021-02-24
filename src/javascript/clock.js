const countDown = (cancha, paramHora, paramMinutos, paramSegundos, stop) => {

    let hora = paramHora;
    let minutos = paramMinutos;
    let segundos = paramSegundos;

    const conteo = setInterval(() => {

        const clock = cancha;
        const timer = document.querySelector(`.clock${cancha}`);

        const showHora = document.querySelector(`.clock${clock} .hora`);
        const showMinutos = document.querySelector(`.clock${clock} .minutos`);
        const showSegundos = document.querySelector(`.clock${clock} .segundos`);


        if(showHora !== null && showMinutos !== null && showSegundos !== null){

            showHora.innerHTML = hora === 1 ? `0${hora}` : `${hora}${hora}`;
            showMinutos.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
            showSegundos.innerHTML = segundos < 10 ? `0${segundos}` : segundos;

            if(hora > 0){
                hora = 0
                minutos = 59
            } else {
                if(minutos !== 0 && segundos === 0){
                    minutos--
                }
            }

            if(segundos === 0){
                segundos = 59
            }

            if(showHora.innerText === "00" && showMinutos.innerText === "00" && showSegundos.innerText === "00"){
                clearInterval(conteo);
                document.querySelector(`.clock${cancha} .cube-front`).classList.remove("cube-front-before");
                document.querySelector(`.clock${cancha} .cube-back`).classList.remove("cube-back-before");
            }

            if(timer.className.includes("stop")){

                clearInterval(conteo);

                showHora.innerHTML = "";
                showMinutos.innerHTML = "";
                showSegundos.innerHTML = "";

            }

            if(timer.className.includes("pause")){
                clearInterval(conteo);
            }

            segundos--

        }

    }, 1000)


};

const initClock = (cancha, timers) => {

    if(timers){

        timers.forEach( timer => {
            const clockCube = document.querySelector(`.clock${timer.clock}`);
            const clockFront = document.querySelector(`.clock${timer.clock} .cube-front`);
            const clockBack = document.querySelector(`.clock${timer.clock} .cube-back`);

            if(timer.segundos !== ""){
                if(clockFront !== null && clockBack !== null){
                    clockCube.classList.add("init");
                    clockFront.classList.add("cube-front-before");
                    clockBack.classList.add("cube-back-before");
                }

                countDown(timer.clock, timer.hora, timer.minutos, timer.segundos);
            }
        })

    }

    if(cancha !== ""){
        const clockCube = document.querySelector(`.clock${cancha}`);
        const clockFront = document.querySelector(`.clock${cancha} .cube-front`);
        const clockBack = document.querySelector(`.clock${cancha} .cube-back`);

        if(clockFront !== null && clockBack !== null){
            clockCube.classList.add("init");
            clockFront.classList.add("cube-front-before");
            clockBack.classList.add("cube-back-before");
        }

        countDown(cancha, 1, 0, 0);

    }

};

let timers = [];

const rememberClocks = () => {

    timers = [];

    const clocks = document.querySelectorAll(".cube-wrapper");

    clocks.forEach( (clock, i) => {

        const hora = clock.querySelector(".hora").innerHTML;
        const minutos = clock.querySelector(".minutos").innerHTML;
        const segundos = clock.querySelector(".segundos").innerHTML;
        clock.classList.add("init");

        if(hora !== null && minutos !== null && segundos !== null){

            timers = [...timers,{
                clock: (i + 1),
                hora: Number(hora) === 0 ? 0 : hora,
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
    return timers;
}

const commands = () => {
    const clockTitle = document.querySelectorAll(".cube-back p");
    const commandsButtons = document.querySelectorAll(".cube-back .fas");

    clockTitle.forEach( (title, i) => {
        title.onclick = () => {
            document.querySelector(`.clock${title.innerHTML[10]} .commands`).classList.toggle("d-none")
        }
    })

    commandsButtons.forEach( (button, i) => {
        const id = button.getAttribute("id");
        const clock = document.querySelector(`.clock${id}`);
        const stop = document.querySelector(`.clock${id} .commands .fa-stop`);
        const pause = document.querySelector(`.clock${id} .commands .fa-pause`);
        const arrowback = document.querySelector(`.clock${id} .commands .fa-arrow-left`);

        if(clock.className.includes("init")){
            stop.classList.remove("text-muted");
            stop.classList.add("text-danger");
            pause.classList.remove("text-muted");
            pause.classList.add("text-warning");
            arrowback.classList.add("d-none");
        }

        // STOP.
        if(button.className.includes("stop")){
            button.onclick = () => {
                const hora = document.querySelector(`.clock${id} .hora`);
                const minutos = document.querySelector(`.clock${id} .minutos`);
                const segundos = document.querySelector(`.clock${id} .segundos`);

                if(clock.className.includes("pause")){
                    clock.classList.remove("pause");

                    hora.innerHTML = ""
                    minutos.innerHTML = ""
                    segundos.innerHTML = ""
                }

                clock.classList.add("stop");
                clock.classList.remove("init");

                stop.classList.remove("text-danger");
                stop.classList.add("text-muted");
                pause.classList.remove("text-warning");
                pause.classList.add("text-muted");
                arrowback.classList.remove("d-none");

            }
        }

        // PAUSE.
        if(button.className.includes("pause")){
            button.onclick = () => {
                const hora = document.querySelector(`.clock${id} .hora`);
                const minutos = document.querySelector(`.clock${id} .minutos`);
                const segundos = document.querySelector(`.clock${id} .segundos`);

                if(clock.className.includes("pause")){
                    clock.classList.remove("pause");

                    countDown(id, Number(hora.innerHTML), Number(minutos.innerHTML), Number(segundos.innerHTML))

                    hora.classList.remove("text-muted");
                    minutos.classList.remove("text-muted");
                    segundos.classList.remove("text-muted");
                    button.classList.remove("text-muted");
                    button.classList.add("text-warning");

                } else {
                    clock.classList.add("pause");

                    hora.classList.add("text-muted");
                    minutos.classList.add("text-muted");
                    segundos.classList.add("text-muted");
                    button.classList.remove("text-warning");
                    button.classList.add("text-muted");
                }

            }
        }

        // ADD.
        if(button.className.includes("plus")){
            const hora = document.querySelector(`.clock${id} .hora`);
            const minutos = document.querySelector(`.clock${id} .minutos`);
            const segundos = document.querySelector(`.clock${id} .segundos`);

            button.onclick = () => {
                if(clock.className.includes("stop")){
                    clock.classList.remove("stop");
                }

                countDown(id, 0, 15, 0);

                if(hora.className.includes("text-muted") && minutos.className.includes("text-muted")
                    && hora.className.includes("text-muted")){
                        hora.classList.remove("text-muted");
                        minutos.classList.remove("text-muted");
                        segundos.classList.remove("text-muted");
                    }

                stop.classList.remove("text-muted");
                stop.classList.add("text-danger");
                pause.classList.remove("text-muted");
                pause.classList.add("text-warning");
                arrowback.classList.add("d-none");
            }

        }

        // BACK.
        if(button.className.includes("arrow-left")){
            button.onclick = () => {
                document.querySelector(`.clock${id} .cube-back`).classList.remove("cube-back-before");
                document.querySelector(`.clock${id} .cube-front`).classList.remove("cube-front-before");
            }
        }
    })

}

const showClockOff = () => {
    const iconclock = document.querySelectorAll(".cube-front i");

    iconclock.forEach( (icon, i) => {
        icon.onclick = () => {
            const clockFront = document.querySelector(`.clock${i+1} .cube-front`);
            const clockBack = document.querySelector(`.clock${i+1} .cube-back`);

            clockFront.classList.toggle("cube-front-before");
            clockBack.classList.toggle("cube-back-before");
        }
    })
}

const body = document.querySelector("body");

body.onunload = () => {

    rememberClocks();

}

export {
    initClock,
    rememberClocks,
    getRememberClocks,
    countDown,
    commands,
    showClockOff,
}
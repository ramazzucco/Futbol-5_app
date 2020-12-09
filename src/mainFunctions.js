const functions = require("./functions");

const initClock = (id) => {
    console.log("Corriendo funcion startClock...");
    const contador = document.querySelector(`.contador_cancha.id${id}`);
    const contentClock = document.querySelector(
        `.contador_cancha.id${id} .content`
    );
    const clock = document.querySelectorAll(`.contador_cancha.id${id} .timer`);
    contentClock.classList.toggle("d-none");
    clock.forEach((t) => {
        t.classList.toggle("d-none");
    });
    functions.colorStart(contador);
    functions.countDown(id, 0);
};

const reSet = () => {
    const data = {
        cancha: "",
        horario: "",
        reservado: "reset",
        reserveId: "",
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(`${functions.urlBase}/reserves/modify`, options)
        .then((res) => res.json())
        .then((response) => {
            console.log("modifyReserve-response: ", response);
        });
};

module.exports = {

    getCanchaYhorario: (loading,setLoading,setReserves,setReservesOfTheDay) => {
        fetch(`${functions.urlBase}/reserves/canchaYhorario`)
            .then((res) => res.json())
            .then((response) => {
                if (response) {
                    setLoading({
                        reserves: false,
                        reservesOfTheDay: loading.reservesOfTheDay,
                    });
                    setReserves(response.data);
                } else {
                    setLoading({
                        reserves: true,
                        reservesOfTheDay: loading.reservesOfTheDay,
                    });
                    console.log(response);
                }
                fetch(`${functions.urlBase}/reserves/reservesoftheday`)
                    .then((res) => res.json())
                    .then((response) => {
                        if (response) {
                            setReservesOfTheDay(response.data);
                            setLoading({
                                reserves: loading.reserves,
                                reservesOfTheDay: false,
                            });
                            response.meta.reserves === 0
                                ? reSet()
                                : console.log(
                                      `Reservas del dia: ${response.meta.reserves}`
                                  );
                        } else {
                            setLoading({
                                reserves: loading.reserves,
                                reservesOfTheDay: true,
                            });
                            console.log("No hay datos de las reservas.");
                        }
                    });
            });
    },

    showInfoReserve: (e) => {
        const idInfo = e.target.attributes[1].nodeValue;
        const info = document.querySelector(`.reserve_info.id${idInfo}`);
        info
            ? info.classList.toggle("d-none")
            : console.log("No hay info de reserva");
    },

    cancelarReserva: (e) => {
        console.log(e.target);
        const data = JSON.parse(e.target.attributes[3].nodeValue);
        const cancelar = window.confirm(
            `Esta seguro que desea cancelar la reserva Cancha N° ${data.cancha} - Horario ${data.horario}`
        );
        console.log(cancelar);
        if (cancelar) {
            const info = document.querySelector(`.reserve_info.id${data.reserveId}`);
            const domElementReserve = document.querySelector(
                `.reserve.id${data.reserveId}`
            );
            domElementReserve.innerHTML = `${data.horario}: Libre`;
            domElementReserve.classList.remove("bg-danger");
            domElementReserve.classList.add("bg-success");
            info.innerHTML = "";
            info.classList.toggle("d-none")
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(`${functions.urlBase}/reserves/modify`, options)
                .then((res) => res.json())
                .then((response) => {
                    console.log("modifyReserve-response: ", response);
                });
        }
    },

    reset: () => {
        reSet();
    },

    startClock: (id) => {
        initClock(id);
    },

    searchReserve: (reservesOfTheDay) => {
        console.log("Corriendo funcion searchReserve...");
        console.log("Hora actual ==>>>", functions.getDate().time.slice(0, 5));
        reservesOfTheDay.forEach((reserve, i) => {
            console.log(`Buscando Reservas...`, reserve)
            const timeNow = functions.getDate().time.slice(0,5);
            const remainTimeToReserve = functions.setClockStart(reserve.horario);
            if(remainTimeToReserve < 0 && reserve.horario.slice(0,5) === timeNow ){
                setTimeout(() => {
                    initClock(reserve.cancha);
                }, remainTimeToReserve)
            }
        });
    },

    // addMinutes: (e) => {
    //     const idCancha = e.target.attributes[1].nodeValue;
    //     const addMinutes = document.querySelector(`.addMinutes${idCancha}`);
    //     addMinutes.classList.toggle("d-none");
    //     console.log(e.target.attributes)
    // },

    // setAddMinutes: (e) => {
    //     const idCancha = e.target.attributes[2].nodValue;
    //     const addMinutes = document.querySelector(`.addMinutes${idCancha}`);
    //     console.log(addMinutes)
    // }
};

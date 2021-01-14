const functions = require("./functions");
const urlApi = functions.urlApiBase;

const reSet = (admin, setReserves) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    }

    fetch(`${urlApi}/api/reserves/reset`, options)
        .then((res) => res.json())
        .then((response) => {
            setReserves(response.data);
        })
        .catch(error => console.log(error))

};

module.exports = {

    onSubmit: (data, e) => {
        e.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }

        fetch(`${urlApi}/api/reserves/create`, options)
        .then(res => res.json())
        .then(response => {

            if(response.meta.msg === "La Reserva Fue Exitosa!"){
                document.querySelector(".modal-dialog").innerHTML = functions.responseSuccess(response)
            }

            const data = {
                reserveId: response.data.id,
                cancha: response.data.cancha,
                horario: response.data.horario,
                reservado: true
            }

            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }

            fetch(`${urlApi}/api/reserves/modify`, options)
            .then(res => res.json())
            .then(response => response)
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error));

        e.target.reset()

    },

    getCanchaYhorario: (loading,setLoading,setReserves,setReservesOfTheDay,admin) => {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(admin),
        }

        fetch(`${urlApi}/api/reserves/canchaYhorario`,options)
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

                }

                fetch(`${urlApi}/api/reserves/reservesoftheday`,options)
                    .then((res) => res.json())
                    .then((response) => {

                        if (response) {

                            setReservesOfTheDay(response.data);
                            setLoading({
                                reserves: loading.reserves,
                                reservesOfTheDay: false,
                            });

                            if(response.meta.reserves === 0){
                                reSet(admin,setReserves)
                            }

                        } else {

                            setLoading({
                                reserves: loading.reserves,
                                reservesOfTheDay: true,
                            });

                        }
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    },

    showInfoReserve: (e) => {

        const idInfo = e.target.attributes[1].nodeValue;
        const info = document.querySelector(`.reserve_info.id${idInfo}`);

        info
            ? info.classList.toggle("d-none")
            : console.log("No hay info de reserva");
    },

    deleteReserve: (reserve, admin, setData, request) => {
        const params = Array.isArray(reserve) ? 0 : reserve.id;

        const modal = document.querySelector(".card.modal-info");
        const header = document.querySelector(".card.modal-info .card-header");
        const body = document.querySelector(".card.modal-info .card-body");
        const footer = document.querySelector(".card.modal-info .card-footer");
        const buttonCancel = document.querySelector(".card.modal-info .btn-danger");
        const buttonConfirm = document.querySelector(".card.modal-info .card-button");

        if(modal.className.includes("d-none")){
            modal.classList.toggle("d-none");
            buttonConfirm.classList.add("btn-primary");
        }

        header.classList.add("bg-danger");
        header.innerHTML = "eliminar";
        body.classList.add("text-dark");
        footer.classList.remove("bg-primary");
        footer.classList.add("bg-white");
        buttonConfirm.innerHTML = "Si";
        buttonCancel.innerHTML = "No";

        if(Array.isArray(reserve)){
            admin.ids = reserve
            body.innerHTML = `<p>Reservas seleccionadas: "${reserve.map(r=>{return r})}"</p><br><p>Esta seguro que las desea eliminar ?`
        } else {
            body.innerHTML = `<p>Esta seguro que desea eliminar la reserva de ${reserve.name} ${reserve.lastname} ID ${reserve.id}</p><br><p>cancha ${reserve.cancha}, hora ${reserve.horario}Hs. ?`
        }

        buttonConfirm.onclick = () => {

            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(admin),
            };

            fetch(`${urlApi}/api/reserves/delete/${params}`, options)
                .then((res) => res.json())
                .then((response) => {

                    console.log(response)
                    if(request === "reservesoftheday"){
                        const reserveDeleted = document.querySelector(`.horarios .id${reserve.id}`);

                        reserveDeleted.innerHTML = `<p class="text-center m-0">15:00 Hs<span class="pl-3 text-uppercase">Libre</span></p>`
                        reserveDeleted.classList.remove("bg-danger");
                        reserveDeleted.classList.add("bg-success");
                    }

                    setData(response.data)

                    modal.classList.toggle("d-none");

                })
                .catch(error => console.log(error));
        }

    },

    reset: (admin) => {
        reSet(admin);
    },


    sendHistoryReserve: (admin) => {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(admin),
        };

        const card = document.querySelector(".modal-info");
        const header = document.querySelector(".modal-info .card-header");
        const body = document.querySelector(".modal-info .card-body");
        const footer = document.querySelector(".modal-info .card-footer");
        const buttons = document.querySelectorAll(".modal-info .card-button");

        card.classList.toggle("d-none");
        card.classList.add("w-75");
        header.classList.add("bg-primary");
        header. innerHTML = "Send email";
        body.innerHTML = `<div class="d-flex justify-content-center w-100">
            <div class="loading text-center">
                <div class="spinner-border text-success mx-auto" role="status"></div>
                <h4 class="mt-3 text-dark mx-auto">
                    Sending...
                </h4>
            </div>
        </div>`;
        footer.classList.add("bg-primary");
        buttons.forEach( button => {
            button.classList.toggle("d-none");
        })

        fetch(`${urlApi}/api/reserves/sendhistorybyemail`, options)
            .then(res => res.json())
            .then(response => {
                header.classList.remove("bg-primary");
                footer.classList.remove("bg-primary");
                header.classList.add("bg-success");
                body.classList.add("text-dark","text-center")
                body.innerHTML = `<h4>Email sended successfully</h4><p>To</p><h6>${response.data.accepted[0]}</h6>`
                footer.classList.add("bg-success");
                buttons.forEach( button => {
                    button.className.includes("btn-danger")
                        ? button.classList.toggle("d-none")
                        : button.classList.add("d-none")
                })
            })
            .catch(error => console.log(error));
    },

    handlerLogout: (admin) => {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(admin),
        }

        fetch(`${urlApi}/api/admin/logout`, options)
            .then(res => res.json())
            .then(response => window.location.href = response.meta.url)
            .catch(error => console.log(error));
    },

};

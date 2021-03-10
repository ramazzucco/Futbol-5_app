const handleShowInfoReserve = (reserves, deleteReserve, admin, setReservesOfTheDay) => {

    const reservesDOM = document.querySelectorAll(".horarios .bg-danger");

    reservesDOM.forEach( reserve => {
        reserve.onclick = () => {
            const idReserve = reserve.getAttribute("data-id");
            const reserveOnDB = reserves.find(reserve => reserve.id === Number(idReserve));

            if(reserveOnDB){
                const info = `
                <ul class="col-12 col-lg-9 col-xl-8 mx-auto p-0 px-3 m-0 list-unstyled">
                    <li class="p-0 d-flex inline-block">
                        Id: <span class="text-muted ml-auto">${reserveOnDB.id}</span>
                    </li>
                    <li class="d-flex inline-block">
                        Reserva: <span class="text-muted ml-auto">Cancha n° ${reserveOnDB.cancha} - ${reserveOnDB.horario}Hs</span>
                    </li>
                    <li class="d-flex inline-block">
                        Cliente: <span class="text-muted ml-auto">${reserveOnDB.name} ${reserveOnDB.lastname}</span>
                    </li>
                    <li class="d-flex inline-block">
                        Email: <span class="text-muted ml-auto">${reserveOnDB.email}</span>
                    </li>
                    <li class="d-flex inline-block">
                        Telefono: <span class="text-muted ml-auto">${reserveOnDB.telefono}</span>
                    </li>
                </ul>`

                const modal = document.querySelector(".card.modal-info");
                const modalHeader = document.querySelector(".card.modal-info .card-header");
                const modalBody = document.querySelector(".card.modal-info .card-body");
                const modalButtom = document.getElementById("secondaryButton");
                const modalButtomDanger = document.getElementById("cancelButton");

                modal.setAttribute("modal-id","inforeserve");
                modalHeader.innerHTML = "Detalle";
                modalBody.innerHTML = info;
                modalButtom.innerHTML = "eliminar";
                modalButtom.onclick = () => {
                    deleteReserve(reserveOnDB, admin, setReservesOfTheDay,"reservesoftheday");
                }
                modalButtomDanger.innerHTML = "cerrar";
            }
        }
    })

}

export {
    handleShowInfoReserve,
}
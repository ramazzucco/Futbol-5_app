const handleShowInfoReserve = (reserves, deleteReserve, admin, setReservesOfTheDay) => {

    const reservesDOM = document.querySelectorAll(".horarios .bg-danger");

    reservesDOM.forEach( reserve => {
        reserve.onclick = () => {
            const idReserve = reserve.getAttribute("data-id");
            const reserveOnDB = reserves.find(reserve => reserve.id == idReserve);

            if(reserveOnDB){
                const info = `<p>Id: <span class="text-muted">${reserveOnDB.id}</span></p>
                    <p>Reserva: <span class="text-muted">Cancha n° ${reserveOnDB.cancha} - ${reserveOnDB.horario}Hs</span></p>
                    <p>Cliente: <span class="text-muted">${reserveOnDB.name} ${reserveOnDB.lastname}</span></p>
                    <p>Email: <span class="text-muted">${reserveOnDB.email}</span></p>
                    <p>Telefono: <span class="text-muted">${reserveOnDB.telefono}</span></p>`;
                const modal = document.querySelector(".card.modal-info");
                const modalHeader = document.querySelector(".card.modal-info .card-header");
                const modalBody = document.querySelector(".card.modal-info .card-body");
                const modalButtom = document.querySelector(".card.modal-info .card-button");
                const modalButtomDanger = document.querySelector(".card.modal-info .btn-danger");
                const modalFooter = document.querySelector(".card.modal-info .card-footer");
                modalHeader.innerHTML = "Detalle";
                modalHeader.classList.add("bg-primary");
                modalBody.classList.add("text-dark");
                modalBody.innerHTML = info;
                modalFooter.classList.add("bg-primary", "d-flex","justify-content-around");
                modalButtom.innerHTML = "eliminar";
                modalButtom.onclick = () => {
                    deleteReserve(reserveOnDB, admin, setReservesOfTheDay,"reservesoftheday");
                }
                modalButtomDanger.innerHTML = "cerrar"
                modalButtom.classList.add("btn", "btn-sm","btn-info")
                modal.classList.toggle("d-none");
            }
        }
    })

}

export {
    handleShowInfoReserve,
}
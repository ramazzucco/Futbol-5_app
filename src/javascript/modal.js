const close = () => {

    const card = window.document.querySelector(".modal-info");
    const header = window.document.querySelector(".modal-info .card-header");
    const body = window.document.querySelector(".modal-info .card-body");
    const footer = window.document.querySelector(".modal-info .card-footer");
    const button = window.document.querySelector(".modal-info .card-button");

    if(card){

        card.classList.value = "card modal-info d-none text-white mb-3";
        header.classList.value = "card-header text-uppercase text-center";
        body.classList.value = "card-body p-5";
        footer.classList.value = "card-footer text-center";

        if(button.className.includes("d-none")){
            button.classList.toggle("d-none");
        }

    }

}

const modalStyle = {
    minWidth: "230px",
    position: "absolute",
    top: "50%",
    left:"50%",
    transform: "translate(-50%,-50%)",
    zIndex: "10"
}

export {
    close,
    modalStyle,
}
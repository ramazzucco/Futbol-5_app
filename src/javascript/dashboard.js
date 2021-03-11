const showInfoReserve = (e) => {

    const idInfo = e.target.attributes[1].nodeValue;
    const info = document.querySelector(`.reserve_info.id${idInfo}`);

    info
        ? info.classList.toggle("d-none")
        : console.log("No hay info de reserva");
}

const shortCut = () => {

    onkeypress = () => {
    }

}

const handleSwitchMode = (switchMode,setSwitchMode) => {

    window.document.getElementById("root").classList.toggle("dark")
    window.document.getElementById("root").classList.toggle("ligth")

    if(switchMode === "ligth" || switchMode === ""){
        localStorage.setItem("switchMode","dark");
        setSwitchMode("dark")
    } else {
        localStorage.setItem("switchMode","ligth");
        setSwitchMode("ligth");
    }

}

const handleOverflow = (path) => {
    const body = window.document.querySelector("body");
    const divMain = document.querySelector(".main");
    const modal = document.getElementById("modal");

    if(modal){
        const modalID = modal.getAttribute("modal-id");

        if(modalID && modalID !== "" && modalID !== "default"){
            body.classList.remove("overflow-auto");
            body.classList.add("overflow-hidden");

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }

    }

    if(divMain && divMain.clientHeight > window.screen.height){
        const modalID = modal.getAttribute("modal-id");

        if(!modalID || modalID === "default" && body.className.includes("overflow-hidden")){
            body.classList.remove("overflow-hidden");
            body.classList.add("overflow-auto");
        }
    } else {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        body.classList.remove("overflow-auto");
        body.classList.add("overflow-hidden");
    }

    window.onresize = () => {
        if(window.screen.availWidth >= 768){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }
}

export {
    showInfoReserve,
    shortCut,
    handleSwitchMode,
    handleOverflow,
}
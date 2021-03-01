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

    if(switchMode === "ligth"){
        window.document.querySelector("button.mode").innerHTML = "Mode > Dark"
        setSwitchMode("dark")
    } else {
        window.document.querySelector("button.mode").innerHTML = "Mode > Ligth"
        setSwitchMode("ligth");
    }

}

const handleOverflow = (path) => {
    const body = window.document.querySelector("body");
    const width = window.screen.width;

    if(path === "/history" || path === "/configpage"){
        if(body.className.includes("overflow-hidden")){
            body.classList.remove("overflow-hidden");
            body.classList.add("overflow-auto");
        }
    } else {
        if(body.className.includes("overflow-auto")){
            body.classList.remove("overflow-auto");
            body.classList.add("overflow-hidden");
        }
    }

    if(width <= 768 || body.clientWidth <= 768){
        if(body.className.includes("overflow-hidden")){
            body.classList.remove("overflow-hidden");
            body.classList.add("overflow-auto");
        } else {
            if(body.className.includes("overflow-auto")){
                body.classList.remove("overflow-auto");
                body.classList.add("overflow-hidden");
            }
        }
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
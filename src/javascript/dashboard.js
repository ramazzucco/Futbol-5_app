const showInfoReserve = (e) => {

    const idInfo = e.target.attributes[1].nodeValue;
    const info = document.querySelector(`.reserve_info.id${idInfo}`);

    info
        ? info.classList.toggle("d-none")
        : console.log("No hay info de reserva");
}

const shortCut = () => {

    onkeypress = () => {
        console.log(process.argv[0])
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

    if(path === "/history"){
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

}

export {
    showInfoReserve,
    shortCut,
    handleSwitchMode,
    handleOverflow,
}
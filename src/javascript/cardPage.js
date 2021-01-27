const showCardBody = (e, setDataPost) => {

    const buttonClicked = e.target.textContent;
    const cancelButton = document.querySelector(".cardPage .card-body .btn-danger");
    const inputs = document.querySelectorAll(".cardPage .card-body input");
    const cardBody = document.querySelectorAll(".cardPage .card-body");

    if(buttonClicked === "Cambiar"){
        const buttonName = e.target.attributes.name.value

        cardBody.forEach( card => {
            if(card.className.includes(buttonName)){
                card.classList.toggle("d-none")
            }
        })
    } else {
        const buttonName = e.target.attributes.name.value

        cardBody.forEach( card => {
            if(card.className.includes(buttonName)){
                card.classList.toggle("d-none")
            }
        })

        if(cancelButton && cancelButton.getAttribute("data-action") === "cancelar"){
            inputs.forEach( input => {
                input.value = ""
            })
            setDataPost([]);
        }
    }
}

export {
    showCardBody,
}
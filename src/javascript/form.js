const showPasswords = () => {
    const icons = document.querySelectorAll("form .far");

    if(icons){

        icons.forEach(icon => {

            const inputId = icon.getAttribute("data-id");

            icon.onclick = () => {

                const input = document.getElementById(`${inputId}`);
                const type = document.getElementById(`${inputId}`).getAttribute("type");
                const iconsEyes = document.querySelectorAll(`form .far.${inputId}`)

                if(type === "password"){
                    input.setAttribute("type","text")
                } else {
                    input.setAttribute("type","password")
                }

                iconsEyes.forEach( icon => {
                    icon.classList.toggle("d-none");
                })
            }

        })
    }

}

export {
    showPasswords,
}
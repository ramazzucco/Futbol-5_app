const showCardBody = (setDataPost, setShowForm) => {

    const cardsPage = document.querySelectorAll(".card-header");

    if(cardsPage){
            cardsPage.forEach( card => {

                const iconHeaderCard = card.querySelector("i");

                card.onclick = () => {
                    const id = card.getAttribute("id");
                    const carbody = document.querySelector(`.${id} .card-body`);
                    const inputs = document.querySelectorAll("input");
                    const textareas = document.querySelectorAll("textarea");

                    inputs.forEach( (input, i) => {
                        const dataInput = document.querySelectorAll(".datapage.input");

                        dataInput.length > 1
                            ? input.value = dataInput[i].innerHTML
                            : input.value = dataInput[0].innerHTML
                    })

                    textareas.forEach( (textarea, i) => {
                        const dataTextarea = document.querySelectorAll(".datapage.textarea");

                        dataTextarea.length > 1
                            ? textarea.value = dataTextarea[i].innerHTML
                            : textarea.value = dataTextarea[0].innerHTML
                    })

                    iconHeaderCard.classList.toggle("fa-chevron-left");

                    carbody.classList.toggle("d-none");
                }
            });
    }

}

const cancelFormCard = (e, setDataPost) => {
    const idCard = e.target.attributes.id.value;
    const carbody = document.querySelector(`.cardPage.${idCard} .card-body`);
    const formGroup = document.querySelectorAll(`.cardPage.${idCard} .card-body .form-group`);
    const select = document.querySelectorAll(`.cardPage.${idCard} .card-body select`);
    const iconHeaderCard = document.querySelector(`i.${idCard}`);
    const errors = document.querySelectorAll(`.cardPage.${idCard} .errors`);

    setDataPost([]);

    carbody.classList.toggle("d-none");

    iconHeaderCard.classList.toggle("fa-chevron-left");

    if(select[0]){
        if(select.length > 1){
            select.forEach( sel => {
                sel.options.selectedIndex = 0;
            })
        } else {
            select[0].options.selectedIndex = 0;
        }
    }

    if(formGroup){
        formGroup.forEach( group => {
            if(!group.className.includes("main")
                && !group.className.includes("d-none")
                && group.className.includes("secondary")
                || !group.className.includes("main")
                && !group.className.includes("d-none")
                && group.className.includes("terciary")){

                group.classList.toggle("d-none");
            }
        })
    }

    if(errors){
        errors.forEach( error => {
            error.innerHTML = "";
        })
    }
}

const  onFocus = (e, setDataPost, admin, dataPost) => {

    setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value})

}

const handlerChange = (e,setDataPost,admin,dataPost,cardName) => {

    const errorsErease = () => {
        const id = cardName ? cardName : "";
        const error = document.getElementById(`error${e.target.name}${id !== "" ? id : ""}`);

        if(error.innerHTML !== ""){
            error.innerHTML = "";
        }
    }

    errorsErease();

    const canchas = () => {
        const amountofcanchasDB = document.querySelector("#canchas p span");
        const amountofcanchastomodify = e.target.value;

        if(amountofcanchasDB){
            const amountresult = Number(amountofcanchastomodify) - Number(amountofcanchasDB.innerHTML);
            setDataPost({user: admin, [e.target.name]: amountresult});
        }

    }

    const horarios = () => {
        setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value});
    }

    const headerLink = () => {

        if(e.target.value === "agregar" || e.target.value === "quitar"){
            const actions = document.querySelectorAll(`.cardPage.header .card-body .accion`);

            actions.forEach( action => {

                if(action.className.includes(e.target.value)){
                    action.classList.toggle("d-none")
                } else {
                    if(!action.className.includes("d-none")){
                        action.classList.toggle("d-none")
                    }
                }

            })
        }

        setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value});

    }

    const section = () => {

        const sectionName = e.target.value;
        const sections = document.querySelectorAll(`.cardPage.${cardName} .form-group.secondary`);

        if(sectionName !== "agregar" && sectionName !== "quitar"){
            sections.forEach( section => {
                if(section.className.includes(sectionName)
                    && !section.className.includes("agregar")
                    && !section.className.includes("quiar")){
                    section.classList.toggle("d-none")
                } else {
                    if(!section.className.includes("d-none")){
                        section.classList.toggle("d-none")
                    }
                }
            })
        } else {
            const terciarysections = document.querySelectorAll(`.cardPage.section .${cardName}.form-group.terciary`);

            terciarysections.forEach( section => {
                if(section.className.includes(sectionName)){
                    section.classList.toggle("d-none");
                }

            })

        }

        setDataPost({user: admin,...dataPost,section: e.target.value});
    }

    const sectionHome = () => {
        console.log(e.target.name)
        if(e.target.name === "text"){
            setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value});
        } else {
            dataPost.images
                ? setDataPost({
                    user: admin,
                    ...dataPost,
                    images: [
                        ...dataPost.images,
                        {
                            name: e.target.name,
                            file: e.target.files[0],
                        }
                    ]
                })
                : setDataPost({
                    user: admin,
                    ...dataPost,
                    images: [{
                        name: e.target.name,
                        file: e.target.files[0]
                    }]
                })
        }
    }

    const sectionInstalaciones = () => {
        setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value});
    }

    const sectionCumpleaños = () => {
        setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value});
    }

    const sectionEscuelita = () => {
        setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value});
    }

    const sectionPromociones = () => {

        if(e.target.name.slice(0,6) === "titulo"){
            const number = Number(e.target.name.slice(6,7));
            setDataPost({user: admin,...dataPost, promos: [{numero: number, titulo: e.target.value}]});
        } else {
            setDataPost({user: admin,...dataPost, promos: [{titulo: e.target.name, descripcion: e.target.value}]});
        }

        if(e.target.name === "accion"){

        }
    }

    const footerRedessociales = () => {
        setDataPost({user: admin,...dataPost, redessociales: [{titulo: e.target.attributes.id.value, url: e.target.value}]});
    }

    const footerContacto = () => {
        setDataPost({user: admin,...dataPost,[e.target.name]: e.target.value});
    }

    return {
        errorsErease,
        canchas,
        horarios,
        headerLink,
        section,
        sectionHome,
        sectionInstalaciones,
        sectionCumpleaños,
        sectionEscuelita,
        sectionCumpleaños,
        sectionPromociones,
        footerContacto,
        footerRedessociales,
    }
}

const handleErrors = (id, data) => {

    const errors = [];

    switch (id) {
        case "canchas":
            if(data.length === 0){
                errors.push({
                    element: "input",
                    errorid: "cancha_amount",
                    message: "You must modify the amount to send.!"
                })
            }

            break;
        case "horarios":
            const horario = data.horarios;
            let check = 0;

            if(horario !== undefined){
                for(let i = 0; i < horario.length; i++ ){
                    if(i !== 2){
                        const isnumber = Number(horario[i]);

                        if(typeof isnumber !== Number){
                            check++
                        }
                    } else {
                        if(horario[i] !== ":"){
                            check = check + 5;
                        }
                    }
                }
            }

            if(data.length === 0){
                errors.push({
                    element: "input",
                    errorid:"horarios",
                    message: "You must fill in the field to send.!"
                },
                {
                    element: "select",
                    errorid:"accionhorarios",
                    message: "You must choose an opcion.!"
                })
            } else {
                if(check !== 4){
                    errors.push({
                        element: "input",
                        errorid:"horarios",
                        message: "You must enter a valid value.!"
                    })
                }

                if(data.horarios && !data.accion){
                    errors.push({
                        element: "select",
                        errorid:"accionhorarios",
                        message: "You must choose an opcion.!"
                    })
                }
            }


            break;
        case "header":
            if(data.length === 0){
                errors.push({
                    main: true,
                    element: "select",
                    errorid:"accionheader",
                    message: "You must choose an opcion.!"
                })
            } else {
                const actions = document.querySelectorAll(`.cardPage.header .card-body .accion`);

                actions.forEach( action => {

                    if(action.className.includes("agregar")){
                        const data = action.querySelector("input").value;
                        if(!action.className.includes("d-none") && data === ""){
                            errors.push({
                                element: "input",
                                errorid:"linkagregar",
                                message: "You must enter a value.!"
                            })
                        }
                    }

                    if(action.className.includes("quitar")){
                        const data = action.querySelector("select").value;
                        if(!action.className.includes("d-none") && data === ""){
                            errors.push({
                                element: "select",
                                errorid:"linkquitar",
                                message: "You must choose a value.!"
                            })
                        }
                    }
                })

            }

            break;
        case "section":

            if(data.length === 0){
                errors.push({
                    main: true,
                    element: "select",
                    errorid:"accionsection",
                    message: "You must choose an opcion.!"
                })
            } else {

                if(data.section === "home"){

                    if(data.text){
                        const dataToSend = data.text;
                        const dataOnDB = document.querySelector(".cardPage.section .home p").innerHTML;

                        if(dataToSend === dataOnDB){
                            errors.push({
                                main: false,
                                element: "textarea",
                                errorid:"texthome",
                                message: "You must modify the text to send.!"
                            })
                        }
                    } else {
                        const files = data.images;

                        files.map( file => {
                            if(file.file.type !== "image/jpeg" && file.file.type !== "image/jpg" && file.file.type !== "image/png"){
                                errors.push({
                                    main: false,
                                    element: "input",
                                    errorid: `${file.name}home`,
                                    message: "The file type must be .jpeg, .jpg o .png!"
                                })
                            }
                            if(file.file.size > 50000){
                                errors.push({
                                    main: false,
                                    element: "input",
                                    errorid: `${file.name}home`,
                                    message: "Max size of image must be 500 x 500 px!"
                                })
                            }
                        })
                    }

                }

                if(data.section === "instalaciones"){
                    const dataOnDB = document.querySelectorAll(`.cardPage.section .instalaciones p`);

                    if(data.canchas){
                        const dataToSend = data.canchas;

                        if(dataToSend === dataOnDB[0].innerHTML){
                            errors.push({
                                main: false,
                                element: "textarea",
                                errorid:"canchasinstalaciones",
                                message: "You must modify the text to send.!"
                            })
                        }

                    }
                    if(data.vestuarios){
                        const dataToSend = data.vestuarios;

                        if(dataToSend === dataOnDB[1].innerHTML){
                            errors.push({
                                main: false,
                                element: "textarea",
                                errorid:"vestuariosinstalaciones",
                                message: "You must modify the text to send.!"
                            })
                        }
                    }
                    if(data.parrillasybar){
                        const dataToSend = data.vestuarios;

                        if(dataToSend === dataOnDB[2].innerHTML){
                            errors.push({
                                main: false,
                                element: "textarea",
                                errorid:"parrillasybarinstalaciones",
                                message: "You must modify the text to send.!"
                            })
                        }
                    }
                }

                if(data.section === "cumpleaños"){
                    const dataToSend = data.text;
                    const dataOnDB = document.querySelector(".cardPage.section .cumpleaños p").innerHTML;

                    if(data.cumpleaños){
                        if(dataToSend === dataOnDB){
                            errors.push({
                                main: false,
                                element: "textarea",
                                errorid:"cumpleañoscumpleaños",
                                message: "You must modify the text to send.!"
                            })
                        }
                    }
                }

                if(data.section === "escuelita"){
                    const dataToSend = data.text;
                    const dataOnDB = document.querySelector(".cardPage.section .escuelita p").innerHTML;

                    if(data.escuelita){
                        if(dataToSend === dataOnDB){
                            errors.push({
                                main: false,
                                element: "textarea",
                                errorid:"escuelitaescuelita",
                                message: "You must modify the text to send.!"
                            })
                        }
                    }
                }

                if(data.section === "promociones"){
                    if(!data.promo){
                        errors.push({
                            main: false,
                            element: "input",
                            errorid: "generalpromociones",
                            message: "You must modify any data to send form.!"
                        })
                    }
                }
            }
            break;
        case "footer":
            if(data.section === "redes sociales"){
                if(!data.redessociales){
                    errors.push({
                        main: false,
                        element: "input",
                        errorid: "generalredessociales",
                        message: "You must modify any data to send form.!"
                    })
                }
            }

            if(data.section === "contacto"){
                if(!data.direccion && !data.telefono && !data.whatsapp && !data.email){
                    errors.push({
                        main: false,
                        element: "input",
                        errorid: "generalcontacto",
                        message: "You must modify any data to send form.!"
                    })
                }
            }
            break;
        default:
            break;
    }

    return errors;
}

export {
    showCardBody,
    onFocus,
    handlerChange,
    cancelFormCard,
    handleErrors,
}
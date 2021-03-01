import { handlerChange, cancelFormCard } from "./cardPage";
import { submit } from "./submitForm";

const cardPageComponents = (
    dataPage,switchMode,setDataPost,admin,dataPost,setDataPage
) => {
    const background = switchMode === "ligth" ? "bg-primary" : "bg-dark";
    const textcolor = switchMode === "ligth" ? "text-dark" : "text-light";
    const classNameDiv = "row mb-2 form-group";
    const classNameLabel = `m-0 form-label text-left text-capitalize ${textcolor} align-self-center`;
    const classNameInput = `text-left ${switchMode === "ligth" ? "bg-light" : "bg-secondary"}
        ${textcolor}`;
    const classNameSelect = `form-control text-capitalize text-left
        ${switchMode === "ligth" ? "bg-light" : "bg-secondary"} ${textcolor}`;
    const classNameTextarea = `text-left ${switchMode === "ligth" ? "bg-light" : "bg-secondary"} form-control ${textcolor}`;
    const classNameTextareaError = "h6 text-danger my-2";
    const classNameInputError = "h6 text-danger my-2";
    const classNameCardContainer = "cardPage p-3 pl-5";
    const classNameCard = "rounded shadow";
    const classNameCardHeader = `card-header ${background} ${textcolor} p-2 text-capitalize`;
    const classNameCardBody = `card-body d-none ${switchMode === "ligth" ? "bg-light" : "bg-secondary"}
        text-center rounded-bottom`;
    const classNameButtonsDiv = "col-12 d-flex justify-content-end mt-4";
    const classNameTitle = `text-left pl-3 mb-0 d-flex justify-content-between ${textcolor}`;

    const data = [
        {
            id: "canchas",
            dataPage: {
                classNameTitle: classNameTitle,
                title: "canchas",
                content: dataPage.canchas.cantidad,
            },
            class: {
                container: classNameCardContainer + " col-12 col-md-6 col-lg-6 canchas",
                card: classNameCard,
                header: classNameCardHeader,
                body: classNameCardBody + " justify-content-between",
                buttons: classNameButtonsDiv,
            },
            form: {
                enctype: "",
                className: "",
                id: "cancha",
                onSubmit: (e) => {
                    submit(e, "canchas", dataPost, setDataPage, "POST", "/api/page/modifycanchayhorario")
                },
                // style: styleForm
            },
            components: [
                {
                    componentName: "input",
                    label: {
                        title: "Modifiicar cantidad de canchas",
                        htmlFor: "cancha_amount",
                        classNameLabel: classNameLabel + " col-9 form-label"
                    },
                    type: "number",
                    name: "cancha_amount",
                    id: "cancha_amount",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control",
                    classNameInputError: classNameInputError,
                    data: dataPage.canchas.cantidad,
                    errorid: "cancha_amount",
                    onChange: (e) => {handlerChange(e,setDataPost,admin).canchas()},
                    // style: styleInput
                }
            ],
            buttons: [
                {
                    type: "submit",
                    className: "btn btn-sm btn-primary",
                    title: "Enviar",
                },
                {
                    type: "button",
                    className: "btn btn-sm btn-danger ml-3",
                    title: "Cancelar",
                    id: "canchas",
                    onClick: (e) => {cancelFormCard(e, setDataPost)}
                }
            ]
        },
        {
            id: "horarios",
            dataPage: {
                classNameTitle: classNameTitle,
                classNameContent: "text-center mb-0 ml-5",
                title: "horarios",
                content: `de ${dataPage.horarios[0]} a ${dataPage.horarios[dataPage.horarios.length - 1]}`,
            },
            class: {
                container: classNameCardContainer + " col-12 col-md-6 col-lg-6 horarios",
                card: classNameCard,
                header: classNameCardHeader,
                body: classNameCardBody + " justify-content-between",
                buttons: classNameButtonsDiv,
            },
            form: {
                enctype: "",
                className: "",
                id: "horarios",
                onSubmit: (e) => {
                    submit(e, "horarios", dataPost, setDataPage, "POST", "/api/page/modifycanchayhorario")
                },
                // style: styleForm
            },
            components: [
                    {
                        componentName: "select",
                        name: "accion",
                        id: "accion",
                        classNameDiv: classNameDiv + " col-12 mx-auto mb-3",
                        classNameSelect: classNameSelect + " col-12 col-lg-9 form-control",
                        classNameInputError: classNameInputError,
                        options: [
                            {
                                className: "",
                                value: "",
                                title: "Seleccione una opcion.",
                                selected: true,
                                disabled: false
                            },
                            {
                                className: "",
                                value: "agregar",
                                title: "agregar",
                                selected: false,
                                disabled: false
                            },
                            {
                                className: "",
                                value: "quitar",
                                title: "quitar",
                                selected: false,
                                disabled: false
                            }
                        ],
                        errorid: "accionhorarios",
                        onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"horarios").horarios()},
                        // style: styleInput
                    },
                    {
                        componentName: "input",
                        label: {
                            title: "Horario a modificar",
                            htmlFor: "horarios",
                            classNameLabel: classNameLabel + " col-9 form-label"
                        },
                        type: "text",
                        name: "horarios",
                        id: "horarios",
                        classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                        classNameInput: classNameInput + " col-3 form-control",
                        classNameInputError: classNameInputError,
                        placeholder: "ej: 22:00",
                        errorid: "horarios",
                        onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost).horarios()},
                        // errors: errors,
                        // style: styleInput
                    },
                ],
                buttons: [
                    {
                        type: "submit",
                        className: "btn btn-sm btn-primary",
                        title: "Enviar",
                    },
                    {
                        type: "button",
                        className: "btn btn-sm btn-danger ml-3",
                        title: "Cancelar",
                        id: "horarios",
                        onClick: (e) => {cancelFormCard(e, setDataPost)}
                    }
                ]
        },
        {
            id: "header",
            dataPage: {
                classNameTitle: classNameTitle,
                classNameContent: "text-center mb-0 ml-5",
                title: "header",
                content: `${dataPage.page.header.links.map( link => { return link.toUpperCase() }).join(" - ")}`,
            },
            class: {
                container: classNameCardContainer + " col-12 header",
                card: classNameCard,
                header: classNameCardHeader,
                body: classNameCardBody + " justify-content-between",
                buttons: classNameButtonsDiv,
            },
            form: {
                enctype: "",
                className: "",
                id: "header",
                onSubmit: (e) => {
                    submit(e, "header", dataPost, setDataPage, "POST", "/api/page/modifyheader/link")
                },
                // style: styleForm
            },
            components: [
                {
                    componentName: "select",
                    name: "accion",
                    id: "accion",
                    classNameDiv: classNameDiv + " col-12 col-md-9 col-lg-6 mb-3 mx-auto main",
                    classNameSelect: classNameSelect + " col-12 form-control",
                    classNameInputError: classNameInputError,
                    options: [
                        {
                            className: "",
                            value: "",
                            title: "Seleccione una opcion.",
                            selected: true,
                            disabled: true
                        },
                        {
                            className: "",
                            value: "agregar",
                            title: "agregar",
                            selected: false,
                            disabled: false
                        },
                        {
                            className: "",
                            value: "quitar",
                            title: "quitar",
                            selected: false,
                            disabled: false
                        }
                    ],
                    errorid: "accionheader",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"header").headerLink()},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "Ingrese el titulo del nuevo link",
                        htmlFor: "link",
                        classNameLabel: classNameLabel + " col-12 col-md-6 col-lg-6 form-label"
                    },
                    type: "text",
                    name: "link",
                    id: "link",
                    classNameDiv: classNameDiv + " col-12 col-lg-9 mx-auto justify-content-between accion agregar d-none secondary",
                    classNameInput: classNameInput + " col-12 col-md-6 col-lg-6  form-control",
                    classNameInputError: classNameInputError,
                    placeholder: "",
                    errorid: "linkagregar",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"agregar").headerLink()},
                    // style: styleInput
                },
                {
                    componentName: "select",
                    name: "link",
                    id: "link",
                    label: {
                        title: "link a eleminar",
                        htmlFor: "link",
                        classNameLabel: classNameLabel + " col-12 col-md-3 col-lg-6 form-label"
                    },
                    classNameDiv: classNameDiv + " col-12 col-lg-6 mb-3 mx-auto accion quitar d-none secondary",
                    classNameSelect: classNameSelect + " col-12 col-md-9 col-lg-6 form-control",
                    classNameInputError: classNameInputError,
                    options: [
                        {
                            className: "",
                            value: "",
                            title: "Seleccione una opcion.",
                            selected: true,
                            disabled: true
                        },
                        ...dataPage.page.header.links.map( link => {
                            return {
                                className: "",
                                value: link,
                                title: link,
                                selected: false,
                                disabled: false
                            }
                        })
                    ],
                    errorid: "linkquitar",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"quitar").headerLink()},
                    // style: styleInput
                },
            ],
            buttons: [
                {
                    type: "submit",
                    className: "btn btn-sm btn-primary",
                    title: "Enviar",
                },
                {
                    type: "button",
                    className: "btn btn-sm btn-danger ml-3",
                    title: "Cancelar",
                    id: "header",
                    onClick: (e) => {cancelFormCard(e, setDataPost)}
                }
            ]
        },
        {
            id: "section",
            dataPage: {
                classNameTitle: classNameTitle,
                classNameContent: "text-center mb-0 ml-5",
                title: "section",
                content: `${dataPage.page.header.links.map( link => { return link.toUpperCase() }).join(" - ")}`,
            },
            class: {
                container: classNameCardContainer + " col-12 section",
                card: classNameCard,
                header: classNameCardHeader,
                body: classNameCardBody + " justify-content-between",
                buttons: classNameButtonsDiv,
            },
            form: {
                enctype: "",
                method: "",
                className: "row",
                id: "section",
                onSubmit: (e) => {
                    submit(e, "section", dataPost, setDataPage, "POST", "/api/page/modifysection")
                },
                // style: styleForm
            },
            components: [
                {
                    componentName: "select",
                    name: "accion",
                    id: "accion",
                    classNameDiv: classNameDiv + " col-12 mb-3 mx-auto main",
                    classNameSelect: classNameSelect + " col-12 col-md-9 col-lg-6 mx-auto form-control",
                    classNameInputError: classNameInputError,
                    options: [
                        {
                            className: "",
                            value: "",
                            title: "Seleccione una opcion.",
                            selected: true,
                            disabled: true
                        },
                        ...dataPage.page.header.links.map( link => {
                            return {
                                className: "",
                                value: link,
                                title: link,
                                selected: false,
                                disabled: false
                            }
                        })
                    ],
                    errorid: "accionsection",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"section").section()},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "home",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary home d-none",
                    classNameInput: classNameInput + " col-3 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true
                },
                {
                    componentName: "input",
                    textarea: true,
                    label: {
                        title: "Texto",
                        htmlFor: "text",
                        classNameLabel: classNameLabel.replace("center","start") + " col-3"
                    },
                    type: "text",
                    name: "text",
                    id: "text",
                    classNameDiv: classNameDiv + " col-12 mx-auto home secondary d-none",
                    classNameTextarea: classNameTextarea + " col-12 col-lg-9",
                    classNameTextareaError: classNameTextareaError,
                    data: dataPage.page.section.home.text,
                    placeholder: "",
                    rows: 5,
                    errorid: "texthome",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"home").sectionHome()},
                    // style: styleInput
                },
                ...dataPage.page.section.home.sponsors.map((sponsor,i) => {
                    return {
                        componentName: "input",
                        label: {
                            title: sponsor.name,
                            htmlFor: sponsor.name,
                            classNameLabel: classNameLabel.replace("center", "start") + " col-6 text-uppercase"
                        },
                        type: "file",
                        name: sponsor.name,
                        id: sponsor.name,
                        classNameDiv: classNameDiv + ` col-12 col-lg-6 home secondary mx-auto mt-3 pt-3 d-none`,
                        classNameInput: classNameInput + " col-12 my-3 form-control",
                        classNameInputError: classNameInputError,
                        file: sponsor,
                        classNameFile: "img-fluid col-6 pr-0",
                        placeholder: "",
                        dataid: sponsor.id,
                        errorid: `${sponsor.name}home`,
                        onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"home").sectionHome()},
                        // style: styleInput
                    }
                }),
                {
                    componentName: "input",
                    label: {
                        title: "instalaciones",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary instalaciones d-none",
                    classNameInput: classNameInput + " col-3 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true
                },
                {
                    componentName: "input",
                    textarea: true,
                    label: {
                        title:"Canchas",
                        htmlFor: "canchas",
                        classNameLabel: classNameLabel.replace("center","start") + " col-12 col-lg-3"
                    },
                    type: "Canchas",
                    name: "canchas",
                    id: "canchas",
                    placeholder: "",
                    classNameDiv: classNameDiv + ` col-12 secondary instalaciones form-group mx-auto d-none`,
                    classNameTextarea: classNameTextarea + " col-12 col-lg-9 form-control",
                    classNameInputError: classNameInputError,
                    errorid: "canchasinstalaciones",
                    data: dataPage.page.section.instalaciones.canchas,
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"instalaciones").sectionInstalaciones()},
                },
                {
                    componentName: "input",
                    textarea: true,
                    label: {
                        title:"Vesturarios",
                        htmlFor: "vestuarios",
                        classNameLabel: classNameLabel.replace("center","start") + " col-12 col-lg-3"
                    },
                    type: "text",
                    name: "vestuarios",
                    id: "vestuarios",
                    placeholder: "",
                    classNameDiv: classNameDiv + ` col-12 instalaciones secondary form-group mx-auto d-none`,
                    classNameTextarea: classNameTextarea + " col-12 col-lg-9 form-control",
                    classNameInputError: classNameInputError,
                    errorid: "vestuariosinstalaciones",
                    data: dataPage.page.section.instalaciones.vesturarios,
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"instalaciones").sectionInstalaciones()},
                },
                {
                    componentName: "input",
                    textarea: true,
                    label: {
                        title:"Parrillas y Bar",
                        htmlFor: "parrillasybar",
                        classNameLabel: classNameLabel.replace("center","start") + " col-12 col-lg-3"
                    },
                    type: "text",
                    name: "parrillasybar",
                    id: "parrillasybar",
                    placeholder: "",
                    classNameDiv: classNameDiv + ` col-12 instalaciones secondary form-group mx-auto d-none`,
                    classNameTextarea: classNameTextarea + " col-12 col-lg-9 form-control",
                    classNameInputError: classNameInputError,
                    errorid: "parrillasybarinstalaciones",
                    data: dataPage.page.section.instalaciones.parrillasybar,
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"instalaciones").sectionInstalaciones()},
                },
                {
                    componentName: "input",
                    label: {
                        title: "cumpleaños",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary cumpleaños d-none",
                    classNameInput: classNameInput + " col-3 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true
                },
                {
                    componentName: "input",
                    textarea: true,
                    label: {
                        title:"Cumpleaños",
                        htmlFor: "cumpleaños",
                        classNameLabel: classNameLabel.replace("center","start") + " col-12 col-lg-3"
                    },
                    type: "text",
                    name: "cumpleaños",
                    id: "cumpleaños",
                    placeholder: "",
                    rows: 5,
                    classNameDiv: classNameDiv + ` col-12 cumpleaños form-group secondary mx-auto d-none`,
                    classNameTextarea: classNameTextarea + " col-12 col-lg-9 form-control",
                    classNameInputError: classNameInputError,
                    errorid: "cumpleañoscumpleaños",
                    data: dataPage.page.section.cumpleaños,
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"cumpleaños").sectionCumpleaños()},
                },
                {
                    componentName: "input",
                    label: {
                        title: "escuelita",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary escuelita d-none",
                    classNameInput: classNameInput + " col-3 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true,
                },
                {
                    componentName: "input",
                    textarea: true,
                    label: {
                        title:"escuelita",
                        htmlFor: "escuelita",
                        classNameLabel: classNameLabel.replace("center","start") + " col-12 col-lg-3"
                    },
                    type: "text",
                    name: "escuelita",
                    id: "escuelita",
                    placeholder: "",
                    rows: 5,
                    classNameDiv: classNameDiv + ` col-12 escuelita form-group secondary mx-auto d-none`,
                    classNameTextarea: classNameTextarea + " col-12 col-lg-9 form-control",
                    classNameInputError: classNameInputError,
                    errorid: "escuelitaescuelita",
                    data: dataPage.page.section.escuelita,
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"escuelita").sectionEscuelita()},
                },
                {
                    componentName: "input",
                    label: {
                        title: "promociones",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary promociones d-none",
                    classNameInput: classNameInput + " col-3 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true,
                    errorid: "generalpromociones"
                },
                {
                    componentName: "select",
                    name: "accion",
                    id: "accion",
                    label: {
                        title: "agregar / quitar promocion",
                        classNameLabel: classNameLabel + ` pb-2 col-12 col-lg-6`
                    },
                    classNameDiv: classNameDiv + " col-12 mb-3 mx-auto promociones secondary accion d-none",
                    classNameSelect: classNameSelect + " col-12 col-lg-6 form-control",
                    classNameInputError: classNameInputError,
                    options: [
                        {
                            className: "",
                            value: "",
                            title: "Seleccione una opcion.",
                            selected: true,
                            disabled: true
                        },
                        {
                            className: "",
                            value: "agregar",
                            title: "agregar",
                            selected: false,
                            disabled: false
                        },
                        {
                            className: "",
                            value: "quitar",
                            title: "quitar",
                            selected: false,
                            disabled: false
                        }
                    ],
                    errorid: "accionpromociones",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"promociones").section()},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: `numero`,
                        htmlFor:  `nuevonumero`,
                        classNameLabel: classNameLabel.replace("center","start") + " col-6"
                    },
                    type: "number",
                    name:  `numero`,
                    id:  `nuevonumero`,
                    placeholder: "",
                    classNameDiv: classNameDiv + ` col-12 col-lg-9 promociones agregar terciary mx-auto d-none`,
                    classNameInput: classNameInput + " col-6 form-control",
                    classNameInputError: classNameInputError,
                    errorid: `nuevonumeropromociones`,
                    dataSection: "promociones",
                    disabled: true,
                    data: dataPage.page.section.promociones.datos.length + 1,
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"promociones").sectionPromociones()},
                },
                {
                    componentName: "input",
                    label: {
                        title: `titulo`,
                        htmlFor:  `nuevotitulo`,
                        classNameLabel: classNameLabel.replace("center","start") + " col-6"
                    },
                    type: "text",
                    name:  `titulo`,
                    id:  `nuevotitulo`,
                    placeholder: "",
                    classNameDiv: classNameDiv + ` col-12 col-lg-9 promociones agregar terciary mx-auto d-none`,
                    classNameInput: classNameInput + " col-6 form-control",
                    classNameInputError: classNameInputError,
                    errorid: `nuevotitulopromociones`,
                    dataSection: "promociones",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"promociones").sectionPromociones()},
                },
                {
                    componentName: "input",
                    textarea: true,
                    label: {
                        title: `descripcion`,
                        htmlFor:  `nuevodescripcion`,
                        classNameLabel: classNameLabel.replace("center","start") + " col-3"
                    },
                    type: "text",
                    name:  `descripcion`,
                    id:  `nuevodescripcion`,
                    placeholder: "",
                    classNameDiv: classNameDiv + ` col-12 col-lg-9 promociones agregar terciary mx-auto d-none`,
                    classNameTextarea: classNameTextarea + " col-12 col-lg-9 form-control",
                    errorid: `nuevodescripcionpromociones`,
                    rows: 5,
                    dataSection: "promociones",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"promociones").sectionPromociones()},
                },
                {
                    componentName: "input",
                    label: {
                        title: "modificar promociones",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary promociones d-none",
                    classNameInput: classNameInput + " col-3 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true,
                },
                ...dataPage.page.section.promociones.datos.map( (promo, i) => {
                    return {
                        componentName: "input",
                        textarea: false,
                        label: {
                            title: `titulo${i+1}`,
                            htmlFor:  `titulo${i+1}`,
                            classNameLabel: classNameLabel.replace("center","start") + " col-12 col-lg-3"
                        },
                        type: "text",
                        name:  `titulo${i+1}`,
                        id:  `titulo${i+1}`,
                        placeholder: "",
                        classNameDiv: classNameDiv + ` col-12 promociones secondary form-group  mx-auto d-none`,
                        classNameInput: classNameInput + " col-12 col-lg-9 form-control",
                        classNameInputError: classNameInputError,
                        errorid: `titulo${i+1}promociones`,
                        dataSection: "promociones",
                        numberpromo: i + 1,
                        description: promo.descripcion,
                        data: promo.titulo,
                        onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"promociones").sectionPromociones()},
                    }
                }),
                ...dataPage.page.section.promociones.datos.map( (promo, i) => {
                    return {
                        componentName: "input",
                        textarea: true,
                        label: {
                            title: promo.titulo,
                            htmlFor: promo.titulo,
                            classNameLabel: classNameLabel.replace("center","start").replace("capitalize","uppercase")
                                + " col-12 border-bottom"
                        },
                        type: "text",
                        name: promo.titulo,
                        id: promo.titulo,
                        placeholder: "",
                        classNameDiv: classNameDiv + ` col-12 promociones secondary form-group mt-3 mx-auto d-none`,
                        classNameTextarea: classNameTextarea + " col-12 col-lg-9 form-control",
                        classNameInputError: classNameInputError,
                        errorid: `${promo.titulo}promociones`,
                        dataSection: "promociones",
                        numberpromo: i + 1,
                        title: promo.titulo,
                        data: promo.descripcion,
                        onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"promociones").sectionPromociones()},
                    }
                })
            ],
            buttons: [
                {
                    type: "submit",
                    className: "btn btn-sm btn-primary",
                    title: "Enviar",
                },
                {
                    type: "button",
                    className: "btn btn-sm btn-danger ml-3",
                    title: "Cancelar",
                    id: "section",
                    onClick: (e) => {cancelFormCard(e, setDataPost)}
                }
            ]
        },
        {
            id: "footer",
            dataPage: {
                classNameTitle: classNameTitle,
                classNameContent: "text-center mb-0 ml-5",
                title: "footer",
                content: `${dataPage.page.footer.campos.map( campo => { return campo.toUpperCase() }).join(" - ")}`,
            },
            class: {
                container: classNameCardContainer + " col-12 footer",
                card: classNameCard,
                header: classNameCardHeader,
                body: classNameCardBody + " justify-content-between",
                buttons: classNameButtonsDiv,
            },
            form: {
                enctype: "",
                method: "",
                className: "row",
                id: "footer",
                onSubmit: (e) => {
                    submit(e, "footer", dataPost, setDataPage, "POST", "/api/page/modifyfooter")
                },
                // style: styleForm
            },
            components: [
                {
                    componentName: "select",
                    name: "accion",
                    id: "accion",
                    classNameDiv: classNameDiv + " col-12 mb-3 mx-auto main",
                    classNameSelect: classNameSelect + " col-12 col-md-9 col-lg-6 mx-auto form-control",
                    classNameInputError: classNameInputError,
                    options: [
                        {
                            className: "",
                            value: "",
                            title: "Seleccione una opcion.",
                            selected: true,
                            disabled: true
                        },
                        ...dataPage.page.footer.campos.map( campo => {
                            return {
                                className: "",
                                value: campo,
                                title: campo,
                                selected: false,
                                disabled: false
                            }
                        })
                    ],
                    errorid: "accionfooter",
                    onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"footer").section()},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "redes sociales",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary redes sociales d-none",
                    classNameInput: classNameInput + " col-3 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true,
                    errorid: "generalredessociales"
                },
                ...dataPage.page.footer.redessociales.map( (redes, i) => {
                    return {
                        componentName: "input",
                        label: {
                            title: redes.nombre,
                            htmlFor: redes.nombre,
                            classNameLabel: classNameLabel + " col-12 col-md-3 col-lg-6 form-label"
                        },
                        type: "text",
                        name: `redes${i+1}`,
                        id: redes.nombre,
                        classNameDiv: classNameDiv + " col-12 col-lg-9 mx-auto justify-content-between redes sociales d-none secondary",
                        classNameInput: classNameInput + " col-12 col-md-9 col-lg-6  form-control",
                        classNameInputError: classNameInputError,
                        data: redes.url,
                        placeholder: "",
                        errorid: `redes${i+1}redessociales`,
                        onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"redessociales").footerRedessociales()},
                        // style: styleInput
                    }
                }),
                {
                    componentName: "input",
                    label: {
                        title: "contacto",
                        classNameLabel: classNameLabel.replace("left", "center")
                            + ` border-bottom border-${textcolor.replace("text-","")} pb-2 col-12`
                    },
                    classNameDiv: classNameDiv.replace("2","3") + " col-12 mx-auto border-0 secondary contacto d-none",
                    classNameInput: classNameInput + " col-12 col-lg-6 d-none",
                    classNameInputError: classNameInputError,
                    disabled: true,
                    errorid: "generalcontacto"
                },
                ...dataPage.page.footer.contacto.map( c => {
                    return {
                        componentName: "input",
                        label: {
                            title: c.title,
                            htmlFor: c.title,
                            classNameLabel: classNameLabel + " col-12 col-md-3  col-lg-6 form-label"
                        },
                        type: "text",
                        name: c.title,
                        id: c.title,
                        classNameDiv: classNameDiv + " col-12 col-lg-9 mx-auto justify-content-between contacto d-none secondary",
                        classNameInput: classNameInput + " col-12 col-md-9 col-lg-6  form-control",
                        classNameInputError: classNameInputError,
                        data: c.data,
                        placeholder: "",
                        errorid: `${c.title}contacto`,
                        onChange: (e) => {handlerChange(e,setDataPost,admin,dataPost,"contacto").footerContacto()},
                        // style: styleInput
                    }
                }),
            ],
            buttons: [
                {
                    type: "submit",
                    className: "btn btn-sm btn-primary",
                    title: "Enviar",
                },
                {
                    type: "button",
                    className: "btn btn-sm btn-danger ml-3",
                    title: "Cancelar",
                    id: "footer",
                    onClick: (e) => {cancelFormCard(e, setDataPost)}
                }
            ]
        }
    ]

    return data;
}

export {cardPageComponents}
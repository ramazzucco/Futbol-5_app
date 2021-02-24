const fieldsNewReserve = (
    handlerChange,onSubmit,switchMode,dataPost,setDataPost,cancelForm,dataPage
) => {
    const background = switchMode === "ligth" ? "bg-primary" : "bg-dark";
    const textcolor = switchMode === "ligth" ? "text-dark" : "text-light";
    const classNameTitle = "";
    const classNameCardContainer = "w-100";
    const classNameCard = `col-10 col-md-9 col-lg-6 newreserve rounded shadow-lg px-0 mx-auto my-5`;
    const classNameCardHeader = `card-header ${textcolor} ${background} text-center text-uppercase h5`;
    const classNameCardBody = `card-body ${textcolor}
        ${switchMode === "ligth" ? "bg-light" : "bg-secondary"} text-center rounded-bottom`;
    const classNameDiv = "col-12 row justify-content-end mb-2";
    const classNameLabel = `col-12 m-0 pl-0 form-label text-center text-uppercase
        ${textcolor} align-self-center`;
    const classNameSelect = `col-12 form-control text-capitalized text-center p-0
        ${switchMode === "ligth" ? "bg-light" : "bg-secondary"} ${textcolor}`;
    const classNameInput = `col-12 col-md-9 col-lg-9 text-left ${switchMode === "ligth" ? "bg-light" : "bg-secondary"}`;
    const classNameInputError = "h6 text-danger my-2"

    const horarios = [];

    dataPage.map( (cancha, i) => {
        cancha.options.map( option => {
            horarios.push({
                className: `d-none cancha${i+1} horarioOption ${option.reservado ? "text-danger" : ""}`,
                value: option.horario,
                title: `${option.reservado ? "Reservado" : option.horario + " Hs."}`,
                selected: false,
                disabled: false
            })
        })
    })

    const data = [
        {
            id: "newreserve",
            header: {
                classNameTitle: classNameTitle,
                title: "new reserve",
            },
            class: {
                container: classNameCardContainer,
                card: classNameCard,
                header: classNameCardHeader,
                body: classNameCardBody + " justify-content-between",
                buttons: "col-12 d-flex justify-content-center mt-3"
            },
            form: {
                enctype: "",
                className: "row",
                id: "newreserve",
                onSubmit: (e) => {
                    onSubmit(e, "newreserve", dataPost, "POST", "/api/reserve/newreserve")
                },
                // style: styleForm
            },
            components: [
                {
                    componentName: "select",
                    name: "cancha",
                    id: "cancha",
                    label: {
                        title: "cancha",
                        htmlFor: "cancha",
                        classNameLabel: classNameLabel
                    },
                    classNameDiv: classNameDiv + " col-12 col-md-6 col-lg-6 mx-auto mb-3",
                    classNameSelect: classNameSelect,
                    classNameInputError: classNameInputError,
                    options: [{
                        className: "",
                        value: "",
                        title: "Seleccione una opcion.",
                        selected: true,
                        disabled: true
                    },...dataPage.map(cancha => {
                        return {
                            className: "",
                            value: cancha.number,
                            title: `Cancha N° ${cancha.number}`,
                            selected: false,
                            disabled: false
                        }
                    })],
                    errorid: "cancha",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "select",
                    name: "horario",
                    id: "horario",
                    label: {
                        title: "horarios",
                        htmlFor: "horarios",
                        classNameLabel: classNameLabel
                    },
                    classNameDiv: classNameDiv + " col-12 col-md-6 col-lg-6 mx-auto mb-3",
                    classNameSelect: classNameSelect,
                    classNameInputError: classNameInputError,
                    options: [{
                        className: "",
                        value: "",
                        title: "Seleccione una opcion.",
                        selected: true,
                        disabled: true
                        },
                        ...horarios
                    ],
                    errorid: "horario",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "nombre",
                        htmlFor: "name",
                        classNameLabel: classNameLabel + " col-md-3 col-lg-3 "
                    },
                    type: "text",
                    name: "name",
                    id: "name",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control",
                    classNameInputError: classNameInputError,
                    placeholder: "",
                    errorid: "name",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "apellido",
                        htmlFor: "lastname",
                        classNameLabel: classNameLabel + " col-md-3 col-lg-3 "
                    },
                    type: "text",
                    name: "lastname",
                    id: "lastname",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control",
                    classNameInputError: classNameInputError,
                    placeholder: "",
                    errorid: "lastname",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "email",
                        htmlFor: "email",
                        classNameLabel: classNameLabel + " col-md-3 col-lg-3 "
                    },
                    type: "text",
                    name: "email",
                    id: "email",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control",
                    classNameInputError: classNameInputError,
                    placeholder: "",
                    errorid: "email",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "telefono",
                        htmlFor: "telefono",
                        classNameLabel: classNameLabel + " col-md-3 col-lg-3 "
                    },
                    type: "text",
                    name: "telefono",
                    id: "telefono",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control",
                    classNameInputError: classNameInputError,
                    placeholder: "",
                    errorid: "telefono",
                    onChange: (e) => {handlerChange(e)},
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
                    id: "newreserve",
                    onClick: (e) => {cancelForm(e, setDataPost)}
                }
            ]
        }
    ]

    return data;
}

export { fieldsNewReserve }
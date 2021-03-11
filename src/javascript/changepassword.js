const fieldsChangepassword = (switchMode,onSubmit,dataPost,setDataPost,handlerChange,cancelForm) => {
    const background = switchMode === "ligth" ? "bg-primary" : "bg-dark";
    const textcolor = switchMode === "ligth" ? "text-dark" : "text-light";
    const classNameCardContainer = "";
    const classNameCard = "col-10 col-md-9 col-lg-6 rounded shadow px-0  mx-auto my-4";
    const classNameCardHeader = `card-header ${background} text-center text-uppercase h4
        ${switchMode === "ligth" ? "text-dark" : "text-light"}`;
    const classNameTitle = "";
    const classNameCardBody = `card-body changepassword text-center p-5 rounded-bottom
        ${switchMode === "ligth" ? "bg-light" : "bg-secondary"}`;
    const classNameDiv = "col-12 col-sm-9 col-md-9 col-lg-9 mx-auto";
    const classNameLabel = `col-12 mb-2 form-label text-center text-uppercase h6 align-self-center
        ${textcolor}`;
    const classNameInput = `col-12 text-center ${switchMode === "ligth" ? "bg-light" : "bg-secondary"}
        ${textcolor}`;
    const classNameInputError = "h5 text-danger my-3";
    const classNameIconShowPass = `far fa-eye ${textcolor}`;
    const classNameIconHidePass = `far fa-eye-slash d-none ${textcolor}`;

    const data = [
        {
            id: "changepassword",
            header: {
                classNameTitle: classNameTitle,
                title: "change password",
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
                id: "changepassword",
                onSubmit: (e) => {
                    onSubmit(e, "changepassword", dataPost, "POST", "/api/reserve/changepassword")
                },
                // style: styleForm
            },
            components: [
                {
                    componentName: "input",
                    label: {
                        title: "Ingrese su antigua contraseña",
                        htmlFor: "oldpassword",
                        classNameLabel: classNameLabel
                    },
                    type: "password",
                    name: "oldpassword",
                    id: "oldpassword",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control mb-3",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " oldpassword",
                    classNameIconHidePass: classNameIconHidePass + " oldpassword",
                    placeholder: "",
                    errorid: "oldpassword",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "Ingrese su nueva contraseña",
                        htmlFor: "newpassword",
                        classNameLabel: classNameLabel
                    },
                    type: "password",
                    name: "newpassword",
                    id: "newpassword",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control mb-3",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " newpassword",
                    classNameIconHidePass: classNameIconHidePass + " newpassword",
                    placeholder: "",
                    errorid: "newpassword",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "Repita su nueva contraseña",
                        htmlFor: "password",
                        classNameLabel: classNameLabel
                    },
                    type: "password",
                    name: "password",
                    id: "repeatnewpassword",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control mb-3",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " repeatnewpassword",
                    classNameIconHidePass: classNameIconHidePass + " repeatnewpassword",
                    placeholder: "",
                    errorid: "repeatnewpassword",
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
                    id: "changepassword",
                    onClick: (e) => {cancelForm(e, setDataPost)}
                }
            ]
        }
    ]
    return data;
}

export { fieldsChangepassword }
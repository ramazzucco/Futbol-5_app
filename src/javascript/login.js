import { getAdmin, submitSignup } from "../javascript/servicesApi";

const fieldsLogin = (props, handlerChange, dataPost, goBack) => {
    const background = props.switchMode === "ligth" ? "bg-primary" : "bg-dark";
    const textcolor = props.switchMode === "ligth" ? "text-dark" : "text-light";
    const classNameCardContainer = "";
    const classNameCard = "content-absolut form-content-back rounded shadow-lg";
    const classNameCardHeader = "card-header text-info text-center text-uppercase h4";
    const classNameTitle = "";
    const classNameCardBody = "card-body signin bg-light text-center rounded-bottom";
    const classNameDiv = "";
    const classNameLabel = "col-12 mb-3 form-label text-center text-uppercase text-dark align-self-center";
    const classNameInput = "col-12 text-center";
    const classNameInputError = "h5 text-danger my-3";
    const classNameIconShowPass = `far fa-eye ${textcolor}`;
    const classNameIconHidePass = `far fa-eye-slash d-none ${textcolor}`;

    const data = [
        {
            id: "login",
            header: {
                classNameTitle: classNameTitle,
                title: "login",
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
                id: "login",
                onSubmit: (e) => {
                    e.preventDefault();
                    getAdmin(dataPost,props.setAdmin)
                },
                // style: styleForm
            },
            components: [
                {
                    componentName: "input",
                    label: {
                        title: "password",
                        htmlFor: "password",
                        classNameLabel: classNameLabel + " col-md-3 col-lg-3 "
                    },
                    type: "password",
                    name: "password",
                    id: "password",
                    classNameDiv: classNameDiv + " col-12 mx-auto justify-content-between",
                    classNameInput: classNameInput + " col-3 form-control",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " password",
                    classNameIconHidePass: classNameIconHidePass + " password",
                    placeholder: "",
                    errorid: "password",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
            ],
            buttonBack: true,
            buttons: [
                {
                    type: "submit",
                    className: "btn btn-sm btn-primary",
                    title: "Enviar",
                },
                {
                    type: "button",
                    className: "btn btn-sm btn-outline-primary ml-3",
                    title: "volver",
                    id: "login",
                    onClick: () => {goBack()}
                }
            ]
        }
    ]
    return data;
}

const fieldsSignup = (props, handlerChange, dataPost, goBack) => {
    const background = props.switchMode === "ligth" ? "bg-primary" : "bg-dark";
    const textcolor = props.switchMode === "ligth" ? "text-dark" : "text-light";
    const classNameCardContainer = "";
    const classNameCard = "content-absolut form-content-back rounded shadow-lg";
    const classNameCardHeader = "card-header text-info text-center text-uppercase h4";
    const classNameTitle = "";
    const classNameCardBody = "card-body signin bg-light text-center rounded-bottom";
    const classNameDiv = "row col-12 mx-auto mb-3 justify-content-between";
    const classNameLabel = "col-12 form-label text-center text-uppercase text-dark align-self-center";
    const classNameInput = "col-12 text-center";
    const classNameInputError = "h5 text-danger my-3";
    const classNameIconShowPass = `far fa-eye ${textcolor}`;
    const classNameIconHidePass = `far fa-eye-slash d-none ${textcolor}`;

    const data = [
        {
            id: "signup",
            header: {
                classNameTitle: classNameTitle,
                title: "signup",
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
                id: "signup",
                onSubmit: (e) => {
                    e.preventDefault();
                    submitSignup(dataPost,props.setAdmin);
                },
                // style: styleForm
            },
            components: [
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
                    classNameDiv: classNameDiv,
                    classNameInput: classNameInput + " col-3 col-md-9 form-control",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " name",
                    classNameIconHidePass: classNameIconHidePass + " name",
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
                    classNameDiv: classNameDiv,
                    classNameInput: classNameInput + " col-3 col-md-9 form-control",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " lastname",
                    classNameIconHidePass: classNameIconHidePass + " lastname",
                    placeholder: "",
                    errorid: "lastname",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "password",
                        htmlFor: "signuppassword",
                        classNameLabel: classNameLabel + " col-md-3 col-lg-3 "
                    },
                    type: "password",
                    name: "password",
                    id: "signuppassword",
                    classNameDiv: classNameDiv,
                    classNameInput: classNameInput + " col-3 col-md-9 form-control",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " signuppassword",
                    classNameIconHidePass: classNameIconHidePass + " signuppassword",
                    placeholder: "",
                    errorid: "signuppassword",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                },
                {
                    componentName: "input",
                    label: {
                        title: "key",
                        htmlFor: "key",
                        classNameLabel: classNameLabel + " col-md-3 col-lg-3 "
                    },
                    type: "password",
                    name: "key",
                    id: "key",
                    classNameDiv: classNameDiv,
                    classNameInput: classNameInput + " col-3 col-md-9 form-control",
                    classNameInputError: classNameInputError,
                    classNameIconShowPass: classNameIconShowPass + " key",
                    classNameIconHidePass: classNameIconHidePass + " key",
                    placeholder: "",
                    errorid: "key",
                    onChange: (e) => {handlerChange(e)},
                    // style: styleInput
                }
            ],
            buttonBack: true,
            buttons: [
                {
                    type: "submit",
                    className: "btn btn-sm btn-primary",
                    title: "Enviar",
                },
                {
                    type: "button",
                    className: "btn btn-sm btn-outline-primary ml-3",
                    title: "volver",
                    id: "signup",
                    onClick: () => {goBack()}
                }
            ]
        }
    ]

    return data;
}

export { fieldsLogin, fieldsSignup}
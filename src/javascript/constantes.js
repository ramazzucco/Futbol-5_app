import { Link } from "react-router-dom";
import {urlApiBase} from "../functions";

const dataButtons = (props) => {
    const buttonClassName = "sidebarButtons mainButtons";

    return (
        [
            {
                className:buttonClassName,
                content: (
                    <Link
                        exact
                        to={`/`}
                    >
                        Home
                    </Link>
                ),
                onClick: () => { props.setShowClock("show") },
            },
            {
                className:buttonClassName,
                content: (
                    <Link
                        exact
                        to={`/history`}
                    >
                        Reserve History
                    </Link>
                ),
                onClick: () => { props.setShowClock("hide") },
            },
            {
                onClick: () => {
                    props.getCanchaYhorario(...props.paramGetCanchaYhorario, props.admin);
                },
                className:buttonClassName,
                content: (<p>Refresh</p>),
            },
            {
                className:buttonClassName,
                content: (
                    <Link
                        exact
                        to={`/newreserve`}
                    >
                        New Reserve
                    </Link>
                ),
                onClick: () => { props.setShowClock("hide") },
            },
            {
                className:buttonClassName,
                content: (
                    <Link
                        exact
                        to={`/configpage`}
                    >
                        Page Config
                    </Link>
                ),
                onClick: () => { props.setShowClock("hide") },
            },
            {
                className:buttonClassName,
                content: (
                    <a
                        href={`${urlApiBase}`}
                        target="_blank"
                    >
                        Go to Page
                    </a>
                ),
            },
            {
                className:buttonClassName,
                content: (
                    <Link
                        exact
                        to={`/changepassword`}
                    >
                        Change Password
                    </Link>
                ),
                onClick: () => { props.setShowClock("hide") },
            },
            {
                className:buttonClassName,
                onClick: () => { props.handlerLogout(props.admin, props.setAdmin) },
                content: (<p>Logout</p>),
            },
        ]
    )
}

const fieldsLogin = (props) => {
    const classNameDiv = " ";
    const classNameLabel = "col-12 mb-3 form-label text-center text-uppercase text-dark align-self-center";
    const classNameInput = "col-12 text-center";
    const classNameInputError = "h5 text-danger my-3";
    const classNameInputContentAbsolut = "content-absolut form-content-back rounded shadow-lg";
    const classNameInputCardHeader = "card-header text-info text-center text-uppercase h4";
    const classNameInputCardBody = "card-body signin bg-light text-center rounded-bottom";

    const data = [
        {
            class:{
                classNameInputContentAbsolut: classNameInputContentAbsolut,
                classNameInputCardHeader: classNameInputCardHeader,
                classNameInputCardBody: classNameInputCardBody,
            },
            label: {
                content: "Ingrese su Password",
                htmlFor: "password",
                classNameLabel: classNameLabel
            },
            input: {
                type: "password",
                name: "password",
                id: "password",
                ref: props.register(props.validations.password),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput + " password",
                classNameInputError: classNameInputError
            }
        }
    ]
    return data;
}

const fieldsSignup = (props) => {
    const classNameDiv = "row justify-content-end mb-2";
    const classNameLabel = "col-3 m-0 form-label text-center text-uppercase text-dark align-self-center";
    const classNameInput = "col-9 text-left";
    const classNameInputError = "h6 text-danger my-2"
    const classNameInputContentAbsolut = "content-absolut form-content-back rounded shadow-lg";
    const classNameInputCardHeader = "card-header text-info text-center text-uppercase h4";
    const classNameInputCardBody = "card-body signin bg-light text-center rounded-bottom";

    const data = [
        {
            class:{
                classNameInputContentAbsolut: classNameInputContentAbsolut,
                classNameInputCardHeader: classNameInputCardHeader,
                classNameInputCardBody: classNameInputCardBody,
            },
            label: {
                content: "Nombre",
                htmlFor: "name",
                classNameLabel: classNameLabel
            },
            input: {
                type: "text",
                name: "name",
                id: "name",
                ref: props.register(props.validations.name),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput,
                classNameInputError: classNameInputError
            }
        },
        {
            label: {
                content: "Apellido",
                htmlFor: "lastname",
                classNameLabel: classNameLabel
            },
            input: {
                type: "text",
                name: "lastname",
                id: "lastname",
                ref: props.register(props.validations.lastname),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput,
                classNameInputError: classNameInputError
            }
        },
        {
            label: {
                content: "Password",
                htmlFor: "password",
                classNameLabel: classNameLabel
            },
            input: {
                type: "password",
                name: "password",
                id: "password",
                ref: props.register(props.validations.password),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput + " password",
                classNameInputError: classNameInputError
            }
        },
        {
            label: {
                content: "Key",
                htmlFor: "key",
                classNameLabel: classNameLabel
            },
            input: {
                type: "password",
                name: "key",
                id: "key",
                ref: props.register(props.validations.password),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput + " password",
                classNameInputError: classNameInputError
            }
        }

    ]
    return data;
}

const fieldsNewReserve = (register,handleSubmit,errors,validations,handlerChange,onSubmit,dataPage) => {
    const classNameDiv = "col-12 row justify-content-end mb-2";
    const classNameLabel = "col-3 m-0 pl-0 form-label text-center text-uppercase text-dark align-self-center";
    const classNameSelect = "col-12 form-control text-capitalized text-center p-0";
    const classNameInput = "col-9 text-left";
    const classNameInputError = "h6 text-danger my-2"
    const classNameCard = "col-12 col-md-9 col-lg-6 newreserve rounded shadow-lg px-0";
    const classNameCardHeader = "card-header text-ligth bg-primary text-center text-uppercase h5";
    const classNameCardBody = "card-body bg-light text-center rounded-bottom";

    const data = [
        {
            card: "New Reserve",
            content: "",
            onSubmit: handleSubmit(onSubmit),
            component: [
                {
                    type: "select",
                    class:{
                        classNameCard: classNameCard,
                        classNameCardHeader: classNameCardHeader,
                        classNameCardBody: classNameCardBody,
                    },
                    label: {
                        content:"Cancha",
                        htmlFor: "cancha",
                        classNameLabel: classNameLabel + " mb-2",
                        classNameLabelContainer: "row w-100"
                    },
                    select: {
                        name: "cancha",
                        id: "cancha",
                        ref: register(validations.cancha),
                        classNameDiv: "col-6 d-flex flex-column",
                        classNameSelect: classNameSelect,
                        classNameInputError: classNameInputError
                    },
                    options: [dataPage.map(cancha => {return cancha.number})],
                    onChange: handlerChange,
                    errors: errors
                },
                {
                    type: "select",
                    label: {
                        content:"Horarios",
                        htmlFor: "horarios",
                        classNameLabel: classNameLabel + " mb-2"
                    },
                    select: {
                        name: "horarios",
                        id: "horarios",
                        ref: register(validations.horarios),
                        classNameDiv: "col-6 d-flex flex-column",
                        classNameSelect: classNameSelect,
                        classNameInputError: classNameInputError
                    },
                    options: dataPage.map(cancha => {return cancha.options}),
                    onChange: handlerChange,
                    errors: errors
                },
                {
                    type: "input",
                    label: {
                        content: "Nombre",
                        htmlFor: "name",
                        classNameLabel: classNameLabel
                    },
                    input: {
                        type: "text",
                        name: "name",
                        id: "name",
                        ref: register(validations.name),
                        classNameDiv: classNameDiv + " mt-5",
                        classNameInput: classNameInput,
                        classNameInputError: classNameInputError
                    },
                    options: [],
                    onChange: handlerChange,
                    errors: errors
                },
                {
                    type: "input",
                    label: {
                        content: "Apellido",
                        htmlFor: "lastname",
                        classNameLabel: classNameLabel
                    },
                    input: {
                        type: "text",
                        name: "lastname",
                        id: "lastname",
                        ref: register(validations.lastname),
                        classNameDiv: classNameDiv,
                        classNameInput: classNameInput,
                        classNameInputError: classNameInputError
                    },
                    options: [],
                    onChange: handlerChange,
                    errors: errors
                },
                {
                    type: "input",
                    label: {
                        content: "Email",
                        htmlFor: "email",
                        classNameLabel: classNameLabel
                    },
                    input: {
                        type: "email",
                        name: "email",
                        id: "email",
                        ref: register(validations.email),
                        classNameDiv: classNameDiv,
                        classNameInput: classNameInput,
                        classNameInputError: classNameInputError
                    },
                    options: [],
                    onChange: handlerChange,
                    errors: errors
                },
                {
                    type: "input",
                    label: {
                        content: "Telefono",
                        htmlFor: "telefono",
                        classNameLabel: classNameLabel
                    },
                    input: {
                        type: "text",
                        name: "telefono",
                        id: "telefono",
                        ref: register(validations.telefono),
                        classNameDiv: classNameDiv,
                        classNameInput: classNameInput,
                        classNameInputError: classNameInputError
                    },
                    options: [],
                    onChange: handlerChange,
                    errors: errors
                }
            ]
        }
    ]
    return data;
}

const cardPages = (register,handleSubmit,errors,validations,handlerChange,onSubmit,dataPage) => {

    const classNameDiv = "row mb-2";
    const classNameLabel = "col-9 m-0 form-label text-left text-capitalized text-dark align-self-center";
    const classNameInput = "col-3 text-left";
    const classNameSelect = "form-control text-capitalized text-left";
    const classNameInputError = "h6 text-danger my-2"
    const classNameCard = "rounded shadow";
    const classNameCardHeader = "card-header text-light bg-primary p-2";
    const classNameCardBody = "card-body d-none bg-light text-center rounded-bottom";


    const data = [
        {
            card: "cancha_amount",
            content: "Cantidad de Canchas",
            dataPage: dataPage.canchas.cantidad,
            class: {
                classNameCard: classNameCard,
                classNameCardHeader: classNameCardHeader,
                classNameCardBody: classNameCardBody
            },
            component: [
                {
                    type: "input",
                    label: {
                        content:"Agregar o Quitar canchas",
                        htmlFor: "cancha_amount",
                        classNameLabel: classNameLabel
                    },
                    input: {
                        type: "number",
                        name: "cancha_amount",
                        id: "cancha_amount",
                        ref: register(validations.canchaamount),
                        classNameDiv: classNameDiv,
                        classNameInput: classNameInput,
                        classNameInputError: classNameInputError
                    },
                    options: [],
                    onChange: handlerChange,
                    errors: errors
                }
            ],
            onSubmit: onSubmit.modifyCanchaYhorario,
        },
        {
            card: "horarios",
            content: "Horario de ",
            dataPage: `${dataPage.horarios[0]} a ${dataPage.horarios[dataPage.horarios.length - 1]}`,
            class: {
                classNameCard: classNameCard,
                classNameCardHeader: classNameCardHeader,
                classNameCardBody: classNameCardBody
            },
            component: [
                {
                    type: "select",
                    select: {
                        name: "accion",
                        id: "accion",
                        ref: register(validations.accion),
                        classNameDiv: classNameDiv,
                        classNameSelect: classNameSelect,
                        classNameInputError: classNameInputError
                    },
                    options: ["Agregar","Quitar"],
                    onChange: handlerChange,
                    errors: errors
                },
                {
                    type: "input",
                    label: {
                        content:"Introduzca un horario a modificar",
                        htmlFor: "horarios",
                        classNameLabel: classNameLabel
                    },
                    input: {
                        type: "text",
                        name: "horarios",
                        id: "horarios",
                        placeholder: "ej: 15:00",
                        ref: register(validations.horarios),
                        classNameDiv: classNameDiv,
                        classNameInput: classNameInput,
                        classNameInputError: classNameInputError
                    },
                    options: [],
                    onChange: handlerChange,
                    errors: errors
                },
            ],
            onSubmit: onSubmit.modifyCanchaYhorario,
        }
    ]
    return data;
}

const fieldsChangepassword = (register,validations) => {
    const classNameDiv = "col-12 col-sm-9 col-md-9 col-lg-9 mx-auto";
    const classNameLabel = "col-12 mb-3 form-label text-center text-uppercase text-dark h6 align-self-center";
    const classNameInput = "col-12 text-center";
    const classNameInputError = "h5 text-danger my-3";
    const classNameInputContentAbsolut = "col-12 col-md-9 col-lg-6 rounded shadow-lg px-0";
    const classNameInputCardHeader = "card-header bg-primary text-ligth text-center text-uppercase h4";
    const classNameInputCardBody = "card-body changepassword bg-light text-center p-5 rounded-bottom";

    const data = [
        {
            class:{
                classNameInputContentAbsolut: classNameInputContentAbsolut,
                classNameInputCardHeader: classNameInputCardHeader,
                classNameInputCardBody: classNameInputCardBody,
            },
            label: {
                content: "Insert your old password",
                htmlFor: "oldpassword",
                classNameLabel: classNameLabel
            },
            input: {
                type: "password",
                name: "oldpassword",
                id: "oldpassword",
                ref: register(validations.password),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput + " password",
                classNameInputError: classNameInputError
            }
        },
        {
            label: {
                content: "Insert a new password",
                htmlFor: "newpassword",
                classNameLabel: classNameLabel
            },
            input: {
                type: "password",
                name: "newpassword",
                id: "newpassword",
                ref: register(validations.password),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput + " password",
                classNameInputError: classNameInputError
            }
        },
        {
            label: {
                content: "Repeat a new password",
                htmlFor: "repeatnewpassword",
                classNameLabel: classNameLabel
            },
            input: {
                type: "password",
                name: "repeatnewpassword",
                id: "repeatnewpassword",
                ref: register(validations.password),
                classNameDiv: classNameDiv,
                classNameInput: classNameInput + " password",
                classNameInputError: classNameInputError
            }
        }
    ]
    return data;
}

export {
    dataButtons,
    fieldsSignup,
    fieldsLogin,
    cardPages,
    fieldsNewReserve,
    fieldsChangepassword
}
import {urlApiBase} from "../functions";

const dataButtons = (props) => {
    return (
        [
            {
                className:
                    "text-capitalize mb-0 mx-2 align-self-center font-weight-bold",
                datatoggle: "tooltips",
                title: "Click para resfrescar las reservas",
                onClick: () => {
                    props.getCanchaYhorario(...props.paramGetCanchaYhorario);
                },
                content: "Refresh",
                icon: <i className="fas fa-sync-alt text-success ml-1"></i>,
            },
            {
                className: "text-capitalize mb-0 mx-2 font-weight-bold",
                datatoggle: "modal",
                datatarget: "#exampleModal",
                content: "New Reserve",
                icon: <i className="fas fa-plus text-success ml-1"></i>,
            },
            {
                className: "text-capitalize mb-0 mx-2 font-weight-bold",
                content: (
                    <a className="text-reset" href={urlApiBase + "/admin"}>
                        Change Password
                    </a>
                ),
            },
            {
                className: "text-capitalize mb-0 mx-2 font-weight-bold",
                content: (
                    <a
                        className="text-reset"
                        href={`${urlApiBase}/admin/logout`}
                    >
                        Logout
                    </a>
                ),
            },
        ]
    )
}

const navLinks = () => {
    const dataRepeat = {
        className:"nav-link dashboard-nav-link font-weight-bold",
        activeClassName:"dashboard-main-nav-active",
    };

    return (
        [
            {
                to:"/admin",
                content: "Home",
                ...dataRepeat
            },
            {
                to:"/admin/history",
                content: "History",
                ...dataRepeat
            }
        ]
    )
}

const getInfo = () => {
    const info = "Esta app fue creada sobre la marcha ya que la habia comenzado para practicar un deploy en el servidor de heroku, por lo tanto el proceso de desarrollo posterior no fue en forma ordenada y aun no esta terminada por lo que faltan algunas funciones y el codigo no esta limpio!";
    return info
}

const getInfoApp = () => {
    const info = `<h6 class="text-info">OBJETIVO:</h6>
     <p>Crear una pagina en la cual el usuario pueda reservar una cancha y un horario, una en la cual el administrador pueda ver las reservas e interactuar con las mismas.<p>
     <h6 class="text-info">FUNCIONES PAGINA:</h6>
     <p>*Al reservar una cancha se recibe un mail con una confirmacion de la reserva y los datos</p>
     <p>*FALTA: envio de whatsapp</p>
     <h6 class="text-info">FUNCIONES APP:</h6>
     <p>*Obtiene las reservas de la base de datos.</p>
     <p>*Los relojes comienzan automaticamente cuando sea la hora de la reserva.</p>
     <p>*Refresh: consulta las reservas a la BD</p>
     <p>*New Reserve: Crea una nueva reserva desde el admin.</p>
     <p>*Change Password:...</p>
     <p>*Logout:...</p>
     <p>*Icono Power: detecta si hay internet(cambia de color)</p>
     <p>*History: Muestra el historial de reserva</p>
     <p>*FALTA: Cancelacion automatica de la reserva si no se abona la misma. `;
    return info;
}

export {
    dataButtons,
    navLinks,
    getInfo,
    getInfoApp
}
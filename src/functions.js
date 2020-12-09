module.exports = {

    urlBase: "https://api-futbol5.herokuapp.com/api",

    responseSuccess: (response) => {
        return (
        `<div class="modal-content">
            <div class="modal-header bg-success">
                <h5
                    class="modal-title font-weight-bold"
                    id="exampleModalLabel"
                >
                    ${response.meta.msg}
                </h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-12">
                    <h5 class="text-center text-uppercase text-primary">Cancha N° ${response.data.cancha}  -  Horario ${response.data.horario}</h5>
                    <p class="text-center font-weight-bold my-5">
                        Tus Datos: <span class="text-muted font-weight-normal">${response.data.nombre + " " + response.data.apellido} - ${response.data.email} - ${response.data.telefono} - Hora y Fecha de la reserva : ${response.data.createdAt}</span>
                    </p>
                    <p class="mt-3 p-3 bg-warning text-center rounded">
                        <span class="text-danger text-center"> IMPORTANTE! </span>
                        A partir de este momento tiene 1 hora para señar la cancha, de lo contrario la reserva será cancelada automaticamente por el sistema.
                    </p>
                </div>
                <div class="col-12 text-right">
                        <button
                            class="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Cerrar
                        </button>
                </div>
            </div>
        </div>`
        )
    },
    countDown: (id, min) => {
        console.log(id)
        let hora = 1;
        let minutos = min;
        let segundos = 0;
        const showHora = document.querySelector(`.contador_cancha.id${id} .hora`);
        const showMinutos = document.querySelector(`.contador_cancha.id${id} .minutos`);
        const showSegundos = document.querySelector(`.contador_cancha.id${id} .segundos`);
        const conteo = setInterval(() => {
            showHora.innerHTML = hora === 1 ? `0${hora}` : `${hora}${hora}`;
            showMinutos.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
            showSegundos.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
            if(hora > 0){
                hora = 0
                minutos = 0
            } else {
                if(minutos !== 0 && segundos === 0){
                    minutos--
                }
            }

            if(segundos === 0){
                segundos = 20
            }

            if(showHora.innerText === "00" && showMinutos.innerText === "00" && showSegundos.innerText === "00"){
                clearInterval(conteo);
                document.querySelector(`.contador_cancha.id${id} .content`).classList.toggle("d-none")
                document.querySelector(`.contador_cancha.id${id}`).classList.remove("bg-primary");
                document.querySelector(`.contador_cancha.id${id}`).classList.add("bg-success");
            }
            segundos--
        }, 1000)
    },

    getDate: () => {
        const date = new Date();
        const monthName = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const hora = date.getHours()
        const minutos = date.getMinutes()
        const segundos = date.getSeconds()
        const time = `${hora}:${("0" + Math.floor(minutos)).slice(-2)}:${("0" + Math.floor(segundos)).slice(-2)}`
        const newDate = `${monthName[month]} ${day} ${year} ${time}`
        return {newDate, time};
    },

    getTime: (param) => {
        let now = new Date();
        let remainTime = (new Date(param) - now + 1000) / 1000;
        let remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
        let remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2);
        let remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2);

        return {
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours
        }
    },

    colorStart: (color) => {
        color.classList.remove("bg-success");
        color.classList.add("bg-primary");
    },

    colorFinish: (color) => {
        color.classList.remove("bg-primary");
        color.classList.add("bg-danger");
    },

    setClockStart: (time) => {
        const now = new Date();
        const remainTimeToReserve = (new Date(`Dec 4 2020 ${time.slice(0,5)}`) - now + 1000) / 1000;
        return remainTimeToReserve;
    },

    dataInputs: (props) => {
        const data = [
            {
                label:"Nombre",
                type:"text",
                name:"nombre",
                validacion: props.validacion.nombre,
                register: props.register,
                errors: props.errors.nombre
            },
            {
                label:"Apellido",
                type:"text",
                name:"apellido",
                validacion: props.validacion.apellido,
                register: props.register,
                errors: props.errors.apellido
            },
            {
                label:"Email",
                type:"email",
                name:"email",
                validacion: props.validacion.email,
                register: props.register,
                errors: props.errors.email
            },
            {
                label:"Telefono",
                type:"number",
                name:"telefono",
                validacion: props.validacion.telefono,
                register: props.register,
                errors: props.errors.telefono
            },
        ];
        return data;
    },

    dataSelect: (props) => {
        const data = [
            {
                htmlFor: "Cancha",
                id: "cancha",
                name: "cancha",
                register: props.register,
                validacion: props.validacion.cancha,
                selectCancha: props.selectCancha,
                data: props.canchaYhorario,
                errors: props.errors.cancha
            },
            {
                htmlFor: "Horario",
                id: "horario",
                name: "horario",
                register: props.register,
                validacion: props.validacion.horario,
                data: props.horario,
                errors: props.errors.horario
            },
        ]
        return data;
    },

    dataLinks: () => {
        const links = ["Home", "Instalaciones", "Cumpleaños", "Escuelita", "Promociones"]
        return links;
    }

}
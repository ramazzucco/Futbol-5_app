const urlApiProd = "https://api-futbol5.herokuapp.com";
const urlApiDev = "http://localhost:3000";
const urlAppProd = "https://futbol5-app.herokuapp.com";
const urlAppDev ="http://localhost:5000";
const protocol = window.location.protocol;
const urlApiBase = protocol === "http:" ? urlApiDev : urlApiProd;
const urlAppBase = protocol === "http:" ? urlAppDev : urlAppProd;

module.exports = {

    urlApiBase: urlApiBase,

    urlAppBase: urlAppBase,

    countDown: (cancha, paramHora, paramMinutos, paramSegundos) => {

        let hora = paramHora;
        let minutos = paramMinutos;
        let segundos = paramSegundos;

        const showHora = document.querySelector(`.clock${cancha} .hora`);
        const showMinutos = document.querySelector(`.clock${cancha} .minutos`);
        const showSegundos = document.querySelector(`.clock${cancha} .segundos`);

        const conteo = setInterval(() => {

            if(showHora !== null && showMinutos !== null && showSegundos !== null){

                showHora.innerHTML = hora === 1 ? `0${hora}` : `${hora}${hora}`;
                showMinutos.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
                showSegundos.innerHTML = segundos < 10 ? `0${segundos}` : segundos;

                if(hora > 0){
                    hora = 0
                    minutos = 59
                } else {
                    if(minutos !== 0 && segundos === 0){
                        minutos--
                    }
                }

                if(segundos === 0){
                    segundos = 59
                }

                if(showHora.innerText === "00" && showMinutos.innerText === "00" && showSegundos.innerText === "00"){
                    clearInterval(conteo);
                    document.querySelector(`.clock${cancha}`).classList.remove("cube-front-before");
                    document.querySelector(`.clock${cancha}`).classList.remove("cube-back-before");
                    document.querySelector(`.clock${cancha}`).classList.remove("bg-success");
                    document.querySelector(`.clock${cancha}`).classList.add("bg-danger");
                }

                segundos--

            }

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

    getRemainTime: (time) => {
        const date = new Date();
        const monthName = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const remainTime = (new Date(`${monthName[month]} ${day} ${year} ${time.slice(0,5)}`) - date + 1000) / 1000;
        const remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
        const remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2);
        return {
            remainTime,
            remainSeconds,
            remainMinutes
        }
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
    },

}
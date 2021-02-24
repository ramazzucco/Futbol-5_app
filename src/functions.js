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

}
import React, { useState } from "react";
import { qS, qSall, urlapi } from "../../../functions";
import "./login.css";

export default function Login(props) {
    const [datalogin, setDatalogin] = useState({});
    const [stylefullfield] = useState({
        width: "auto",
        top: "-35%",
        left: "15%",
        transform: "translate(-20%,-20%)",
        height: "1.6rem",
        backgroundColor: "#343A40",
        zIndex: "10",
    });
    const [ showpass, setShowpass ] = useState(false)

    const handlerSubmit = async (e) => {
        e.preventDefault();
        qS(".img-presentation").classList.add("init");
        qS(".forms").classList.add("init");

        const url = `${urlapi}/access/login`;
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datalogin)
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && response.error) {
            response.data.forEach((error) => {
                const errorElement = `
                <p class='text-danger pl-2'>
                    <i class='fas fa-exclamation-circle mr-3'></i>
                    ${error.msg}
                </p>`;

                qS(`form#login .error.${error.param === 'name' ? 'user' : error.param}`).innerHTML = errorElement;
            });
        } else {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            response.user.time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;

            localStorage.setItem("admin", JSON.stringify(response.user));
            localStorage.setItem("init", JSON.stringify(response.user));

            props.setAdmin(response.user);
        }

        if(response) {
            const imgpresentation = qS('.img-presentation');
            const forms = qS('.forms');

            if(imgpresentation && forms){
                imgpresentation.classList.remove('init');
                forms.classList.remove('init');
            }
        }
    };

    const handlerCancel = (idform, iderror) => {
        qSall(`form#${idform} .error${iderror ? iderror : ""}`).forEach(
            (error) => {
                if (error.innerHTML !== "") {
                    error.innerHTML = "";
                }
            }
        );
        setDatalogin({});
    };

    const handlerChange = (e) => {
        qSall('.login .error').forEach( error => {
            if(error.innerHTML !== '') error.innerHTML = '';
        })
        handlerCancel("login", `.${[e.target.name]}`);
        setDatalogin({ ...datalogin, [e.target.name]: e.target.value });
    };

    const showRegister = () => {
        qS(".access .login").classList.toggle("show");
        qS(".access .register").classList.toggle("show");
    };

    return (
        <div className="login show col-11 col-sm-8 col-lg-6 bg-dark shadow">
            <h1 className="text-white text-center">Login</h1>
            <form id="login" className="col-12 p-0" onSubmit={handlerSubmit}>
                <div className="group">
                    <label
                        htmlFor="name"
                        className="text-white"
                        style={datalogin.name ? stylefullfield : {}}
                    >
                        Ingrese su usuario
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="text-white"
                        onChange={handlerChange}
                    />
                    <i className="fas fa-user position-absolute text-light"></i>
                </div>
                <div className="error user"></div>

                <div className="group">
                    <label
                        htmlFor="password"
                        className="text-white"
                        style={datalogin.password ? stylefullfield : {}}
                    >
                        Ingrese su password
                    </label>
                    <input
                        type={showpass ? 'text' : 'password'}
                        name="password"
                        id="password"
                        required
                        className="text-white"
                        onChange={handlerChange}
                    />
                        <i className="fas fa-lock position-absolute text-light"></i>
                        <i className={`far fa-eye mr-2 text-white ${showpass ? "d-none" : ""}`} onClick={() => setShowpass(!showpass)}></i>
                        <i className={`far fa-eye-slash mr-2 text-white ${showpass ? "" : "d-none"}`} onClick={() => setShowpass(!showpass)}></i>
                </div>
                <div className="error password"></div>

                <div className="d-flex justify-content-center align-items-center mt-3">
                    <button
                        type="button"
                        onClick={showRegister}
                        className="border-0 bg-transparent text-white"
                    >
                        Crear un nuevo admin
                    </button>
                </div>
                <div className="buttons d-flex flex-wrap justify-content-center mt-5">
                    <button
                        type="submit"
                        className="send btn btn-light mr-md-4 mb-2 mb-md-0 col-12 col-sm-10 col-md-4"
                    >
                        Send
                    </button>
                    <button
                        type="reset"
                        onClick={() => handlerCancel("login")}
                        className="cancel btn btn-outline-light col-12 col-sm-10 col-md-4"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

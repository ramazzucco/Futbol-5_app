import React, { useState } from "react";
import { qS, qSall, urlapi } from "../../../functions";
import './register.css';

export default function Register(props) {
    const [dataregister, setDataregister] = useState({});
    const [stylefullfield] = useState({
        width: "auto",
        top: "-35%",
        left: "15%",
        transform: "translate(-20%,-20%)",
        height: "1.6rem",
        backgroundColor: "white",
        zIndex: "10",
    });
    const [ showpass, setShowpass ] = useState(false)

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const url = `${urlapi}/access/register`;
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataregister),
        };

        const request = await fetch(url, options);
        const response = await request.json();

        console.log(response);

        if (response && response.error) {
            response.data.forEach((error) => {
                const errorElement = `
                <p class='text-danger pl-2'>
                    <i class='fas fa-exclamation-circle mr-3'></i>
                    ${error.msg}
                </p>`;

                qS(`form#register .error.${error.param === 'name' ? 'user': error.param}`).innerHTML = errorElement;
            });
        }

        if (response.user) {
            props.setAdmin(response.user);
            localStorage.setItem("admin", JSON.stringify(response.user));
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
        setDataregister({});
    };

    const handlerChange = (e) => {
        qSall('.register .error').forEach( error => {
            if(error.innerHTML !== '') error.innerHTML = '';
        })
        setDataregister({ ...dataregister, [e.target.name]: e.target.value });
    };

    const showLogin = () => {
        qS(".access .login").classList.toggle("show");
        qS(".access .register").classList.toggle("show");
    };

    return (
        <div className="register col-11 col-sm-8 col-lg-6 bg-white shadow">
            <h1 className="text-dark text-center">Register</h1>
            <form id="register" className="col-12 p-0" onSubmit={handlerSubmit}>
                <div className="group">
                    <label
                        htmlFor="name"
                        style={dataregister.name ? stylefullfield : {}}
                    >
                        Nombre de usuario
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        onChange={handlerChange}
                    />
                    <i className="fas fa-user position-absolute text-dark"></i>
                </div>
                <div className="error user"></div>

                <div className="group">
                    <label
                        htmlFor="password"
                        style={dataregister.password ? stylefullfield : {}}
                    >
                        Password
                    </label>
                    <input
                        type={showpass ? 'text' : 'password'}
                        name="password"
                        id="password"
                        required
                        onChange={handlerChange}
                    />
                        <i className="fas fa-lock position-absolute text-dark"></i>
                        <i className={`far fa-eye mr-2 ${showpass ? "d-none" : ""}`} onClick={() => setShowpass(!showpass)}></i>
                        <i className={`far fa-eye-slash mr-2 ${showpass ? "" : "d-none"}`} onClick={() => setShowpass(!showpass)}></i>
                </div>
                <div className="error password"></div>

                <div className="group">
                    <label
                        htmlFor="key"
                        style={dataregister.key ? stylefullfield : {}}
                    >
                        key
                    </label>
                    <input
                        type='password'
                        name="key"
                        id="key"
                        required
                        onChange={handlerChange}
                    />
                        <i className="fas fa-key position-absolute text-dark"></i>
                </div>
                <div className="error key"></div>

                <div className="d-flex justify-content-center align-items-center mt-3">
                    <button
                        type="button"
                        onClick={showLogin}
                        className="border-0 bg-transparent text-dark"
                    >
                        Volver al login
                    </button>
                </div>
                <div className="buttons d-flex flex-wrap justify-content-center mt-5">
                    <button
                        type="submit"
                        className="send btn btn-dark mr-md-4 mr-md-4 mb-2 mb-md-0 col-12 col-sm-10 col-md-4"
                    >
                        Send
                    </button>
                    <button
                        type="reset"
                        onClick={() => handlerCancel("register")}
                        className="cancel btn btn-outline-dark col-12 col-sm-10 col-md-4"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

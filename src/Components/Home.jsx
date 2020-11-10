import React from 'react'
import { Link } from 'react-router-dom';
import fondoCancha from "../assets/fondocancha.jpg";
import "../css/Home.css";

// Components.
import FormReservar from './FormReservar';

export default function Home() {
    return (
        <div className="home">
            <div className="banner">
                <img src={fondoCancha}
                    alt="fondo cancha de futbol"
                    className="img-fluid"
                />
                <h1 className="text-capitalize text-center text-white main-title w-100">
                    Reserva cancha y horario, AHORA!
                </h1>
                <button className="btn btn-dark main-button"
                    data-toggle="modal"
                    data-target="#exampleModal">
                        Reservar
                </button>
            </div>
            <div className="p-5 pt-0 instalaciones">
                <h1 className="text-center mb-5 title border-bottom border-secondary pb-3">
                    <Link to="/instalaciones">Visite Nuestras Instalaciones</Link>
                </h1>
                <div className="row content">
                    <div className="images-header col-12 col-lg-4">
                        <div className="Canchas">
                            <h5 className="text-secondary">Canchas</h5>
                            <p>
                                Nuestras canchas de futbol estan equipadas con el mejor cesped sintetico del mercado.
                            </p>
                        </div>
                        <div className="Vestuarios">
                            <h5 className="text-secondary">Vestuarios</h5>
                            <p>Contamos con vesturarios con duchas individuales, sector para cambiarse y mas.</p>
                        </div>
                        <div className="Parrillas y Bar">
                            <h5 className="text-secondary">Parrillas y Bar</h5>
                            <p>
                                Contamos con un sector de parrillas y mesas para disfrutar de un buen asado despues del partido.
                                Ademas tambien tenemos un bar con buffet para poder picar y beber algo con amigos.
                            </p>
                        </div>
                    </div>
                    <div className="images col-lg-8 d-flex flex-wrap justify-content-between">
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                    </div>
                </div>
            </div>
            <div className="p-5 cumpleaños">
                <h1 className="text-center mb-5 title border-bottom border-secondary pb-3">
                    <Link to="/cumpleaños">Festeja tu cumpleaños con nosotros</Link>
                </h1>
                <div className="row content">
                    <div className="images col-lg-8 d-flex flex-wrap justify-content-between">
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                    </div>
                    <div className="images-header col-12 col-lg-4">
                        <p>
                            Contamos con una gran experiencia y trayectoria en organizar cumpleaños deportivos infantiles tanto para niños como cumpleaños mixtos. Llevamos más de 80 cumpleaños realizados!! Los cumpleaños en (MARCA) se caracterizan por brindarle a nuestros clientes , la exclusividad total del predio durante el evento, esto quiere decir que solo el cumpleañero y sus invitados podrán usar las instalaciones.
                            <br/>
                            <br/>
                            A la hora de elegir el tipo de evento a organizar, las opciones son muy variadas , dependiendo si el cumpleaños es mixto o solo para varones. Contamos con animadoras para niñas, referees, profes y muchas actividades que contemplan la integración de todos.
                            El Pack básico del cumpleaños incluye 2 hs de cancha de futbol, snack y bebidas libres y 2 panchos por chico, sin embargo disponemos varias alternativas que podrían incluir desde panchos, hamburguesas, pizzas etc . El cumpleaños se organiza y arma a la medida de quien lo lleve a cabo, con al menos 2 personas enfocadas en servir, asistir y mantener limpio el lugar.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-5 escuelita">
                <h1 className="text-center mb-5 title border-bottom border-secondary pb-3">
                    <Link to="/escuelita">Escuelita de Futbol Infantil</Link>
                </h1>
                <div className="row content">
                    <div className="images-header col-12 col-lg-4">
                    <p>
                        La escuela de fútbol es un proyecto formativo desarrollado bajo el paraguas del complejo (MARCA). Nació para ofrecer a niños y niñas su primer contacto con el fútbol de una manera lúdica, utilizando el fútbol como medio de formación, en un clima que garantice un entorno favorable para potenciar valores como la amistad, el respeto, la unidad, la solidaridad, la superación, la disciplina y todos los méritos necesarios para el desarrollo de este deporte.
                    </p>
                    </div>
                    <div className="images col-lg-8 d-flex flex-wrap justify-content-between">
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                        <i className="fa fa-images fa-10x"></i>
                    </div>
                </div>
            </div>
            < FormReservar />
    </div>
    )
}

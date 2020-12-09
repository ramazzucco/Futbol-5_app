import React from 'react';
import { Route } from "react-router-dom";


//Components
import Home from './Home';
import Instalaciones from "./Instalaciones";
import Cumpleaños from "./Cumpleaños";
import Escuelita from "./Escuelita";
import Promociones from "./Promociones";

export default function Main() {
    return (
        <React.Fragment>
            <Route exact path="/" component={ Home } />
            <Route exact path="/instalaciones" component={ Instalaciones } />
            <Route exact path="/cumpleaños" component={ Cumpleaños } />
            <Route exact path="/escuelita" component={ Escuelita } />
            <Route exact path="/promociones" component={ Promociones } />
        </React.Fragment>
    )
}

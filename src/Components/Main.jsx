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
            <Route path="/instalaciones" component={ Instalaciones } />
            <Route path="/cumpleaños" component={ Cumpleaños } />
            <Route path="/escuelita" component={ Escuelita } />
            <Route path="/promociones" component={ Promociones } />
        </React.Fragment>
    )
}

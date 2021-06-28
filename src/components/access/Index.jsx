import React from 'react';
import { qS, urlapi } from '../../functions';
import './index.css';

// Components.
import Login from './login/Login';
import Register from './register/Register';

export default function Index(props) {

    const showforms = () => {
        if(!props.admin){
            const imgpresentation = qS('.img-presentation');
            const forms = qS('.forms');

            if(imgpresentation && forms){
                imgpresentation.classList.remove('init');
                forms.classList.remove('init');
            }
        }
    }

    return (
        <div className="access d-flex col-12 bg-success overflow-hidden">
            <div className="img-presentation init" onClick={showforms}>
                <img
                    src={`${urlapi}/images/fondo_maradona.png`}
                    alt='maradona.png'
                    width='50%'
                />
            </div>
            <div className="forms init">
                <Register
                    admin={props.admin}
                    setAdmin={props.setAdmin}
                />
                <Login
                    admin={props.admin}
                    setAdmin={props.setAdmin}
                />
            </div>
        </div>
    )
}

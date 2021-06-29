import React from 'react'
import { useHistory } from 'react-router-dom';
import { modal, qS, urlapi } from '../../../functions';

export default function Menu(props) {

    const history = useHistory();

    const showMenu = () => {
        qS('.menu-toggle') && qS('.menu-toggle').classList.toggle('open');
        qS('.header .menu').classList.toggle('show');
    }

    const logout = async () => {
        const url = `${urlapi}/access/logout`;
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(props.admin),
        };

        const request = await fetch(url, options);
        const response = await request.json();

        console.log(response)

        if(response.logout){
            localStorage.removeItem('init');
            localStorage.removeItem('admin');
            props.setAdmin(null);
        }else{
            modal('failed','Lo sentimos', response.message);
        }
    };

    const buttonClick = (path) => {
        history.push(path);
        showMenu();
    }

    const refresh = () => {
        props.setRefresh(true);
    }

    const newReserve = () => {
        qS('.menu-toggle') && qS('.menu-toggle').classList.toggle('open');
        qS('.header .menu').classList.toggle('show');

        qS('body').classList.toggle('overflow-hidden');
        qS(".container-newreserve").classList.toggle("d-none");
    }

    return (
        <React.Fragment>
            <div className="menu-toggle first mr-auto" onClick={showMenu}>
                <i></i>
            </div>
            <div className={`menu col-8 col-md-6 col-lg-4 p-0 bg-second position-absolute`}>
                <div className='icons d-flex justify-content-center align-items-center p-4'>
                    <i
                        className="fas fa-home mx-2"
                        onClick={() => buttonClick('/app')}
                    ></i>
                    <i
                        title='Actualizar reservas'
                        className="fas fa-sync-alt mx-2"
                        onClick={refresh}
                    ></i>
                    <i
                        title='Ir a la pagina web'
                        className="fas fa-futbol mx-2"
                        onClick={() => history.push('/page')}
                    ></i>
                </div>
                <div className='buttons d-flex flex-column justify-content-center align-items-center'>
                    <button onClick={newReserve}>
                        <i className="fas fa-plus-square mr-3"></i>
                        New reserve
                    </button>
                    <button onClick={() => buttonClick('/app/history')}>
                        <i className="fas fa-history mr-3"></i>
                        Booking history
                    </button>
                    <button onClick={() => buttonClick('/app/statistics')}>
                        <i className="fas fa-chart-line mr-3"></i>
                        Statistics
                    </button>
                    <button onClick={() => buttonClick('/app/configpage')}>
                        <i className="fas fa-globe mr-3"></i>
                        Configure page
                    </button>
                    <button onClick={() => buttonClick('/app/configuration')}>
                        <i className="fas fa-cog mr-3"></i>
                        Configuration
                    </button>
                    {
                        props.admin.id === 1
                            ? (
                                <button onClick={() => buttonClick('/app/admins')}>
                                    <i className="fas fa-users mr-3"></i>
                                    Admins
                                </button>
                            )
                            : ''
                    }
                    <button onClick={logout}>
                        <i className="fas fa-sign-out-alt mr-3"></i>
                        Logout
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

import React from "react";
import { Route } from "react-router-dom";

//Components.
import Sidebar from "./Sidebar";
import Home from "./Home";
import History from "./History";
import Modal from "../Modal";
import Configpage from "./Configpage";
import Newreserve from "./Newreserve";
import Changepassword from "./Changepassword";

export default function DashboardMain(props){

    return (
        <React.Fragment>
            <Modal />
            <Sidebar
                admin={props.admin}
                setErrors={props.setErrors}
                setShowError={props.setShowError}
                setAdmin={props.setAdmin}
                setShowClock={props.setShowClock}
                switchMode={props.switchMode}
                setSwitchMode={props.setSwitchMode}
                handlerLogout={props.handlerLogout}
                setCreateAdmin={props.setCreateAdmin}
                getCanchaYhorario={props.getCanchaYhorario}
                paramGetCanchaYhorario={props.paramGetCanchaYhorario}
            />
            <Route exact path="/" >
                <Home
                    admin={props.admin}
                    loading={props.loading}
                    reserves={props.reserves}
                    switchMode={props.switchMode}
                    showInfoReserve={props.showInfoReserve}
                    cancelarReserva={props.cancelarReserva}
                    reservesOfTheDay={props.reservesOfTheDay}
                    setReservesOfTheDay={props.setReservesOfTheDay}
                />
            </Route>
            <Route  path="/history">
                <History
                    admin={props.admin}
                    switchMode={props.switchMode}
                    setReservesOfTheDay={props.setReservesOfTheDay}
                />
            </Route>
            <Route path="/newreserve">
                <Newreserve
                    admin={props.admin}
                    errors={props.errors}
                    reserves={props.reserves}
                    showError={props.showError}
                    setErrors={props.setErrors}
                    switchMode={props.switchMode}
                    setShowError={props.setShowError}
                    reservesOfTheDay={props.reservesOfTheDay}
                    setReservesOfTheDay={props.setReservesOfTheDay}
                />
            </Route>
            <Route path="/changepassword">
                <Changepassword
                    admin={props.admin}
                    setAdmin={props.setAdmin}
                    showPass={props.showPass}
                    errors={props.errors}
                    setErrors={props.setErrors}
                    showError={props.showError}
                    switchMode={props.switchMode}
                    setShowError={props.setShowError}
                />
            </Route>
            <Route  path="/configpage">
                <Configpage
                    admin={props.admin}
                    switchMode={props.switchMode}
                />
            </Route>
        </React.Fragment>
    );
}

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
                setAdmin={props.setAdmin}
                setShowClock={props.setShowClock}
                handlerLogout={props.handlerLogout}
                getCanchaYhorario={props.getCanchaYhorario}
                paramGetCanchaYhorario={props.paramGetCanchaYhorario}
            />
            <Route exact path="/" >
                <Home
                    admin={props.admin}
                    loading={props.loading}
                    reserves={props.reserves}
                    showInfoReserve={props.showInfoReserve}
                    cancelarReserva={props.cancelarReserva}
                    reservesOfTheDay={props.reservesOfTheDay}
                    setReservesOfTheDay={props.setReservesOfTheDay}
                />
            </Route>
            <Route  path="/history">
                <History
                    admin={props.admin}
                    setReservesOfTheDay={props.setReservesOfTheDay}
                />
            </Route>
            <Route path="/newreserve">
                <Newreserve
                    admin={props.admin}
                    reserves={props.reserves}
                />
            </Route>
            <Route path="/changepassword">
                <Changepassword
                    admin={props.admin}
                    showPass={props.showPass}
                />
            </Route>
            <Route  path="/configpage">
                <Configpage
                    admin={props.admin}
                />
            </Route>
        </React.Fragment>
    );
}

import React from "react";
import { Route } from "react-router-dom";

//Components.
import Home from "./Home";
import History from "./History";

export default function DashboardMain(props) {
    return (
        <React.Fragment>
            <Route exact path="/admin" >
                <Home
                    loading={props.loading}
                    reserves={props.reserves}
                    reservesOfTheDay={props.reservesOfTheDay}
                    showInfoReserve={props.showInfoReserve}
                    cancelarReserva={props.cancelarReserva}
                    // addMinutes={props.addMinutes}
                    // setAddMinutes={props.setAddMinutes}
                />
            </Route>
            <Route  path="/admin/history" component={History} />
        </React.Fragment>
    );
}

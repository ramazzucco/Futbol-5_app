import React, { useCallback, useEffect, useState } from "react";
import { hideMenu, modal, urlapi } from "../../../../functions";
import './admins.css';

// Compónents.
import Loadingdata from "../../../Loading/Loadingdata";

export default function Admins(props) {
    const [admins, setAdmins] = useState({});
    const [ nosession_elementDOM ] = useState(<span className='text-danger'>no sessions</span>)

    const getAdmins = useCallback(async () => {
        if(!admins.users){
            const url = `${urlapi}/access/admins`;
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(props.admin),
            };

            const request = await fetch(url, options);
            const response = await request.json();

            if (response && response.error) {
                modal("failed", "Lo sentimos !", response.message);
            } else {
                setAdmins(response.data);
            }
        }
    },[admins, props.admin]);

    useEffect(() => {
        if (!admins.users) getAdmins();
    }, [admins,getAdmins]);


    return (
        <div className="admins section bg-first p-4" onClick={hideMenu}>
            <div className="title text-left text-third mb-5">
                <h5>Admins list</h5>
                <i className="fas fa-sync-alt ml-3" onClick={() => setAdmins({})}></i>
                <hr className="bg-third w-100 mx-auto mt-2" />
            </div>
            <div className="content d-flex flex-column">
                {admins.users ? (
                    admins.users.map((admin, i) => {
                        return (
                            <div
                                className="d-flex flex-wrap justify-content-center align-items-center mb-3 px-4"
                                key={i}
                            >
                                <div
                                    className={`user col-12 col-md-6 p-4 d-flex flex-wrap
                                        ${admin.id === 1 ? 'bg-second text-third' : 'bg-third text-second'}
                                        ${!admin.token ? 'bg-rgba3' : ''}
                                    `}
                                    style={{ minHeight: "230px" }}
                                >
                                    <p className="col-12 py-2 bg-rgba3 text-first align-self-start">
                                        ADMIN
                                    </p>
                                    <div className="col-12 pr-5 d-flex">
                                        <ul className="col-4 col-xl-2 p-0 list-unstyled text-right mr-3">
                                            <li>id:</li>
                                            <li>user name:</li>
                                            <li>password:</li>
                                            <li>token:</li>
                                        </ul>
                                        <ul className="col-8 col-xl-10 p-0 list-unstyled text-left">
                                            <li>{admin.id}</li>
                                            <li>{admin.name}</li>
                                            <li className="text-truncate">
                                                {admin.password}
                                            </li>
                                            <li className="text-truncate">
                                                {admin.token ? admin.token : nosession_elementDOM}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className={`token col-12 col-md-6 p-4 d-flex flex-wrap
                                        ${admin.id === 1 ? 'bg-second text-third' : 'bg-third text-second'}
                                        ${!admin.token ? 'bg-rgba3' : ''}
                                    `}
                                    style={{ minHeight: "230px" }}
                                >
                                    <p className="col-12 py-2 bg-rgba3 text-first align-self-start">
                                        TOKEN
                                    </p>
                                    <div className="col-12 pr-5 d-flex">
                                        <ul className="col-4 col-xl-2 p-0 list-unstyled text-right mr-3">
                                            <li>user name:</li>
                                            <li>token:</li>
                                            <li>sessions:</li>
                                        </ul>
                                        <ul className="col-8 col-xl-10 p-0 list-unstyled text-left">
                                            <li>{admins.tokens[i] ? admins.tokens[i].name : nosession_elementDOM}</li>
                                            <li className="text-truncate">
                                                {admins.tokens[i] ? admins.tokens[i].token : nosession_elementDOM}
                                            </li>
                                            <li>{admins.tokens[i] ? admins.tokens[i].sessions : nosession_elementDOM}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <Loadingdata />
                )}
            </div>
        </div>
    );
}

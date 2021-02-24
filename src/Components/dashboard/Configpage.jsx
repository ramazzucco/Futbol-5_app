import React, { useEffect, useState } from 'react';
import { cardPageComponents } from "../../javascript/cardPageComponents";
import { showCardBody, handleErrors } from "../../javascript/cardPage";
import { getDataPage } from "../../javascript/servicesApi";

//Components.
import Loading from "../Loading";
import Cardpage from '../Cardpage';

export default function Configpage(props) {

    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ dataPage, setDataPage ] = useState([]);
    const [ dataPost, setDataPost ] = useState([]);

    useEffect(() => {
        getDataPage(props.admin, setDataPage, setLoading);
    },[]);

    const fieldsCardsPages = loading.reservesOfTheDay
        ? console.log("cargando datos...")
        : cardPageComponents(
            dataPage,
            props.switchMode,
            setDataPost,
            props.admin,
            dataPost,
            setDataPage,
            handleErrors,
        );

    showCardBody(setDataPost);

    return (
        <div className="container-fluid row">
            {
                loading.reservesOfTheDay
                    ? <Loading loading={loading} switchMode={props.switchMode}/>
                    : fieldsCardsPages.map(card => {
                        return (
                            <Cardpage
                                card={card}
                                dataPost={dataPost}
                                setDataPost={setDataPost}
                                switchMode={props.switchMode}
                            />
                        )
                    })
            }
        </div>
    )
}

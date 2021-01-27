import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import validations from "../../validations";
import {cardPages} from "../../javascript/constantes";
import {getDataPage, submitCanchaYhorario} from "../../javascript/servicesApi";

//Components.
import Loading from '../Loading';
import CardPage from '../CardPage';

export default function Configpage(props) {
    const { register, handleSubmit, errors } = useForm();
    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ dataPage, setDataPage ] = useState([]);
    const [ dataPost, setDataPost ] = useState([]);

    useEffect(() => {

        getDataPage(props.admin, setDataPage, setLoading);

    },[])

    const handlerChange = (e) => {
        setDataPost({user: props.admin,...dataPost,[e.target.name]: e.target.value})
    }

    const onSubmit = {

        modifyCanchaYhorario: (e) => {
            submitCanchaYhorario(e, dataPost, setDataPage);
        },

    }

    const fieldsCardsPages = loading.reservesOfTheDay
        ? console.log("cargando datos...")
        : cardPages(
            register,
            handleSubmit,
            errors,
            validations,
            handlerChange,
            onSubmit,
            dataPage,
            props.switchMode
        );

    return (
        <div className="container-fluid row">
            {
                loading.reservesOfTheDay
                    ? <Loading loading={loading}/>
                    : fieldsCardsPages.map(card => {
                        return (
                            <CardPage
                                data={card}
                                setDataPost={setDataPost}
                            />
                        )
                    })
            }
        </div>
    )
}

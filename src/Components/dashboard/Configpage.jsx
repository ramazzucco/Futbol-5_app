import React, { useEffect, useState } from 'react';
import {urlApiBase} from "../../functions";
import { useForm } from "react-hook-form";
import validations from "../../validations";
import {cardPages} from "../../javascript/constantes";

//Components.
import Loading from '../Loading';
import CardPage from '../CardPage';

export default function Configpage(props) {
    const urlApi = urlApiBase;
    const { register, handleSubmit, errors } = useForm();
    const [ loading, setLoading ] = useState({reservesOfTheDay: true});
    const [ dataPage, setDataPage ] = useState([]);
    const [ dataPost, setDataPost ] = useState([]);

    useEffect(() => {

        getDataPage();

    },[])

    const getDataPage = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props.admin),
        }
        fetch(`${urlApi}/api/page`, options)
            .then(res => res.json())
            .then(response => {
                setDataPage(response.data);
                setLoading({reservesOfTheDay: false})
                console.log(response.data);
            })
            .catch(error => console.log(error))
    }

    const handlerChange = (e) => {
        setDataPost({user: props.admin,...dataPost,[e.target.name]: e.target.value})
    }

    const onSubmit = {

        modifyCanchaYhorario: (e) => {
            e.preventDefault();

            const optionsPageFetch = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataPost),
            }

            fetch(`${urlApi}/api/page/modifycanchayhorario`, optionsPageFetch)
                .then(res => res.json())
                .then(response => {
                    setDataPage(response.data)
                    dataPost.cancha_amount
                        ? document.getElementById("cancha_amount").value = ""
                        : document.getElementById("horarios").value = ""
                })
                .catch(error => console.log(error))
        }
    }

    const fieldsCardsPages = loading.reservesOfTheDay
        ? console.log("cargando datos...")
        : cardPages(register,handleSubmit,errors,validations,handlerChange,onSubmit,dataPage);

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

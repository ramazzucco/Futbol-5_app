import React, { useEffect, useState } from "react";
import { modal, qS, qSall, urlapi } from "../../../../../functions";

// Components.
import Images from "../Images";
import Text from "../Text";

export default function Home(props) {
    const [home, setHome] = useState({});

    useEffect(() => {
        if (!home.text) setHome(props.home);
    }, [props.home, home]);

    const changeText = async () => {
        const url = `${urlapi}/page/text/home`;
        const data = {
            text: home.text,
            ...props.admin
        }

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && response.error){
            modal("failed", "Lo sentimos !", response.data.message);
        }else{
            setHome({
                text: response.data,
                sponsors: home.sponsors
            })
        }
    }

    const changeSponsor = async (e) => {
        const url = `${urlapi}/page/images/sponsors`;
        const formdata = new FormData();

        formdata.append('name', props.admin.name);
        formdata.append('token', props.admin.token);
        formdata.append('id', e.target.attributes.dataid.value);
        formdata.append('field', e.target.name);
        formdata.append('path', 'sponsors');
        formdata.append('file', e.target.files[0]);

        const options = {
           method: "POST",
           body: formdata,
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && response.error){
            qS(`img.${response.data[0].field}`).src = `${urlapi}/images/sin_imagen.jpg`;
            qS(`.home .error.${response.data[0].field}`).innerHTML = `<i class="far fa-times-circle text-third mr-3"></i>${response.data[0].message}`;
        }else{
            setHome({
                text: home.text,
                sponsors: response.data
            })
        }
    }

    const handlerChange = (e) => {

        qSall('.error').forEach( error => {
            if(error.innerHTML !== '') error.innerHTML = '';
        })

        if(e.target.name !== 'text'){
            const preview = document.querySelector(`img.${e.target.name}`);
            const file = document.getElementById(`${e.target.attributes.id.value}`).files[0];
            const reader = new FileReader();

            reader.onloadend = function () {
                preview.src = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                preview.src = "";
            }

            changeSponsor(e, e.target.attributes.dataid.value);
        }else{
            setHome({
                ...home,
                [e.target.name]: e.target.value
            })
        }
    };

    return (
        <div className={`home p-0 ${props.subnavactive === 'home' ? '' : 'd-none'}`}>

            <Text
                key={'main-text'}
                data={{
                    title: 'text',
                    value: home.text,
                    handlerChange: handlerChange,
                    changeFunction: changeText
                }}
            />

            <Images
                key={'sponsors'}
                data={home.sponsors}
                properties={{
                    title: 'sponsors',
                    errortitle: 'image',
                    handlerChange: handlerChange
                }}
            />

        </div>
    );
}

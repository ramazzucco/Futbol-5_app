import React, { useEffect, useState } from 'react';
import { modal, qS, urlapi } from '../../../../../functions';

// Components.
import Text from '../Text';
import Images from '../Images';

export default function Birthday(props) {
    const [ birthdays, setBirthdays ] = useState({});

    useEffect(() => {
        if (!birthdays.text) setBirthdays(props.birthdays);
    }, [props.birthdays, birthdays]);

    const submitImages = async (e) => {
        const url = `${urlapi}/page/images/birthdays`;
        const formdata = new FormData();

        formdata.append('name', props.admin.name);
        formdata.append('token', props.admin.token);
        formdata.append('id', e.target.attributes.dataid.value);
        formdata.append('field', e.target.name);
        formdata.append('path', 'birthdays');
        formdata.append('file', e.target.files[0]);

        const options = {
           method: "POST",
           body: formdata,
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && response.error){
            qS(`img.${response.data[0].field}`).src = `${urlapi}/images/sin_imagen.jpg`;
            qS(`.birthdays .error.${response.data[0].field}`).innerHTML = `<i class="far fa-times-circle text-third mr-3">
            </i>${response.data[0].message}`;
        }else{
            setBirthdays({
                ...birthdays,
                images: response.data
            })
        }
    }

    const handlerChange = (e) => {
        if(e.target.name.includes('birthdays')){
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

            submitImages(e);
        }else{
            setBirthdays({...birthdays, [e.target.name]: e.target.value});
        }
    }

    const changeText = async (e) => {
        const url = `${urlapi}/page/text/birthdays`;
        const data = {
            ...props.admin,
            birthdays: birthdays.text
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
            setBirthdays({...birthdays, text: response.data});
        }
    }

    return (
        <div className={`birthdays p-0 ${props.subnavactive === 'birthdays' ? '' : 'd-none'}`}>

            <Text
                key={'birthdays-text'}
                data={{
                    title: 'text',
                    value: birthdays.text,
                    handlerChange: handlerChange,
                    changeFunction: changeText
                }}
            />

            <Images
                key={'birthdays-images'}
                data={birthdays.images}
                properties={{
                    title: 'birthdays',
                    handlerChange: handlerChange
                }}
            />

        </div>
    )
}

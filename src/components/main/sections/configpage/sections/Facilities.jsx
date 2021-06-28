import React, { useEffect, useState } from 'react';
import { modal, qS, urlapi } from '../../../../../functions';

// Components.
import Images from '../Images';
import Text from '../Text';

export default function Facilities(props) {

    const [ facilities, setFacilities ] = useState({});

    useEffect(() => {
        if (!facilities.fields) setFacilities(props.facilities);
    }, [props.facilities, facilities]);

    const submitImages = async (e) => {
        const url = `${urlapi}/page/images/facilities`;
        const formdata = new FormData();

        formdata.append('name', props.admin.name);
        formdata.append('token', props.admin.token);
        formdata.append('id', e.target.attributes.dataid.value);
        formdata.append('field', e.target.name);
        formdata.append('path', 'facilities');
        formdata.append('file', e.target.files[0]);

        const options = {
           method: "POST",
           body: formdata,
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && response.error){
            qS(`img.${response.data[0].field}`).src = `${urlapi}/images/sin_imagen.jpg`;
            qS(`.facilities .error.${response.data[0].field}`).innerHTML = `<i class="far fa-times-circle text-third mr-3"></i>${response.data[0].message}`;
        }else{
            setFacilities({
                ...facilities,
                images: response.data
            })
        }
    }

    const handlerChange = (e) => {
        if(e.target.name.includes('facilities')){
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
            setFacilities({...facilities, [e.target.name]: e.target.value});
        }
    }

    const submit = async (e) => {
        const url = `${urlapi}/page/text/facilities`;
        const data = props.admin;

        if(e.target.attributes.dataid.value === 'fields'){
            data.facilities = {
                fields: facilities.fields
            }
        }

        if(e.target.attributes.dataid.value === 'changingrooms'){
            data.facilities = {
                changingrooms: facilities.changingrooms
            }
        }

        if(e.target.attributes.dataid.value === 'grillsandbar'){
            data.facilities = {
                grillsandbar: facilities.grillsandbar
            }
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
            setFacilities(response.data);
        }
    }

    return (
        <div className={`facilities p-0 ${props.subnavactive === 'facilities' ? '' : 'd-none'}`}>

            <Text
                key={'fields'}
                data={{
                    title: 'fields',
                    value: facilities.fields,
                    handlerChange: handlerChange,
                    changeFunction: submit
                }}
            />

            <Text
                key={'changingrooms'}
                data={{
                    title: 'changingrooms',
                    value: facilities.changingrooms,
                    handlerChange: handlerChange,
                    changeFunction: submit
                }}
            />

            <Text
                key={'grillsandbar'}
                data={{
                    title: 'grillsandbar',
                    value: facilities.grillsandbar,
                    handlerChange: handlerChange,
                    changeFunction: submit
                }}
            />

            <Images
                key={'facilities'}
                data={facilities.images}
                properties={{
                    title: 'facilities',
                    handlerChange: handlerChange
                }}
            />

        </div>
    )
}

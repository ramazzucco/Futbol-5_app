import React, { useEffect, useState } from 'react';
import { modal, qS, urlapi } from '../../../../../functions';

// Components.
import Text from '../Text';
import Images from '../Images';

export default function School(props) {
    const [ school, setSchool ] = useState({});

    useEffect(() => {
        if (!school.text) setSchool(props.school);
    }, [props.school, school]);

    const submitImages = async (e) => {
        const url = `${urlapi}/page/images/school`;
        const formdata = new FormData();

        formdata.append('name', props.admin.name);
        formdata.append('token', props.admin.token);
        formdata.append('id', e.target.attributes.dataid.value);
        formdata.append('field', e.target.name);
        formdata.append('path', 'school');
        formdata.append('file', e.target.files[0]);

        const options = {
           method: "POST",
           body: formdata,
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && response.error){
            qS(`img.${response.data[0].field}`).src = `${urlapi}/images/sin_imagen.jpg`;
            qS(`.school .error.${response.data[0].field}`).innerHTML = `<i class="far fa-times-circle text-third mr-3">
            </i>${response.data[0].message}`;
        }else{
            setSchool({
                ...school,
                images: response.data
            })
        }
    }

    const handlerChange = (e) => {
        if(e.target.name.includes('image')){
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
            setSchool({...school, [e.target.name]: e.target.value});
        }
    }

    const changeText = async (e) => {
        const url = `${urlapi}/page/text/school`;
        const data = {
            ...props.admin,
            school: school.text
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
            setSchool({...school, text: response.data});
        }
    }

    return (
        <div className={`school p-0 ${props.subnavactive === 'school' ? '' : 'd-none'}`}>

            <Text
                key={'school'}
                data={{
                    title: 'text',
                    value: school.text,
                    handlerChange: handlerChange,
                    changeFunction: changeText
                }}
            />

            <Images
                data={school.images}
                properties={{
                    title: 'images',
                    errortitle: 'image',
                    handlerChange: handlerChange
                }}
            />

        </div>
    )
}

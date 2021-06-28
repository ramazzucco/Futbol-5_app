import React, { useEffect, useState } from 'react'
import { modal, urlapi } from '../../../../../functions';

export default function Fields(props) {

    const [fields, setFields] = useState({});

    useEffect(() => {
        if (!fields.number) setFields({ number: props.reserves.length });
    }, [props.reserves, fields]);

    const handlerChange = (e) => {
        e.target.attributes.id.value === 'plus'
            ? setFields({ number: Number(fields.number) + 1})
            : setFields({ number: Number(fields.number) - 1});
    };

    const submit = async (e) => {
        if (fields.number) {
            const url = `${urlapi}/reserves/fields`;
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...props.admin,
                    fields: fields,
                }),
            };

            const request = await fetch(url, options);
            const response = await request.json();

            console.log(response);

            if (response && !response.error) {
                modal("successful", "Enhorabuena !", response.message);
            }else{
                if(!response.session) modal('failed','Lo sentimos',response.message);
            }
        }
    };

    return (
        <div className="fields col-12 col-md-4 p-0 bg-first-contrast shadow ml-md-5">
            <p className='title p-2 mb-0 bg-third text-second text-center'>
                Available soccer fields
            </p>
            <div className='content p-5 d-flex flex-wrap justify-content-center'>
                <input
                    type="number"
                    name="number"
                    id="number"
                    value={fields.number ? fields.number : 0}
                    onChange={()=>{}}
                />
                <div className='input-buttons d-flex flex-column'>
                    <button className='btn-rm btn-third' id='plus' onClick={handlerChange}>
                        &#10133;
                    </button>
                    <hr className='bg-second'/>
                    <button className='btn-rm btn-third' id='less' onClick={handlerChange}>
                        &#10134;
                    </button>
                </div>
                <button onClick={submit} className='send btn-rm btn-second'>
                    Send
                </button>
            </div>
        </div>
    )
}

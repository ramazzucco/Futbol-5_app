import React, { useCallback, useEffect, useState } from 'react';
import { qS, urlapi } from '../functions';

// Components.
import Access from './access/Index';
import Main from './main/Index';

export default function Index() {
    const [ admin, setAdmin ] = useState(null)

    const getSession = useCallback(async () => {
        const adminstorage = JSON.parse(localStorage.getItem('admin'));

        if(admin === null && adminstorage){
            const url = `${urlapi}/access/session`;
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(adminstorage)
            }

            const request = await fetch(url,options);
            const response = await request.json();

            console.log(response)

            if(response && response.session){
                qS('.modal-container .my-modal').classList.add('bg-danger');
                qS('.modal-container .content').classList.add('text-white');
                qS('.modal-container .content').innerHTML = `<p>${response.error.message}</p>`;
                qS('.modal-container').classList.toggle('d-none');
            }else{
                setAdmin(response.user);
            }
        }
    },[admin])

    useEffect(() => {
        setTimeout(() =>  {
            const imgpresentation = qS('.img-presentation');
            const forms = qS('.forms');

            if(imgpresentation && forms){
                imgpresentation.classList.remove('init');
                forms.classList.remove('init');
            }
        },1000)

        getSession();
    },[getSession])

    return (
        <React.Fragment>
            {
                admin === null
                    ? <Access
                        admin={admin}
                        setAdmin={setAdmin}
                    />
                    : <Main
                        admin={admin}
                        setAdmin={setAdmin}
                    />
            }
        </React.Fragment>
    )
}
import React, { useEffect, useState } from 'react';
import { hideMenu, urlapi } from '../../../../functions';
import './configpage.css';

//Components.
import Loadinginfo from '../../../Loading/Loadinginfo';
import Header from './header/Header';
import Sections from './sections/Sections';
import Footer from './footer/Footer';
import Loadingdata from '../../../Loading/Loadingdata';

export default function Configpage(props) {

    const [ datapage, setDatapage ] = useState({})
    const [ active, setActive ] = useState('');
    const headertitles = ['Header','Sections','Footer'];

    const getDataPage = async () => {
        const request = await fetch(`${urlapi}/page`);
        const response = await request.json();

        if(response && !response.error){
            setDatapage({
                data: response.page,
                shedules: response.shedules
            });
        }
    }

    useEffect(() => {
        if(!datapage.data) getDataPage();
    },[datapage])

    return (
        <div className='configpage section bg-first p-0 p-md-4' onClick={hideMenu}>
            <Loadinginfo />

            <div className="title text-left text-third mb-3 pt-3 pt-md-0 px-3 px-md-0">
                <h5>
                    Configure web page
                </h5>
                <hr className='bg-third w-100 mx-auto mt-2' />
            </div>
            <div className="">
                <div className="header d-flex align-items-end">
                    {
                        headertitles.map( (title,i) => {
                            return (
                                <button
                                    key={i}
                                    className={`mx-2 p-3 border-0 text-third ${active === title ? 'bg-first-contrast shadow' : 'bg-transparent'}`}
                                    onClick={() => setActive(title)}
                                >
                                    {title}
                                </button>
                            )
                        })
                    }
                </div>
                <div className={`content col-12 px-1 py-3 bg-first-contrast shadow d-flex justify-content-center
                    align-items-${active !== '' ? 'start' : 'center'}`}
                >
                    {
                        datapage.data
                            ? (
                                <React.Fragment>
                                    <Header data={datapage.data.header} active={active} admin={props.admin} />
                                    <Sections data={datapage.data.section} active={active} admin={props.admin} />
                                    <Footer data={datapage.data.footer} active={active} admin={props.admin} />
                                </React.Fragment>
                            )
                            : <Loadingdata />
                    }
                    <i className={`fas fa-archive fa-3x text-first ${active === '' ? '' : 'd-none'}`}></i>
                </div>
            </div>
        </div>
    )
}

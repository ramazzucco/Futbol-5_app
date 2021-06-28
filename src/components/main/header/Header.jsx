import React from 'react';
import './header.css';

//Components.
import Menu from './Menu';
import Search from './Search';
import Icons from './Icons';

export default function Header(props) {
    return (
        <header className='header bg-second text-third d-flex flex-wrap align-items-center justify-content-end px-2 position-relative'>
            <Menu
                admin={props.admin}
                setAdmin={props.setAdmin}
                getReserves={props.getReserves}
                getHistoryReserves={props.getHistoryReserves}
                setRefresh={props.setRefresh}
            />
            <Search
                historyreserves={props.historyreserves}
            />
            <Icons
                admin={props.admin}
            />
        </header>
    )
}

import React from 'react';
import { Route } from 'react-router-dom';

// Components.
import Home from './Home'
import Facilities from './Facilities';
import Birthday from './Birthday';
import School from './School';
import Promotions from './Promotions';

export default function Section(props) {
    return (
        <div className="container-fluid pt-5">
            <Route exact path='/page'>
                <Home data={props.data.home} />
            </Route>
            <Route path='/page/instalaciones'>
                <Facilities data={props.data.facilities} />
            </Route>
            <Route path='/page/cumpleaños'>
                <Birthday data={{
                    birthdaysImage: props.data.birthdaysImage,
                    birthdays: props.data.birthdays
                }} />
            </Route>
            <Route path='/page/escuelita'>
                <School data={{
                    schoolImage: props.data.schoolImage,
                    school: props.data.school
                }} />
            </Route>
            <Route path='/page/promociones'>
                <Promotions data={props.data.promotions} />
            </Route>
        </div>
    )
}

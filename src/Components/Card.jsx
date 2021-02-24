import React, { useState } from 'react'

//Components.
import Form from './Form';
import Select from "./Select";

export default function Cardpage(props) {

    const [ showSection, setShowSection ] = useState("");

    const card = props.card;

    return (
        <div className={card.class.container}>
            <div className={card.class.card}>
                <div
                    className={card.class.header}
                    id={card.id}
                >
                    <p className={card.dataPage.classNameTitle}>
                        {card.dataPage.title}
                        <span className={card.dataPage.classNameContent}>
                            {card.dataPage.content}
                        </span>
                        <i className={`fas fa-chevron-left fa-chevron-down text-right ${card.id}`}></i>
                    </p>
                </div>
                <div className={card.class.body}>
                    {
                        card.section
                            ? <Select dataSelect={card.section} />
                            : ""
                    }
                    {
                        card.section && showSection !== ""
                            ? <Form form={card[showSection]} />
                            : <Form form={card} />
                    }
                </div>
            </div>
        </div>

    )
}

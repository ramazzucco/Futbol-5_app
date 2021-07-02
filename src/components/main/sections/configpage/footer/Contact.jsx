import React, { useEffect, useState } from "react";
import { modal, urlapi } from "../../../../../functions";

// Components.
import Loadingdata from "../../../../Loading/Loadingdata";

export default function Contact(props) {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        if (!contact.length) setContact(props.contact);
    }, [props.contact, contact]);

    const handlerChange = (e) => {
        const index = Number(e.target.attributes.dataid.value) - 1;

        const result = [];

        for (let i = 0; i < contact.length; i++) {
            if (i === index) {
                result.push({
                    ...contact[i],
                    data: e.target.value,
                });
            } else {
                result.push(contact[i]);
            }
        }
        setContact(result);
    };

    const submit = async (e) => {
        const url = `${urlapi}/page/text/contact`;
        const data = {
            contact: contact[Number(e.target.attributes.dataid.value) - 1],
            ...props.admin,
        };

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };

        const request = await fetch(url, options);
        const response = await request.json();

        if (response && response.error) {
            modal("failed", "Lo sentimos !", response.data.message);
        } else {
            setContact(response.data);
        }
    };

    return (
        <div
            className={`contact p-0 ${
                props.subnavactive === "contact" ? "" : "d-none"
            }`}
        >
            <div className="d-flex flex-wrap justify-content-between pt-4 p-0 p-md-4">
                {contact.length ? (
                    contact.map((data, i) => {
                        return (
                            <div key={i} className="data col-12 col-md-8 col-lg-4 mb-3">
                                <label
                                    htmlFor={data.title}
                                    className="text-third text-capitalize"
                                >
                                    {data.title}
                                </label>
                                <input
                                    type="text"
                                    value={data.data}
                                    id={data.title}
                                    dataid={data.id}
                                    name={data.title}
                                    className="col-12 px-4 py-2 text-third bg-transparent"
                                    onChange={handlerChange}
                                />
                                <div className="button col-12 align-items-center justify-content-end p-0 mt-3">
                                    <button
                                        dataid={data.id}
                                        className="btn-rm btn-second"
                                        onClick={submit}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <Loadingdata />
                )}
            </div>
        </div>
    );
}

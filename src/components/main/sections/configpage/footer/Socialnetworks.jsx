import React, { useEffect, useState } from "react";
import { modal, urlapi } from "../../../../../functions";

// Components.
import Loadingdata from "../../../../Loading/Loadingdata";

export default function Socialnetworks(props) {
    const [socialnetworks, setSocialnetworks] = useState([]);

    useEffect(() => {
        if (!socialnetworks.length) setSocialnetworks(props.socialnetworks);
    }, [props.socialnetworks, socialnetworks]);

    const handlerChange = (e) => {
        const index = Number(e.target.attributes.dataid.value) - 1;

        const result = [];

        for (let i = 0; i < socialnetworks.length; i++) {
            if (i === index) {
                result.push({
                    ...socialnetworks[i],
                    url: e.target.value,
                });
            } else {
                result.push(socialnetworks[i]);
            }
        }
        setSocialnetworks(result);
    };

    const submit = async (e) => {
        const url = `${urlapi}/page/text/socialnetworks`;
        const data = {
            socialnetworks: socialnetworks[Number(e.target.attributes.dataid.value) - 1],
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
            setSocialnetworks(response.data);
        }
    };

    return (
        <div
            className={`socialnetworks p-0 ${
                props.subnavactive === "social networks" ? "" : "d-none"
            }`}
        >
            <div className="d-flex flex-wrap justify-content-center p-4">
                {socialnetworks.length ? (
                    socialnetworks.map((socialnet, i) => {
                        return (
                            <div
                                key={i}
                                className={`social ${socialnet.name} col-12 col-md-8 col-lg-4 mb-5`}
                            >
                                <label
                                    htmlFor={socialnet.name}
                                    className="col-12 d-flex align-items-center p-4 bg-first shadow"
                                >
                                    <i className={`fab fa-${socialnet.name} fa-2x mr-4`}></i>
                                    {socialnet.name}
                                </label>
                                <input
                                    type="text"
                                    value={socialnet.url}
                                    id={socialnet.name}
                                    dataid={socialnet.id}
                                    name="url"
                                    className="col-12 text-third bg-transparent"
                                    onChange={handlerChange}
                                />
                                <div className="button col-12 align-items-center justify-content-end p-0 mt-5">
                                    <button
                                        dataid={socialnet.id}
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

import React, { useEffect, useState } from "react";
import { modal, urlapi } from '../../../../../functions';

export default function Promotions(props) {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        if (!promotions.length) setPromotions(props.promotions);
    }, [props.promotions, promotions]);

    const handlerChange = (e) => {
        const index = Number(e.target.attributes.dataid.value) - 1;
        const result = [];

        for (let i = 0; i < promotions.length; i++) {
            if(i === index){
                result.push({
                    ...promotions[i],
                    [e.target.name]: e.target.value
                })
            }else{
                result.push(promotions[i])
            }
        }

        setPromotions(result);
    };

    const changeText = async (e) => {
        const url = `${urlapi}/page/text/promotions`;
        const data = {
            promo: promotions[Number(e.target.attributes.dataid.value) - 1],
            ...props.admin
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
            setPromotions(response.data);
        }
    };

    return (
        <div
            className={`promotions p-0 ${
                props.subnavactive === "promotions" ? "" : "d-none"
            }`}
        >
            {promotions.map((promo, i) => {
                return (
                    <div className={`d-flex flex-wrap p-3 promo`} key={i}>
                        <u className='w-100 h5 text-second mb-4'>
                            Promotion N° {promo.id} :
                        </u>
                        <div className="col-12 col-md-4 d-flex flex-column text-third title">
                            <label htmlFor={promo.title}>Title</label>
                            <input
                                dataid={promo.id}
                                type="text"
                                name='title'
                                id={promo.title}
                                value={promo.title}
                                onChange={handlerChange}
                                className="bg-transparent p-1 border-third  text-third"
                            />
                        </div>
                        <div className="col-12 col-md-8 d-flex flex-column text-third description">
                            <label htmlFor={`description${promo.id}`}>
                                Description
                            </label>
                            <textarea
                                dataid={promo.id}
                                type="text"
                                name='description'
                                id={`description${promo.id}`}
                                value={promo.description}
                                onChange={handlerChange}
                                className="bg-transparent p-1 border-third  text-third"
                            />
                        </div>
                        <div className="button col-12 align-items-center justify-content-end py-3 border-top-0 border-left-0 border-right-0 border-second">
                            <button
                                dataid={promo.id}
                                className="btn-rm btn-second"
                                onClick={changeText}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

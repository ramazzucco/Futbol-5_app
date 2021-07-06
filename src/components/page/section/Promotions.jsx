import React from "react";

export default function Promotions(props) {
    return (
        <div className="page" id="promociones">
            {props.data.data.length ? (
                props.data.data.map((promo,i) => {
                    return (
                        <div key={i}>
                            <h1 className="p-5 py-3 text-center text-capitalize">
                                {promo.title}
                            </h1>
                            <p className="col-12 text-center text-break">
                                {promo.description}
                            </p>
                        </div>
                    );
                })
            ) : (
                <h1 className="p-5 display-1 text-center text-capitalize">
                    No tenemos promociones por el momento
                </h1>
            )}
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { urlapi } from "../../functions";
import "./Page.css";

//Compoonents.
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Reservemodal from "./Reservemodal";
import Loadingpage from "./Loadingpage";

export default function Page(props) {
    const [datapage, setDatapage] = useState({});
    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        if (!datapage.data) getDataPage();
    }, [datapage]);

    const getDataPage = async () => {
        const request = await fetch(`${urlapi}/page`);
        const response = await request.json();

        if (response && !response.error) {
            setDatapage({
                data: response.page,
                shedules: response.shedules,
            });
            setReserves(response.reserves);
        }
    };

    return (
        <div className="main col-12">
            {
                datapage.data
                    ? (
                        <React.Fragment>
                            <Reservemodal />
                            <Form reserves={reserves} setReserves={setReserves} />
                            <Header data={datapage.data.header} />
                            <Section data={datapage.data.section} />
                            <Footer data={datapage.data.footer} />
                        </React.Fragment>
                    )
                    : <Loadingpage />
            }
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import './fields.css';

// Components.
import Loadingdata from "../../../../Loading/Loadingdata";

export default function Fields(props) {

    const [ charts, setCharts ] = useState({})

    useEffect(() => {
        if(props.charts && !charts.data){
            setCharts({
                type: 'doughnut',
                data: {
                    labels: props.charts.labels,
                    datasets: [{
                        data: props.charts.data,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {
                    datasets: {
                        doughnut: {
                            borderColor: '#8a7e72ff',
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Reserves by soccer field',
                            color: '#5a2328ff',
                            padding: {
                                bottom: 20
                            },
                            font: {
                                size: '22px',
                                weight: 'bold'
                            }
                        },
                        legend: {
                            labels: {
                                color: '#5a2328ff',
                            },
                            align: 'center'
                        }
                    },
                    maintainAspectRatio: false
                },
            });
        }
    },[props.charts, charts])

    return (
        <div className="d-flex flex-wrap justify-content-center col-12 col-md-6 col-lg-4 bg-first-contrast shadow mb-4 p-2 p-md-5">
            {
                charts.data
                    ? <Doughnut
                        data={charts.data}
                        options={charts.options}
                        width={250}
                        height={250}
                    />
                    : <Loadingdata />
            }
        </div>
    );
}

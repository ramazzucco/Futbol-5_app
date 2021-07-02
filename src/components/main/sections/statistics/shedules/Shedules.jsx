import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// Components.
import Loadingdata from "../../../../Loading/Loadingdata";

export default function Fields(props) {
    const [ charts, setCharts ] = useState({})

    useEffect(() => {
        if(props.charts && !charts.data){
            setCharts({
                type: 'bar',
                color: '#5a2328ff',
                data: {
                    labels: props.charts.labels,
                    color: '#5a2328ff',
                    datasets: [{
                        axis: 'y',
                        label: 'reserves',
                        data: props.charts.data,
                        fill: false,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(99, 100, 235, 0.2)',
                            'rgba(255, 22, 135, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(54, 162, 235)',
                            'rgb(99, 100, 235)',
                            'rgb(255, 22, 135)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1,
                        hoverOffset: 4
                    }]
                },
                options: {
                    scales: {
                        x: {
                            ticks: {
                                color: '#5a2328ff',
                            },
                            beginAtZero: true,
                        },
                        y: {
                            ticks: {
                                color: '#5a2328ff',
                            },
                          beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Reserves by shedules',
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
                }
            });
        }

    },[props.charts, charts])

    return (
        <div className="d-flex flex-wrap justify-content-center col-12 col-lg-5 bg-first-contrast shadow p-2 p-md-5">
            {
                charts.data
                    ? <Bar
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

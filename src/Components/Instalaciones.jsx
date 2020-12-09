import React from 'react'

const iterator = [1,2,3,4,5,6,7,8];

export default function Instalaciones() {
    return (
        <div className="container-fluid pt-5">
            <div className="item mt-5 text-center text-monospace shadow-lg p-3 mb-5 bg-white rounded">
                <h1 className="text-dark">Canchas de Futbol</h1>
                <div className="images mt-5 ">
                    {
                        iterator.map(e => {
                            return <i className="fa fa-images fa-10x m-3"></i>
                        })
                    }
                    <p className="my-3 border border-dark p-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore nisi distinctio aliquid, optio nam excepturi aperiam, est iure, dolore unde! Fugit ratione sit mollitia commodi quia? Impedit, odit ut.
                    </p>
                </div>
            </div>
            <div className="item mt-5 text-center text-monospace shadow-lg p-3 mb-5 bg-white rounded">
                <h1 className="text-dark">Vesturarios</h1>
                <div className="images mt-5 ">
                    {
                        iterator.map(e => {
                            return <i className="fa fa-images fa-10x m-3"></i>
                        })
                    }
                    <p className="my-3 border border-dark p-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore nisi distinctio aliquid, optio nam excepturi aperiam, est iure, dolore unde! Fugit ratione sit mollitia commodi quia? Impedit, odit ut.
                    </p>
                </div>
            </div>
            <div className="item mt-5 text-center text-monospace shadow-lg p-3 mb-5 bg-white rounded">
                <h1 className="text-dark">Parrillas y Bar</h1>
                <div className="images mt-5 ">
                    {
                        iterator.map(e => {
                            return <i className="fa fa-images fa-10x m-3"></i>
                        })
                    }
                    <p className="my-3 border border-dark p-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore nisi distinctio aliquid, optio nam excepturi aperiam, est iure, dolore unde! Fugit ratione sit mollitia commodi quia? Impedit, odit ut.
                    </p>
                </div>
            </div>
        </div>
    )
}

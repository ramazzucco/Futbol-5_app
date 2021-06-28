import React from 'react'

export default function Loadingpage() {
    return (
        <div className='w-100 h100'>
            <header className='bg-success d-flex align-items-center' style={{height: '10vh'}}>
                <div className="col-2 d-flex align-items-center justify-content-strat">
                    <div className='logo rounded-circle' style={{width: '50px',height: '50px', background: 'rgba(0,0,0,.3)'}}></div>
                </div>
                <div className='col-10 d-flex justify-content-center align-items-center'>
                    <p className='mx-2 mb-0'style={{width: '80px',height: '25px',background: 'rgba(0,0,0,.3)'}}></p>
                    <p className='mx-2 mb-0'style={{width: '80px',height: '25px',background: 'rgba(0,0,0,.3)'}}></p>
                    <p className='mx-2 mb-0'style={{width: '80px',height: '25px',background: 'rgba(0,0,0,.3)'}}></p>
                    <p className='mx-2 mb-0'style={{width: '80px',height: '25px',background: 'rgba(0,0,0,.3)'}}></p>
                    <p className='mx-2 mb-0'style={{width: '80px',height: '25px',background: 'rgba(0,0,0,.3)'}}></p>
                </div>
            </header>
            <div className="image m-4" style={{height: '50vh', background: 'rgba(0,0,0,.3)'}}></div>
            <div className="text p-4">
                <p className='mx-auto' style={{width:'99%',height:'25px',background: 'rgba(0,0,0,.3)'}}></p>
                <p className='mx-auto' style={{width:'95%',height:'25px',background: 'rgba(0,0,0,.3)'}}></p>
                <p className='mx-auto' style={{width:'97%',height:'25px',background: 'rgba(0,0,0,.3)'}}></p>
            </div>
        </div>
    )
}

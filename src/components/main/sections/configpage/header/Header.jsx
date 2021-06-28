import React from 'react'

export default function Header(props) {
    return (
        <div className={`header ${props.active === 'Header' ? '' : 'd-none'}`}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '50vh'}}>
                <i className="fas fa-folder-open fa-2x text-third"></i>
                <h3 className='text-third'>No content yet !</h3>
            </div>
        </div>
    )
}

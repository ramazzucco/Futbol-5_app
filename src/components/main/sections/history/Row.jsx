import React from 'react'

export default function Row(props) {
    return (
        <tr
            id={`r${props.reserve.id}`}
            className="text-fourth text-lowercase"
            onDoubleClick={props.selectRow}
        >
            <td>{props.reserve.id}</td>
            <td className='name'>{props.reserve.name}</td>
            <td className='lastname'>{props.reserve.lastname}</td>
            <td>{props.reserve.field}</td>
            <td>{props.reserve.shedule}</td>
            <td>{props.reserve.email}</td>
            <td>{props.reserve.phone}</td>
            <td>{props.reserve.date}</td>
            <td className={`${props.reserve.status ? 'text-danger' : 'text-success'}`}>
                {props.reserve.status ? props.reserve.status : 'Exitosa'}
            </td>
            <td>
                <i
                    className="fas fa-trash-alt text-danger pointer"
                    onClick={props.showModal}
                    datareserve={JSON.stringify(props.reserve)}
                ></i>
            </td>
        </tr>
    );
}

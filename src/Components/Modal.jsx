import React, { useState, useEffect } from 'react';
import { styleByDefault, cardsuccessligth, cardsuccessdark, close, historydeleteoneligth, historydeleteonedark, inforeserveligth, inforeservedark } from "../javascript/modal";
import Button from './Button';

export default function Modal(props) {

    const [ style, setStyle ] = useState({});
    const [ hover, setHover ] = useState({secondaryButton: false, cancelButton: false});
    const [ refreshModal, setRefreshModal ] = useState("");

    useEffect(() => {
        const modalid = document.querySelector(".modal-info").getAttribute("modal-id");

        if(modalid !== "" && modalid !== "default"){
            setRefreshModal(modalid + props.switchMode)
        } else {
            setRefreshModal("default");
        }

    }, [props.time])

    useEffect(() => {
        switch (refreshModal) {
            case "cardsuccessligth":
                setStyle(cardsuccessligth);
                break;
            case "cardsuccessdark":
                setStyle(cardsuccessdark);
                break;
            case "historydeleteoneligth":
                setStyle(historydeleteoneligth);
                break;
            case "historydeleteonedark":
                setStyle(historydeleteonedark);
                break;
            case "inforeserveligth":
                setStyle(inforeserveligth);
                break;
            case "inforeservedark":
                setStyle(inforeservedark);
                break;
            default:
                setStyle(styleByDefault);
                break;
        }
    }, [refreshModal])

    return (
        <div className="cardcontainer" style={style.cardcontainer}>
            <div className="card modal-info text-white" style={style.card} id="modal">
                <div className="card-header text-uppercase text-center" style={style.header}></div>
                <div className="card-body p-5" style={style.body}></div>
                <div className="card-footer text-center" style={style.footer}>
                    <button
                        id="secondaryButton"
                        className={`btn btn-sm text-uppercase px-5`}
                        style={hover.secondaryButton ? style.hover.secondaryButton : style.secondaryButton}
                        onMouseOver={ () => setHover({ ...hover, secondaryButton: true}) }
                        onMouseOut={ () => setHover({ ...hover, secondaryButton: false}) }
                    ></button>
                    <button
                        id="cancelButton"
                        className={`card-button text-uppercase btn btn-sm px-5`}
                        onClick={close}
                        style={hover.cancelButton ? style.hover.cancelButton : style.cancelButton}
                        onMouseOver={ () => setHover({...hover, cancelButton: true}) }
                        onMouseOut={ () => setHover({...hover, cancelButton: false}) }
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    )
}

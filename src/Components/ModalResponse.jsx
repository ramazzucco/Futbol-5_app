import React from "react";

export default function ModalResponse(props) {
    return (
        <div class="modal-content">
            <div class="modal-header bg-success">
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">
                    ${props.response.meta.msg}
                </h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-12">
                    <h5 class="text-center text-uppercase text-primary">
                        Cancha N° ${props.response.data.cancha} - Horario $
                        {props.response.data.horario}
                    </h5>
                    <p class="text-center font-weight-bold my-5">
                        Tus Datos:{" "}
                        <span class="text-muted font-weight-normal">
                            $
                            {props.response.data.nombre +
                                " " +
                                props.response.data.apellido}{" "}
                            - ${props.response.data.email} - ${props.response.data.telefono}{" "}
                            - Hora y Fecha de la reserva : $
                            {props.response.data.createdAt}
                        </span>
                    </p>
                    <p class="mt-3 p-3 bg-warning text-center rounded">
                        <span class="text-danger text-center">
                            {" "}
                            IMPORTANTE!{" "}
                        </span>
                        A partir de este momento tiene 1 hora para señar la
                        cancha, de lo contrario la reserva será cancelada
                        automaticamente por el sistema.
                    </p>
                </div>
                <div class="col-12 text-right">
                    <button class="btn btn-danger" data-dismiss="modal">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

import React from 'react'

export default function FormReservar() {
    return (
        <div className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-primary font-weight-bold" id="exampleModalLabel">
                                Reserva tu Cancha
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-reservar px-5">
                                <div className="form-group">
                                    <label htmlFor="cancha" className="col-form-label">Cancha</label>
                                    <select className="form-control" id="cancha">
                                        <option>Cancha N° 1</option>
                                        <option>Cancha N° 2</option>
                                        <option>Cancha N° 3</option>
                                        <option>Cancha N° 4</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="horario" className="col-form-label">Horario</label>
                                    <select className="form-control" id="horario">
                                        <option>15:00 Hs</option>
                                        <option>16:00 Hs</option>
                                        <option>17:00 Hs</option>
                                        <option>18:00 Hs</option>
                                        <option>19:00 Hs</option>
                                        <option>20:00 Hs</option>
                                        <option>21:00 Hs</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input className="form-control" type="text" name="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_anem">Apellido</label>
                                    <input className="form-control" type="text" name="last_name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input className="form-control" type="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefono</label>
                                    <input className="form-control" type="number" name="phone" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

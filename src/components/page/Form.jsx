import React, { useEffect, useState } from "react";
import { gEbID, qS, qSall, urlapi } from "../../functions";

export default function Modal(props) {

    const [ fields, setFields ] = useState([])
    const [ shcedules, setSchedules ] = useState([])
    const [ datapost, setDatapost ]= useState({})
    const [ prefix, setPrefix ] = useState(0)

    useEffect(() => {
        if(props.reserves && !fields.length){
            const getfields = props.reserves.map( field => { return field.number });
            setFields(getfields);
        }
    },[props.reserves, fields])

    const eraseDataForm = () => {
        gEbID('field').options.selectedIndex = 0
        gEbID('shedule').options.selectedIndex = 0;

        qSall('select').forEach( select => {
            if(select.className.includes('border-danger')){
                select.classList.remove('border-danger');
            }
        })

        qSall('input').forEach( input => {
            if(input.className.includes('border-danger')){
                input.classList.remove('border-danger');
            }

            input.value = '';
        })

        qS('.form-control.phone').className.includes('border-danger') && qS('.form-control.phone').classList.remove('border-danger');

        qSall('.error').forEach( error => {
            if(error.innerHTML !== ''){
                error.innerHTML = '';
            }
        })
    }

    const handlerCancel = () => {
        eraseDataForm();

        if(!qS('.form_reserve button.loading').className.includes('d-none')){
            qS('.form_reserve button.loading').classList.toggle('d-none');
            qS('.form_reserve button.submit').classList.toggle('d-none');
        }

        qS('body').classList.toggle('overflow-hidden');
        qS(".container-modalreserve").classList.toggle("d-none");

        setDatapost({});
        setSchedules([]);
    }

    const selectField = (e) => {
        setDatapost({...datapost, [e.target.name]: Number(e.target.value)});
        setSchedules(props.reserves[e.target.value - 1].options);

        if(e.target.classList.value.includes('border-danger')){
            e.target.classList.remove('border-danger');
            qS(`.error.${e.target.name}`).innerHTML = '';
        }
    }

    const handlerChange = (e) => {
        e.target.name === 'prefix'
            ? setPrefix(e.target.value)
            : setDatapost({...datapost, [e.target.name]: e.target.value});

        if(e.target.classList.value.includes('border-danger')){
            e.target.classList.remove('border-danger');
            qS(`.error.${e.target.name}`).innerHTML = '';
        }

        if(e.target.name === 'prefix' || e.target.name === 'phone'){
            qS('.form-control.phone').classList.remove('border-danger');
            qS(`.error.phone`).innerHTML = '';
        }
    }

    const modalReserve = (type, reserve) => {

        if(type === 'success'){
            const image = `${urlapi}/images/congrats.svg`;

            qS('.modal-reserve .image img').setAttribute('src', image);

            qS('.modal-reserve .title h1').classList.add('text-success');
            qS('.modal-reserve .title h1').innerHTML = 'Felicitaciones !';

            const content = `<p class='text-success'>Su reserva fue creada con exito:</p>
            <br/><p class='text-success'>a las ${reserve.shedule} hs, cancha ${reserve.field}</p>`

            qS('.modal-reserve .content').classList.add('text-success');
            qS('.modal-reserve .content').innerHTML = content;

            qS('.modal-reserve .button button').classList.add('btn-success');

            qS('body').classList.toggle('overflow-hidden');
            qS('.reserve-modal-container').classList.toggle('d-flex');
        }

        if(type === 'failed'){
            const image = `${urlapi}/images/error.svg`;

            qS('.modal-reserve .image img').setAttribute('src', image);

            qS('.modal-reserve .title h1').classList.add('text-danger');
            qS('.modal-reserve .title h1').innerHTML = 'Lo sentimos !';

            const content = `<p>${reserve}</p>`

            qS('.modal-reserve .content').classList.add('text-danger');
            qS('.modal-reserve .content').innerHTML = content;

            qS('.modal-reserve .button button').classList.add('btn-danger');

            qS('.reserve-modal-container').classList.toggle('d-flex');
        }

    }

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const url = `${urlapi}/reserves/create`;

        const dataform = datapost;

        dataform.phone = prefix + dataform.phone;

        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataform)
        }

        qS('.form_reserve button.submit').classList.toggle('d-none');
        qS('.form_reserve button.loading').classList.toggle('d-none');

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && !response.error){
            const getfields = response.reserves.map( field => { return field.number });
            setFields(getfields);

            props.setReserves(response.reserves);

            handlerCancel();

            modalReserve('success', response.newreserve);
        }else{
            if(response.errorform){
                response.data.forEach( error => {
                    if(error.param === 'phone'){
                        qS('.form-control.phone').classList.add('border-danger');
                        qS(`.error.${error.param}`).innerHTML = error.msg;
                    }else{
                        qS(`#${error.param}`).classList.add('border-danger');
                        qS(`.error.${error.param}`).innerHTML = error.msg;
                    }

                    if(qS(`.error.${error.param}`).className.includes('d-none')){
                        qS(`.error.${error.param}`).classList.toggle('d-none');
                    }
                })
            }
            if(response.errorreserve){
                qS('.container-modalreserve').classList.toggle('d-none');

                modalReserve('failed', response.message)
            }

            if(!qS('.form_reserve button.loading').className.includes('d-none')){
                qS('.form_reserve button.submit').classList.toggle('d-none');
                qS('.form_reserve button.loading').classList.toggle('d-none');
            }
        }
        console.log(response);
    }

    return (
        <div className="container-modalreserve d-none">
            <section className="d-flex justify-content-center align-items-center h-100">
                <div className="container-form col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 px-5 py-4 bg-light rounded">
                    <p className="text-center w-100 mb-4 h5 border-primary text-primary border-bottom pt-4 pt-sm-0 pb-2">
                        Reserva
                    </p>
                    <form
                        className="form_reserve w-100"
                        onSubmit={handlerSubmit}
                    >
                        <div className="row px-3 mt-3 mb-4 flex-wrap justify-content-around selects">
                            <div className="col-12 col-md-6">
                                <label htmlFor="field" className="col-form-label text-secondary">
                                    Cancha
                                </label>
                                <select
                                    className="form-control field position-relative"
                                    id='field'
                                    name="field"
                                    onChange={selectField}
                                    required={true}
                                >
                                    <option defaultValue>
                                        Seleccionar
                                    </option>
                                    {
                                        fields.map( (field,i) => {
                                            return (
                                                <option value={field} key={i}>Cancha N° {field}</option>
                                            )
                                        })
                                    }
                                </select>
                                <p className="d-none error field text-danger position-absolute"></p>
                            </div>

                            <div className="col-12 col-md-6">
                                <label
                                    htmlFor="shedule"
                                    className="col-form-label text-secondary"
                                >
                                    Horario
                                </label>
                                <select
                                    className="form-control shedule text-dark position-relative"
                                    id='shedule'
                                    name="shedule"
                                    required={true}
                                    onChange={handlerChange}
                                >
                                    <option defaultValue>
                                        Seleccionar
                                    </option>
                                    {
                                        shcedules.map( (shedule,i) => {
                                            return (
                                                <option value={shedule.shedule} key={i} className={shedule.reserved ? 'text-danger' : ''}>
                                                    {shedule.reserved ? 'Reservado' : `${shedule.shedule} hs`}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <p className="d-none error shedule text-danger position-absolute"></p>
                            </div>
                        </div>

                        <div className="col-12 form-group mt-2">
                            <label htmlFor="name" className='text-secondary mb-0'>Nombre</label>
                            <input
                                id='name'
                                className="form-control name"
                                type="text"
                                name="name"
                                required={true}
                                onChange={handlerChange}
                            />
                            <p className="d-none error name text-danger position-absolute"></p>
                        </div>

                        <div className="col-12 form-group mt-2">
                            <label htmlFor="lastname" className='text-secondary mb-0'>Apellido</label>
                            <input
                                id='lastname'
                                className="form-control lastname"
                                type="text"
                                name="lastname"
                                required={false}
                                onChange={handlerChange}
                            />
                            <p className="d-none error lastname text-danger position-absolute"></p>
                        </div>

                        <div className="col-12 form-group mt-2">
                            <label htmlFor="email" className='text-secondary mb-0'>Email</label>
                            <input
                                id='email'
                                className="form-control email"
                                type="email"
                                name="email"
                                onChange={handlerChange}
                            />
                            <p className="d-none error email text-danger position-absolute"></p>
                        </div>

                        <div className="col-12 form-group mt-2">
                            <label htmlFor="prefix" className='text-secondary mb-0'>Telefono</label>
                            <div className="d-flex form-control phone col-12 col-sm-8 col-md-6">
                                <input
                                    id='prefix'
                                    className="border-0 text-right col-5 px-1"
                                    type="text"
                                    name='prefix'
                                    maxLength={3}
                                    required={true}
                                    onChange={handlerChange}
                                    placeholder="123"
                                />
                                <input
                                    id='slash'
                                    className="border-0 text-center col-1 px-0 bg-transparent"
                                    placeholder='-'
                                    disabled={true}
                                />
                                <input
                                    id='phone'
                                    className="border-0 col-6 pl-1"
                                    type='text'
                                    name="phone"
                                    maxLength={6}
                                    required={true}
                                    onChange={handlerChange}
                                    placeholder="456789"
                                />
                            </div>
                            <p className="d-none error phone text-danger position-absolute"></p>
                        </div>

                        <div className="col-12 mt-5 d-flex flex-wrap justify-content-center">
                            <button
                                type='submit'
                                className="submit btn btn-primary col-12 col-sm-5"
                            >
                                Enviar
                            </button>
                            <button className="loading col-12 col-sm-5 btn btn-primary d-none" type="button" disabled>
                                <span className="spinner-border spinner-border-sm mr-3" role="status" aria-hidden="true"></span>
                                <span>Enviando ...</span>
                            </button>
                            <button
                                type="reset"
                                className="btn btn-outline-primary mt-1 mt-sm-0 ml-0 ml-sm-3 col-12 col-sm-5"
                                onClick={handlerCancel}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

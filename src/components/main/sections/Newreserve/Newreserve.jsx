import React, { useEffect, useState } from "react";
import { gEbID, modal, qS, qSall, urlapi } from "../../../../functions";
import './newreserve.css';

export default function Newreserve(props) {

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
        qSall('.error').forEach( error => {
            if(error.innerHTML !== ''){
                error.innerHTML = '';
            }
        })
    }

    const handlerCancel = () => {
        eraseDataForm();

        qS('body').classList.toggle('overflow-hidden');
        qS(".container-newreserve").classList.toggle("d-none");

        if(!qS('.form_reserve_admin button.loading').className.includes('d-none')){
            qS('.form_reserve_admin button.loading').classList.toggle('d-none');
            qS('.form_reserve_admin button.submit').classList.toggle('d-none');
        }

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
            qS('.phone').classList.remove('border-danger');
            qS(`.error.phone`).innerHTML = '';
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

        qS('.form_reserve_admin button.submit').classList.toggle('d-none');
        qS('.form_reserve_admin button.loading').classList.toggle('d-none');

        const request = await fetch(url, options);
        const response = await request.json();

        if(response && !response.error){
            const getfields = response.reserves.map( field => { return field.number });

            setFields(getfields);

            props.setRefresh(true);

            handlerCancel();

            modal('successful',
                'Congratulations !',
                `The reservation on soccer field n°${response.newreserve.field} and time ${response.newreserve.shedule} was created successfully`
            );
        }else{
            if(response.errorform){
                response.data.forEach( error => {
                    if(!qS('.form_reserve_admin button.loading').className.includes('d-none')){
                        qS('.form_reserve_admin button.loading').classList.toggle('d-none');
                        qS('.form_reserve_admin button.submit').classList.toggle('d-none');
                    }

                    if(error.param === 'phone'){
                        qS('.form_reserve_admin .phone').classList.add('border-danger');
                        qS(`.form_reserve_admin .error.${error.param}`).innerHTML = error.msg;
                    }else{
                        qS(`#${error.param}`).classList.add('border-danger');
                        qS(`.form_reserve_admin .error.${error.param}`).innerHTML = error.msg;
                    }

                    if(qS(`.form_reserve_admin .error.${error.param}`).className.includes('d-none')){
                        qS(`.form_reserve_admin .error.${error.param}`).classList.toggle('d-none');
                    }
                })
            }
            if(response.errorreserve){
                qS('.container-newreserve').classList.toggle('d-none');

                modal('failed', 'Lo sentimos !',response.message);
            }
        }
        console.log(response);
    }

    return (
        <div className="container-newreserve d-none">
            <section className="d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-7 col-xl-6 px-5 py-4 bg-first">
                    <p className="text-center w-100 mb-4 h5 bg-third text-second  p-3">
                        New reserve
                    </p>
                    <form
                        className="form_reserve_admin w-100"
                        onSubmit={handlerSubmit}
                    >
                        <div className="row px-3 mt-3 mb-1 mb-sm-4 flex-wrap justify-content-around selects">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="field" className="text-third mb-0 mt-2 mt-sm-0">
                                    Cancha
                                </label>
                                <select
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
                                <p className="d-none error field text-danger m-0"></p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <label
                                    htmlFor="shedule"
                                    className="text-third mb-0 mt-2 mt-sm-0"
                                >
                                    Horario
                                </label>
                                <select
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
                                <p className="d-none error shedule text-danger m-0"></p>
                            </div>
                        </div>

                        <div className="col-12 form-group mt-1 mt-sm-2 mb-1 mb-sm-3">
                            <label htmlFor="name" className='text-third mb-0'>Nombre</label>
                            <input
                                id='name'
                                type="text"
                                name="name"
                                required={true}
                                onChange={handlerChange}
                            />
                            <p className="d-none error name text-danger"></p>
                        </div>

                        <div className="col-12 form-group mt-1 mt-sm-2 mb-1 mb-sm-3">
                            <label htmlFor="lastname" className='text-third mb-0'>Apellido</label>
                            <input
                                id='lastname'
                                type="text"
                                name="lastname"
                                required={false}
                                onChange={handlerChange}
                            />
                            <p className="d-none error lastname text-danger"></p>
                        </div>

                        <div className="col-12 form-group mt-1 mt-sm-2 mb-1 mb-sm-3">
                            <label htmlFor="email" className='text-third mb-0'>Email</label>
                            <input
                                id='email'
                                type="email"
                                name="email"
                                onChange={handlerChange}
                            />
                            <p className="d-none error email text-danger"></p>
                        </div>

                        <div className="col-12 form-group mt-1 mt-sm-2 mb-1 mb-sm-3">
                            <label htmlFor="prefix" className='text-third mb-0'>Telefono</label>
                            <div className="d-flex phone col-8 col-sm-6 col-md-5 col-lg-4">
                                <input
                                    id='prefix'
                                    type="text"
                                    name='prefix'
                                    maxLength={3}
                                    required={true}
                                    onChange={handlerChange}
                                    placeholder="123"
                                />
                                <input
                                    id='slash'
                                    placeholder='-'
                                    disabled={true}
                                />
                                <input
                                    id='phone'
                                    type='text'
                                    name="phone"
                                    maxLength={6}
                                    required={true}
                                    onChange={handlerChange}
                                    placeholder="456789"
                                />
                            </div>
                            <p className="d-none error phone text-danger border-0 m-0"></p>
                        </div>

                        <div className="col-12 mt-4 mt-sm-5 d-flex flex-wrap justify-content-center">
                            <button
                                type='submit'
                                className="submit btn-rm btn-second col-12 col-sm-5"
                            >
                                Enviar
                            </button>
                            <button className="loading col-12 col-sm-5 btn-rm btn-third d-none" type="button" disabled>
                                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                <span>Enviando ...</span>
                            </button>
                            <button
                                type="reset"
                                className="btn-rm-outline btn-second mt-1 mt-sm-0 ml-0 ml-sm-3 col-12 col-sm-5"
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

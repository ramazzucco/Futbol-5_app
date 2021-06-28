import React, { useCallback, useEffect, useState } from "react";

export default function Search(props) {

    const [ datasearch, setDatasearch ] = useState('')
    const [ datalist, setDatalist ] = useState([])
    const [ searchby, setSearchby ] = useState('')
    const [ move, setMove ]= useState(0)

    window.onclick = (e) => {
        if(!e.target.classList.value.includes('option-search-admin')){
            setDatasearch('');
        }
    }

    const searchReserve = useCallback((searchby) => {

        if(props.historyreserves){

            if(searchby === 'name' || searchby === ''){
                const result = []
                props.historyreserves.forEach( reserve => {
                    const name = reserve.name + ' ' + reserve.lastname;
                    if(name.toLowerCase().includes(datasearch.toLowerCase()) && datasearch !== ''){
                        result.push(reserve);
                    }
                });
                setDatalist(result);
            }

            if(searchby === 'date'){
                props.historyreserves.forEach( reserve => {
                    if(reserve.date.includes(datasearch) && datasearch !== ''){
                        setDatalist([ ...datalist, reserve ]);
                    }
                });
            }
        }
    },[props.historyreserves, datasearch, datalist])

    useEffect(() => {
        if(datasearch !== ''){
            window.onkeyup = () =>{
                searchReserve(searchby);
            }
        }
    },[datasearch, searchReserve, searchby])

    useEffect(() =>{
        const optionslist = document.querySelectorAll('.datalist p');

        optionslist.forEach( (option, i) => {
            if(i === move){
                option.classList.add('bg-rgba3');
            } else {
                option.classList.remove('bg-rgba3');
            }
        })
    },[move])

    const handlerOnKeyDownSearchAdmin = (e) => {

        const optionslist = document.querySelectorAll('.datalist p');

        if(e.keyCode === 40 && move < optionslist.length){
            setMove(move + 1)
        }

        if(e.keyCode === 38 && move > 0) {
            setMove(move - 1)
        }

    }

    return (
        <div className="search col-8 col-md-5 px-0 d-flex align-items-center justify-content-end position-relative mr-md-5">
            <select
                id="searchby"
                name="searchby"
                onChange={(e) => setSearchby(e.target.value)}
            >
                <option defaultValue disabled={true}>Buscar por</option>
                <option value='name'>Nombre</option>
                <option value='date'>Fecha</option>
            </select>
            <input
                type="seacrch"
                name="search"
                id="search"
                className="position-relative text-third"
                onChange={(e) => setDatasearch(e.target.value)}
                onKeyDown={handlerOnKeyDownSearchAdmin}
            />
            <label htmlFor="search" className="mb-0">
                <i className="fas fa-search col-1 d-flex justify-content-center align-items-center"></i>
            </label>
            <div className={`datalist px-0 bg-second position-absolute ${datasearch !== "" ? "" : "d-none"}`}>
                <div>
                    {datalist.length ? (
                        datalist.map((data, i) => {
                            return (
                                <p className="option-search-admin pl-3 py-1 pointer mb-0 text-lowercase" key={i}>
                                    {`${data.name} ${data.lastname}  (${data.field} / ${data.shedule} - ${data.date})`}
                                </p>
                            );
                        })
                    ) : (
                        <p className="option-search-admin pl-3 py-1 pointer mb-0 text-lowercase">
                            No se ha encontrado nada con "{datasearch}"
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

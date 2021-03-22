import axios from 'axios';
const functions = require("../functions");
const urlApi = functions.urlApiBase;

const getCanchaYhorario = (loading,setLoading,setReserves,setReservesOfTheDay,admin) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    }

    fetch(`${urlApi}/api/reserves/canchaYhorario`,options)
        .then( res => res.json())
        .then( response => {

            console.log(response)

            if(response) {
                setLoading({
                    reserves: false,
                    reservesOfTheDay: loading.reservesOfTheDay,
                });

                setReserves(response.data);

            } else {
                setLoading({
                    reserves: true,
                    reservesOfTheDay: loading.reservesOfTheDay,
                });
            }

            fetch(`${urlApi}/api/reserves/reservesoftheday`,options)
                .then( res => res.json())
                .then( response => {
                    console.log(response)

                    if(response.data.length && response.data[0].error){
                        reset(admin,setReserves);
                    }

                    setReservesOfTheDay(response.data);
                    setLoading({
                        reserves: loading.reserves,
                        reservesOfTheDay: false,
                    });
                })
        })
}

const deleteReserve = (reserve, admin, setData, request) => {
    const params = Array.isArray(reserve) ? 0 : reserve.id;

    const modal = document.querySelector(".card.modal-info");
    const header = document.querySelector(".card.modal-info .card-header");
    const body = document.querySelector(".card.modal-info .card-body");
    const footer = document.querySelector(".card.modal-info .card-footer");
    const buttonCancel = document.getElementById("cancelButton");
    const buttonConfirm = document.getElementById("secondaryButton");

    modal.setAttribute("modal-id","historydeleteone");
    header.innerHTML = "eliminar";
    buttonConfirm.innerHTML = "Si";
    buttonCancel.innerHTML = "No";

    if(Array.isArray(reserve)){
        admin.ids = reserve
        body.innerHTML = `<p>Reservas seleccionadas: "${reserve.map(r=>{return r})}"</p><br><p>Esta seguro que las desea eliminar ?`
    } else {
        body.innerHTML = `<p>Esta seguro que desea eliminar la reserva de ${reserve.name} ${reserve.lastname} ID ${reserve.id}</p><br><p>cancha ${reserve.cancha}, hora ${reserve.horario}Hs. ?`
    }

    buttonConfirm.onclick = () => {

        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(admin),
        };

        fetch(`${urlApi}/api/reserves/delete/${params}`, options)
            .then((res) => res.json())
            .then((response) => {

                console.log(response)
                if(request === "reservesoftheday"){
                    const reserveDeleted = document.querySelector(`.horarios .id${reserve.id}`);

                    reserveDeleted.innerHTML = `<p class="text-center m-0">${reserve.horario}Hs<span class="pl-3 text-uppercase">Libre</span></p>`
                    reserveDeleted.classList.remove("bg-danger");
                    reserveDeleted.classList.add("bg-success");
                }

                setData(response.data)

                modal.setAttribute("modal-id","default");

            })
            .catch(error => console.log(error));
    }

}

const sendHistoryReserve = (admin) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    };

    const card = document.querySelector(".modal-info");
    const header = document.querySelector(".modal-info .card-header");
    const body = document.querySelector(".modal-info .card-body");
    const footer = document.querySelector(".modal-info .card-footer");
    const buttons = document.querySelectorAll(".modal-info .card-button");

    card.classList.toggle("d-none");
    card.classList.add("w-75");
    header.classList.add("bg-primary");
    header.innerHTML = "Send email";
    body.innerHTML = `<div class="d-flex justify-content-center w-100">
        <div class="loading text-center">
            <div class="spinner-border text-success mx-auto" role="status"></div>
            <h4 class="mt-3 text-dark mx-auto">
                Sending...
            </h4>
        </div>
    </div>`;
    footer.classList.add("bg-primary");
    buttons.forEach( button => {
        button.classList.toggle("d-none");
    })

    fetch(`${urlApi}/api/reserves/sendhistorybyemail`, options)
        .then(res => res.json())
        .then(response => {

            header.classList.remove("bg-primary");
            footer.classList.remove("bg-primary");
            header.classList.add("bg-success");
            body.classList.add("text-dark","text-center")
            body.innerHTML = `<h4>Email sended successfully</h4><p>To</p><h6>${response.data.accepted[0]}</h6>`
            footer.classList.add("bg-success");
            buttons.forEach( button => {
                if(button.className.includes("btn-danger")){
                    button.classList.toggle("d-none")
                    button.classList.add("ml-0");
                } else {
                    button.classList.add("d-none")
                }
            })
        })
        .catch(error => console.log(error));
}

const getDataPage = (admin,setDataPage,setLoading) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    }
    fetch(`${urlApi}/api/page`, options)
        .then(res => res.json())
        .then(response => {
            setDataPage(response.data);
            setLoading({reservesOfTheDay: false})
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

const submitCanchaYhorario = (e, dataPost, setDataPage) => {
    e.preventDefault();

    const optionsPageFetch = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPost),
    }

    fetch(`${urlApi}/api/page/modifycanchayhorario`, optionsPageFetch)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setDataPage(response.data)
            dataPost.cancha_amount
                ? document.getElementById("cancha_amount").value = ""
                : document.getElementById("horarios").value = ""
        })
        .catch(error => console.log(error))
}

const submitLink = (e, dataPost, setDataPage) => {

    e.preventDefault();

    const optionsPageFetch = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPost),
    }

    fetch(`${urlApi}/api/page/modifyheader/link`, optionsPageFetch)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setDataPage(response.data)
            if(dataPost.link){
                document.getElementById("link").value = ""
            }
        })
        .catch(error => console.log(error))

}

const submitSection = (e, dataPost, setDataPage) => {
    e.preventDefault();

    console.log(dataPost)

    const optionsPageFetch = {
        method: "POST",
        body: "",
    }

    if(dataPost.images){
        const formData = new FormData();
        formData.append("user", dataPost.user);
        formData.append("section", dataPost.section);
        dataPost.images.forEach( img => {
            formData.append(img.name, img)
        });
        axios.post(`${urlApi}/api/page/modifysection`, formData)
        // optionsPageFetch.body = formData;
    } else {
        optionsPageFetch.headers = {
            "Content-Type": "application/json",
        }
        optionsPageFetch.body = JSON.stringify(dataPost);
    }

    console.log(optionsPageFetch)

    fetch(`${urlApi}/api/page/modifysection`, optionsPageFetch)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setDataPage(response.data)
        })
        .catch(error => console.log(error))

}

const submitFooter = (e, dataPost, setDataPage) => {

    e.preventDefault();

    const optionsPageFetch = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPost),
    }

    fetch(`${urlApi}/api/page/modifyfooter`, optionsPageFetch)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setDataPage(response.data)
        })
        .catch(error => console.log(error))

}

const getAdmin = (password,setAdmin) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
    };

    fetch(`${urlApi}/api/admin/login`,options)
        .then(res => res.json())
        .then(response => {

            if(response && response.error){
                const passwordError = document.querySelector(`#login #errorpassword`);
                passwordError.innerHTML = `<p class="text-danger text-center">${response.data.message}</p>`
                setAdmin({session: false});
            } else {
                const admin = {session: true,...response.data}
                localStorage.setItem("session",JSON.stringify(admin))
                setAdmin(admin);
            }
        })
        .catch(error => console.log(error))
}

const submitSignup = (dataPost,setAdmin,setErrors,setCreateAdmin) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPost),
    };

    fetch(`${urlApi}/api/admin/create`, options)
        .then(res => res.json())
        .then(response => {
            console.log(response.data)
            if(response && response.error){

                if(Array.isArray(response.data)){
                    response.data.map( error => {
                        const errorDOM = document.querySelector(`#signup #error${error.field}`);
                        errorDOM.innerHTML = `<p class="text-danger text-center">${error.message}</p>`;
                    })
                } else {
                    const errorDOM = document.querySelector(`#signup #error${response.data.field}`);
                    errorDOM.innerHTML = `<p class="text-danger text-center">${response.data.message}</p>`;
                }
                setAdmin({session: null});

            }

            if(response && response.data.session){
                setAdmin({session: true,...response.data});
                setCreateAdmin(true);
            }
        })
        .catch(error => console.log(error))
}

const handlerLogout = (admin, setAdmin, setSwitchMode) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    }

    fetch(`${urlApi}/api/admin/logout`, options)
        .then(res => res.json())
        .then(response => {
            setSwitchMode("ligth");
            setAdmin({session: false});
            localStorage.clear("session");
        })
        .catch(error => console.log(error));
}

const submitChangePassword = (e,dataPost,setAdmin) => {
    e.preventDefault();

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPost),
    }

    fetch(`${urlApi}/api/admin/changepassword`, options)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if(response && response.data.error){
                if(response.data.length){
                    response.data.map( error => {
                        const errorDOM = document.querySelector(`#changepassword #error${error.field}`);
                        errorDOM.innerHTML = `<p class="text-danger text-center">${error.message}</p>`;
                    })
                } else {
                    const errorDOM = document.querySelector(`#changepassword #error${response.data.field}`);
                    errorDOM.innerHTML = `<p class="text-danger text-center">${response.data.message}</p>`;
                }

            } else {
                setAdmin(response.data)
                document.querySelector(".card-body.changepassword")
                    .innerHTML = `<h5 class=" text-dark p-5">User ${response.data.name} ${response.data.lastname}</h5><h3 class="text-success mb-3">Password changed successfully!</h3>`
            }

        })
        .catch(error => console.log(error))
}

const reset = (admin, setReserves) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    }

    fetch(`${urlApi}/api/reserves/reset`, options)
        .then((res) => res.json())
        .then((response) => {
            setReserves(response.data);
        })
        .catch(error => console.log(error));

}

const getHistory = (admin, setHisory, setLoading) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    };

    fetch(`${urlApi}/api/reserves`, options)
        .then((res) => res.json())
        .then((response) => {
            setHisory(response.data);
            response.data ? setLoading({reservesOfTheDay: false}) : setLoading({reservesOfTheDay: true})
        })
        .catch(error => console.log(error));
}

const submitCreateReserve = (e,data,setReservesOfTheDay,reservesOfTheDay,setErrors,setShowError) => {
    e.preventDefault();

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }

    fetch(`${urlApi}/api/reserves/newreserve`,options)
        .then(res => res.json())
        .then(response => {
            console.log(response)

            if(response.meta.status === 300){

                response.data.map( error => {
                    const errorDOM = document.querySelector(`#newreserve #error${error.field}`);
                    errorDOM.innerHTML = `<p class="text-danger text-center">${error.message}</p>`;
                })

                setShowError(true);

            } else {
                // setShowError(false);
                setReservesOfTheDay([...reservesOfTheDay,response.data]);

                const selects = document.querySelectorAll("#newreserve select");
                const inputs = document.querySelectorAll("#newreserve input");

                selects.forEach( select => {
                    select.options.selectedIndex = 0;
                })

                inputs.forEach( input => {
                    input.value = "";
                })

                const card = document.querySelector(".modal-info");
                const header = document.querySelector(".modal-info .card-header");
                const body = document.querySelector(".modal-info .card-body");
                const footer = document.querySelector(".modal-info .card-footer");
                const buttons = document.querySelectorAll(".modal-info .card-button");
                const content = `<h3 class="text-center text-success text-capitalize">Reserve created successfully!</h3>`

                card.classList.add("w-50");
                card.classList.toggle("d-none");
                header.innerHTML = "New Reserve";
                header.classList.remove("bg-primary");
                header.classList.add("bg-success");
                body.innerHTML = content;
                footer.classList.add("bg-success");
                buttons.forEach( btn => {
                    if(!btn.className.includes("btn-danger")){
                        btn.classList.add("d-none");
                    } else {
                        btn.classList.toggle("ml-5");
                    }
                })
            }
        })
        .catch(error => console.log(error))
}

export {
    getCanchaYhorario,
    deleteReserve,
    sendHistoryReserve,
    getDataPage,
    submitCanchaYhorario,
    getAdmin,
    submitSignup,
    handlerLogout,
    submitChangePassword,
    reset,
    getHistory,
    submitCreateReserve,
    submitLink,
    submitSection,
    submitFooter,
}

const urlapi = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api-futbol5.herokuapp.com';

const qS = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
}
const qSall = (selector) => {
    const element = document.querySelectorAll(selector);
    if(element) return element;
}
const gEbID = (id) => {
    const element = document.getElementById(id);
    if(element) return element;
}

const reservesListBy = () => {
    const id = (a,b) => {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    }

    const field = (a,b) => {
        if (a.field > b.field) {
            return 1;
        }
        if (a.field < b.field) {
            return -1;
        }
        return 0;
    }

    const shedule = (a,b) => {
        if (a.shedule > b.shedule) {
            return 1;
        }
        if (a.shedule < b.shedule) {
            return -1;
        }
        return 0;
    }

    const name = (a,b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    }

    const lastname = (a,b) => {
        if (a.lastname > b.lastname) {
            return 1;
        }
        if (a.lastname < b.lastname) {
            return -1;
        }
        return 0;
    };

    const email = (a,b) => {
        if (a.email > b.email) {
            return 1;
        }
        if (a.email < b.email) {
            return -1;
        }
        return 0;
    }

    const phone = (a,b) => {
        if (a.phone > b.phone) {
            return 1;
        }
        if (a.phone < b.phone) {
            return -1;
        }
        return 0;
    }

    const date = (a,b) => {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    }

    return {
        id,
        field,
        shedule,
        name,
        lastname,
        email,
        phone,
        date
    }
}

const modal = (action, title, content) => {
    const data = {
        className: {
            div: 'w-100 bg-fourth mx-auto p-5 shadow position-absolute',
            header: 'd-flex justify-content-center align-items-center',
            icon: '',
            title: `mb-1 ml-3 h3`,
            section: 'mt-5',
            content: `text-center mb-0`,
            divbutton: 'button d-flex justify-content-center',
            button: `w-50 btn btn-sm mt-5`
        },
        style: {
            div: 'border-top: 10px solid'
        }
    }

    if(action === 'successful'){
        data.className.div = data.className.div + ' text-success';
        data.className.icon = data.className.icon + ' fas fa-check-circle fa-2x text-success';
        data.className.button = data.className.button + ' btn-outline-success';
        data.style.div = data.style.div + ' #28A745';
    }
    if(action === 'warning'){
        data.style.div = data.style.div + ' #FFC107';
        data.className.div = data.className.div + ' text-warning';
        data.className.icon = data.className.icon + ' fas fa-exclamation-triangle fa-2x text-warning';
        data.className.button = data.className.button + ' btn-outline-warning';
    }
    if(action === 'failed'){
        data.style.div = data.style.div + ' #DC3545';
        data.className.div = data.className.div + ' text-danger';
        data.className.icon = data.className.icon + ' fas fa-exclamation-triangle fa-2x text-danger';
        data.className.button = data.className.button + ' btn-outline-danger';
    }

    qS('.container-modalinfo').classList.toggle('d-none');

    const div = qS('.modal-info div');

    div.classList.value = data.className.div;
    div.setAttribute('style', data.style.div);

    qS('.modal-info header').classList.value = data.className.header;
    qS('.modal-info header i').classList.value = data.className.icon;
    qS('.modal-info header p').classList.value = data.className.title;
    qS('.modal-info header p').innerHTML = title;

    qS('.modal-info section').classList.value = data.className.section;
    qS('.modal-info section p').classList.value = data.className.content;
    qS('.modal-info section p').innerHTML = `"${content}"`;
    qS('.modal-info section div').classList.value = data.className.divbutton;
    qS('.modal-info section button').classList.value = data.className.button;

}

const hideMenu = () =>{
    const menu = qS('.menu-toggle');

    if(menu && menu.className.includes('open')){
        menu.classList.remove('open');
        qS('.header .menu').classList.toggle('show');
    }
}

export {
    urlapi,
    qS,
    qSall,
    gEbID,
    reservesListBy,
    modal,
    hideMenu
}
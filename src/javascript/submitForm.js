import {urlApiBase} from "../functions";
import { handleErrors } from "./cardPage";

const submit = async (e, id, dataPost, setState, method, route) => {
    e.preventDefault();

    const errors =  handleErrors(id, dataPost);

    if(errors[0]){

        errors.map( (error, i) => {

            if(error.element === "input"){

                const errorDOM = document.getElementById(`error${error.errorid}`);

                if(errorDOM.innerHTML === ""){
                    errorDOM.innerHTML += `<p class="col-12 text-danger my-2 border border-danger rounded pb-1">
                        ${error.message}
                    </p>`
                }
            } else if(error.element === "select"){

                const errorDOM = document.getElementById(`error${error.errorid}`);

                if(errorDOM.innerHTML === ""){
                    errorDOM.innerHTML += `<p class="col-12 text-danger my-2 border border-danger rounded pb-1">
                        ${error.message}
                    </p>`
                }

            } else if (error.element === "textarea"){

                const errorDOM = document.getElementById(`error${error.errorid}`);

                if(errorDOM.innerHTML === ""){
                    errorDOM.innerHTML += `<p class="col-12 text-danger my-2 border border-danger rounded pb-1">
                        ${error.message}
                    </p>`
                }
            }
        })
    } else {
        const options = {};

        if(dataPost.images){

            const formData = new FormData();

            formData.append("user", dataPost.user);

            for(let i = 0; i < dataPost.images.length; i++){
                formData.append(dataPost.images[i].name, dataPost.images[i].file)
            }

            options.method = method;
            options.headers = { "Content-Type": "multipart/form-data" };
            options.body = formData;

        } else {

            options.method = method;
            options.headers = { "Content-Type": "application/json" };
            options.body = JSON.stringify(dataPost);

        }

        const submitform = await fetch(urlApiBase + route, options);

        const response = await submitform.json();

        setState(response.data);

        console.log(response);
    }

}

export { submit }
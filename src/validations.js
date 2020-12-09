const validacion = {
    cancha: {
        required: {value: true, message: "El campo es obligatorio."}
    },
    horario: {
        required: {value: true, message: "El campo es obligatorio."}
    },
    nombre: {
        required: {value: true, message: "El campo es obligatorio."},
        maxLength: {value: 20, message: 'Maximo 20 carácteres!'},
        minLength: {value: 2, message: 'Mínimo 2 carácteres'}
    },
    apellido: {
        maxLength: {value: 20, message: 'Maximo 20 carácteres!'},
        minLength: {value: 2, message: 'Mínimo 2 carácteres'}
    },
    email: {
        required: {value: true, message: "El campo es obligatorio."}
    },
    telefono: {
        required: {value: true, message: "El campo es obligatorio."}
    }
}

export default validacion;
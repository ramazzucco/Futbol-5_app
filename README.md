# APP - Futbol 5

## Informacion general.

Este projecto se creo con Create React App, puesto en produccion en un servidor gratutio de heroku.

Es una aplicacion para administrar reservas y modificar el contenido de la pagina web. Como base de datos utilizo archivos .json, y para el backend utilizo node.js y express. Cuenta con un login y signup, pero para crear un nuevo administrador se requiere de una key que solo podra poseer el dueño del negocio.

    App

- __Home__ :

    Cuenta con relojes para cronometrar el tiempo de las canchas de forma individual, los mismos se inician automaticamente cuando es la hora de la reserva y ademas se pueden operar manualmente.

    Debajo se alistan las reservas con su respectivo status (reservado o libre), estas se refrescan automaticamente cada 5 minutos. Los horarios reservados se marcan en rojo y quedan parpadeando hasta que se le pasa el mouse por encimna, al pasar el mouse por encima se puede ver los datos de quien hizo la reserva.

    Con un click en la reserva se puede cancelar la misma. y cuenta con un boton refresh que actualiza las mismas.
- __Booking history__ :

    Cuenta con una seccion historial de reservas, en la cual se alistan las mismas con su respectiva informacion. En esta seccion se puede eliminar de a una, seleccionandolas individualmente o todas juntas.

- __New reserve__ :

    Contiene un formulario para crear una nueva reserva desde el administrador.

- __Configpage__ :

    - Permite modificar los textos y las imagenes de las distintas secciones de la pagina.

- __Configuration__ :

    - En esta seccion se puede modificar la cantidad de horarios para reservar asi como la cantidad de canchas disponibles.

- __Admins__ :

    Alista todos los admins y muestra si estan conectados o no.
    Seccion visible solo para el admin con mayor prioridad (id 1).

- __Statistics__ :

    - Muestra las ganancias y los beneficios, mediante graficos muestra las reservas por cancha y por horarios.

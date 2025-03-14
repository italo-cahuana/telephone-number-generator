// Funcion "mostrarMensaje" se encarga de mostrar el div con el mensaje de error (prefijo invalido ó codigo de area invalido) si el usuario introduce un numero que no corresponde.
// PD: el div por defefecto esta oculto en CSS
export function mostarMensaje(mostar) {
    const elementos = document.querySelectorAll(`.${mostar}`); // Seleccionamos todos los elementos, segun el parametro

    elementos.forEach(elementos => {
        if (elementos.style.display === 'none' || elementos.style.display == '') { // Si esta oculto, lo mostramos y si esta visible lo ocultamos 
            elementos.style.display = 'block';
        } else {
            elementos.style.display = 'none';
        }  
    }); // Mostramos y ocultamos los elementos que queramos pasandolos con un parametro
}
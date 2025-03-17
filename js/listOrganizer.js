// Funcion "organizar" se encarga de acomodar los numeros en una sola fila
export function organizar (organiza) {
    const elementos = document.querySelectorAll(`.${organiza}`);
    elementos.forEach(elementos => {
        elementos.classList.toggle("grid-desactivado"); //"classList.toggle" añade o quita la clase en CSS, si esta: la quita y si no esta: la añade en este caso desactiva clase "grid en CSS" que esta como defecto.
    });
}
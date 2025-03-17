// Funcion que se encarga de borra la lista de numeros ó el <ul> que los contiene
export function eliminarNumeros () {
    const eliminar = document.querySelectorAll('ul'); // Selecciona el elemento <ul> por su id, en este caso no tiene id así que lo seleccionamos y ya

    // Recorre cada elemento del <ul> y luego los elemina
    eliminar.forEach(eliminar => {
        eliminar.textContent = ""; // Eliminamos todo el <ul>
    });
    console.log("Numeros eliminados")
}
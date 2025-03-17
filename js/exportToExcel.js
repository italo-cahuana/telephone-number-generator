// Función para exportar la lista de números a Excel
export function exportarAExcel() {
    const listaNumeros = document.querySelectorAll('#lista-numeros li'); // Seleccionamos todos los elementos que contenga "lista-numeros" includo su li, Utilizamos el # para seleccionarlo por su nombre de ID y no por su nombre de clase
    const datos = [['Números']]; // Encabezado de la hoja de cálculo

    // Recorrermos la lista de números y luego los agregregamos al array de datos
    listaNumeros.forEach(numero => { // Utilizamos un nombre "descriptivo" (numero), podría ser cualquier otro, pero preferiblemetne uno descriptivo
        datos.push([numero.textContent]); // Vamos "poniedo" sobre el encabezado del excel los numeros de la lista a medida que los vamos recorriendo
    });             

    // Luego se crea una hoja de cálculo
    const ws = XLSX.utils.aoa_to_sheet(datos); // Recordemos que la varible "datos" en este punto ya contiene todos los mumeros que primero sacamos del li de la "lista-numeros" y que luego los convertimos a un array y que luego los fuimos agregando a dicha variabel "datos" a medida que ibamos recorriendo esa lista.

    // Ahora creamos un libro de trabajo y agregregamos la hoja a dicho libro
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Numeros');

    // Exportar el archivo (descargarlo)
    XLSX.writeFile(wb, 'lista_numeros.xlsx'); // Nombre de la hoja de calculo
    console.log("Descargando Excel")
}


import { mostarMensaje } from './showTexError.js'; // Funcion para mostar el div con el mensaje
import { organizar } from './listOrganizer.js'; // Funcion para organizar la lista de numero
import { exportarAExcel } from './exportToExcel.js'; // Funcion para organizar la lista de numero
import { eliminarNumeros } from './deleteList.js'; // Funcion para eliminar el <ul> ó la lista de numero

// Se llama a la funcion "organizar" si se hace click en el boton
document.getElementById('boton-organizador').addEventListener('click', () => organizar('lista'));

// Se llama a la funcion "eliminarNumeros" si se hace click en el boton
document.getElementById('boton-eliminar').addEventListener('click', () => eliminarNumeros());

// Se llama a la funcion "exportarAExcel" si se hace click en el boton
document.getElementById('boton-exportar').addEventListener('click', () => exportarAExcel());

// Se llama a una funcion ú otra para generar los numeros: dependendiendo de en que boton hagan click
document.getElementById('usa').addEventListener('click', () => numUsa());
document.getElementById('col').addEventListener('click', () => numCol());

// Funcion que se encarga de generar los numero de USA
function numUsa (){        
    let prefijo = document.getElementById('genera-numeros').value; // En USA los codigos de area van del 200 al 989 pero dentro de ese rango hay ciertos numeros que debemos evitar, ya que no estan asignados.
    const prefijosNoValidos = [200, 211, 222, 230, 242, 246, 250, 254, 266, 277, 288, 299, 300, 311, 322, 333, 344, 355, 366, 377, 388, 399, 400, 411, 422, 433, 444, 455, 466, 477, 488, 499, 500, 511, 522, 533, 544, 555, 566, 577, 588, 599, 600, 611, 622, 633, 644, 655, 666, 677, 688, 699, 700, 711, 722, 733, 744, 755, 766, 777, 788, 799, 800, 811, 822, 833, 844, 855, 866, 877, 888, 899, 900, 981, 982, 911, 922, 933, 944, 955, 966, 977, 987, 988, 958, 959] // En USA estos son los codigos de area que no estan asignados, evitamos que el usuario pueda introducirlos con este array

    if (!/^\d{3}$/.test(prefijo) || Number(prefijo) > 989 || Number(prefijo) < 200 || prefijosNoValidos.includes(Number(prefijo))) { // Validamos 
        console.log("codigo de area invalido USA")
        mostarMensaje('usa'); // Se muestra el div del mensaje de USA
        return;
    } else {
        console.log("Generando numeros de USA")
        let indicePrefijo = "+1 " + prefijo
        return numAleatorio (indicePrefijo);
    }    
}

// Funcion que se encarga de generar los numero de Colombia
function numCol (){ 
    let prefijo = document.getElementById('genera-numeros').value;
    const prefijosValidos = [300, 301, 302, 302, 303, 304, 305, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 333, 350, 351] // Acá en Colombia estos son los prefijos de operador validos, array para inpedir que introduzcan numeros no deseados.
    // *En colombia los prefijos van del 300 al 351, pero dentro de ese rango de numeros hay muchos que se omiten y no se deben incluir*

    if (!/^\d{3}$/.test(prefijo) || !prefijosValidos.includes(Number(prefijo))) { // Validamos que el usuario no introduzca ningun numero no deseado
        console.log("prefijo invalido colombia");
        mostarMensaje('col'); // se muestra el div con el mensaje de error de Colombia
        return;
    } else {
        console.log("Generando numeros de Colombia");
        let indicePrefijo = "+57 " +  prefijo;
        return numAleatorio (indicePrefijo);
    }    
}
function numAleatorio (indicePrefijo){ // Mas filtros y generamos el resto del numero de manera aleatoria
    let min = 1000000;
    let max = 9999999;
    if (indicePrefijo.includes("+1 ")) { // Se verifica si es de USA, asginamos rangos especiales para Estados Unidos
        min = 2000000;
        max = 7000000; 
    }  
    // Rango de combinaciones validas tanto para Colombia como para USA.(evitar 555 que se generan despues del CDA para USA)

    console.log(min);
    console.log(max);
    for (let i = 0; i < 1000; i ++){ 
    // Limite por defecto en 1000* lo puden cambiar si desean generar mas numeros de una sola tanda                           
    // ***NOO MOVER ESTA VAINA A MAS DE UN MILLON*** (por lo menos mi navegador se traba tratando de generar el millon de numeros)
    // Todo este algoritmo trata de generar la mayor cantidad de numeros "fiables" ó verdaderos, para mayor probabilidad pueden pagar una API para que llame a los numeros masivamente e integrarlo a la funcion comprobacion, así aumentar a un 100% los numeros que esten activos

        let numero = Math.floor(Math.random() * (max - min + 1)) + min; // Formula para generar numeros random
        let numeroCompleto = indicePrefijo + "-" + numero;
        comprobacion (numeroCompleto);
    }
}
let generados = new Set(); // Variable para alamcenar los num repetidos
function comprobacion (numeroCompleto){ // Se encarga de comprobar que no se generen numeros repetidos
    if (generados.has(numeroCompleto)) {
        return;
    } else {
        generados.add(numeroCompleto);
        agregarLista (numeroCompleto);
    }
}
function agregarLista (numeroCompleto) { // Luego creamos un elemento li y lo agregamos al ul en el DOM
    let li = document.createElement('li');
    li.textContent = numeroCompleto;
    document.getElementById('lista-numeros').appendChild(li);
}

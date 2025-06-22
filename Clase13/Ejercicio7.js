/*
Ejercicio 7: Mensaje según la hora
Declara una variable global llamada horaActual (puedes asignarle un valor
fijo). Crea una función declarada llamada mostrarSaludo que imprima
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.
*/

// funcion declarada
const prompt= require('prompt-sync')();

let horaActual=parseFloat(prompt( ' que hora tienes:  '));
function mostrarSaludo () {
    return horaActual<12?"buenas dias ": 
           horaActual>18? " buenas tardes ": " Buenas noches"; 
}


let saludo=mostrarSaludo( );
console.log (saludo +  "  son las" +  horaActual + " horas");
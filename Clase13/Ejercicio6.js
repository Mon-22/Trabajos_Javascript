/*
Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un
número de horas como parámetro y devuelva el total en minutos.
*/

// funcion declarada
const prompt= require('prompt-sync')();

function convertirHorasAMinutos (horas) {
    return (60/horas);
}

let horas= parseFloat(prompt('Cuantas horas:  '));
let calculo=convertirHorasAMinutos(horas)
console.log (' el numero de:  ' + horas + '  es igual a '+ calculo + ' minutos');
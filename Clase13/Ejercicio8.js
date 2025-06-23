/*
Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
 Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius
  y devuelva la temperatura en Fahrenheit. Fórmula:
*/

const prompt=require('prompt-sync')();

// funcion expresada


const convertirCelsiusAFahrenheit = function (celsius){
    return  ((celsius*1.8)+32)
}

console.log ( ' Estas ingresando a un convertidor de grados celsius a grados farenheit, ');
let celsius= parseFloat(prompt(' Escribe el numero que deseas convertir:  '  ));
let resultado = convertirCelsiusAFahrenheit(celsius);
console.log( 'el resultado es:    ' + resultado + ' grados farenheit, ');
 

/*
Ejercicio 5: Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos
nombres (nombre y apellido) como parámetros y devuelva el nombre
completo concatenado.
*/

const prompt=require('prompt-sync')();

const concatenarNombres= function (nombre,apellido){
       return nombre +' '+ apellido; 
}

let nombre= prompt( ' Escribe tu nombre: ');
let apellido= prompt (' Escribe tu apellido:  ');

let resultado =concatenarNombres (nombre,apellido); 

console.log (' El nombre completo es: ' + resultado);




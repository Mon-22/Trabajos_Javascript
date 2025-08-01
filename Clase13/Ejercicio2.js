/*
Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos
números como parámetros y devuelva el número mayor.
*/

const prompt = require('prompt-sync')();

// funcion expresada


const encontrarMayor = function (a,b){
    return  a>b ? a:b; // puede ser con un if normal , en este caso utilice un operador ternario.
}


let a = parseFloat(prompt(' Dame un numero: '));
let b = parseFloat(prompt(' Dame otro numero: '));  

let resultado = encontrarMayor(a,b);
console.log( 'el numero mayor es:  ' + resultado);
 

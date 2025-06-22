/*
Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva
"Es par" si el número es par o "Es impar" si el número es impar. Usa una
variable local para guardar el resultado.
*/

// funcion declarada
const prompt= require('prompt-sync')();

let b= parseFloat(prompt(' dame un numero '));

function esPar (b) {
    return (b%2)!=0 ? "es impar" : "es par" ; // puede ser con un if normal , en este caso utilice un operador ternario.
    
}

let resultado = esPar (b)

console.log (' el numero es: ' + resultado);
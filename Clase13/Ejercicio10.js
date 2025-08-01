/*
Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un número y
 devuelva su factorial. Fórmula del factorial:
*/

// funcion expresada


const calcularFactorial = function (numero){
    return  (numero!); // puede ser con un if normal , en este caso utilice un operador ternario.
    // n!=nx(n-1)x...x2x1
}


let a = parseFloat(prompt(' Dame un numero: '));
let b = parseFloat(prompt(' Dame otro numero: '));  

let resultado = encontrarMayor(a,b);
console.log( 'el numero mayor es:  ' + resultado);
 
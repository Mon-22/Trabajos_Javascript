/* 
Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos
parámetros: la base y la altura de un triángulo. La función debe devolver el
área del triángulo.
Pista: Usa la fórmula:
*/

// funcion declarada
const prompt= require('prompt-sync')();

function calcularAreaTriangulo (b,a) {
    return (b*a)/2;
}

let b= parseFloat(prompt(' Escribe la base del triangulo, '));
let a= parseFloat(prompt('Escribe la altura del triangulo: '));

let calculo=calcularAreaTriangulo(a,b)


console.log (' el area es: ' + calculo);
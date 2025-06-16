/* 
• Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados.
*/

 const prompt = require('prompt-sync')();

let NumeroGuardado=[];
let NumeroUsuario = parseFloat(prompt('Dame un numero: '));

while (NumeroUsuario >= 0 ) {

    NumeroGuardado.push(NumeroUsuario);
    console.log(' El numero que acabas de ingresar es positivo, , sigue intentado. ');
    NumeroUsuario  = parseFloat(prompt(' Ingresa otro numero : '));
}

console.log( '\n Numeros ingresados: ' );
console.log(NumeroGuardado.join(  ));
console.log( 'muy bien!, has ingresado un numero negativo: '+NumeroUsuario );
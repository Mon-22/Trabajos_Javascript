/* Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. 
Muestra un mensaje explicativo indicando qué significa cada caso.*/


 const prompt = require('prompt-sync')();

 let numeroDeUsuario = parseFloat(prompt(' dame un numero: '));

 numeroDeUsuario%2===0 ?console.log( "Es numero par") : console.log( "Es numero impar");


 
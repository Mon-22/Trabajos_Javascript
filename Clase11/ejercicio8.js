/* Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100.
' Utiliza un ciclo for para resolverlo.*/

const prompt = require('prompt-sync')();

 let numeroUsuario = parseFloat (prompt( 'Podrias por favor darme un numero entero positivo: ' ));

 for (let num=numeroUsuario;num <=100 ;num +=numeroUsuario){
    console.log ( num );
 };
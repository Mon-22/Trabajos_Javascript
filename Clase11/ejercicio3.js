/* Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo.
El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
Usa un ciclo for para realizar la tarea.*/

 const prompt = require('prompt-sync')();

 let numeroUno = parseFloat(prompt(' dame un numero: '));
 for (let numerodos=1;numerodos <=numeroUno;numerodos ++){
    console.log ( "hasta llegar al numero"  +numerodos );
 };

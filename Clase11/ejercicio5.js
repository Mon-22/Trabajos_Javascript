/* Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.
*/

 const prompt = require('prompt-sync')();

 let numeroInicio = parseFloat(prompt(' Dame un numero entero inicio: '));
 let numeroFin = parseFloat (prompt(' Dame otro numero entero fin : '));


 for (let num=numeroInicio;num <=numeroFin ;num +=numeroInicio){
    console.log ( num );
 };

 if  (numeroInicio>numeroFin){
    console.log ('los valores son invalidos');
 };


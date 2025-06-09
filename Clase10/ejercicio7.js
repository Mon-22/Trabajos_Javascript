/*
    • Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores.
     Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, 
aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
*/

const prompt=require('prompt-sync')();

let varUno=1
let varDos=2

console.log ( ' actualmente las variables uno y dos tienen el valor de 1 y 2, respectivamente, ');
let result=prompt (' deseas cambiar los valores ? '); 

if ( result== 'si'|| result == 'Si' || result == 'SI') {

varUno=prompt ('\n Asignale un nuevo valor a la variable uno:  '); 
varDos= prompt('\n Asignale un nuevo valor a la variable dos:  '); 

console.log (' Los nuevos valores son:  ' + varUno, 'y '+ varDos , ' respectivamente'); 

} else {

    console.log (' se conservan los valores  ')
} 


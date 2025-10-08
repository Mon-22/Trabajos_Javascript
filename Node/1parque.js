/* Ejercicio 1: ¿Quién puede entrar al parque? 🎢
Tienes un parque de diversiones que permite la entrada a personas
mayores de 12 años y menores de 60. Escribe una función que reciba una
lista de edades y devuelva cuántas personas pueden entrar al parque.
Consigna:
 Usa un bucle for y condicionales.
 Usa un array como entrada de la función.
 Devuelve el número de personas que cumplen con los requisitos */

const prompt = require('prompt-sync')();

let name=prompt (' Cual es tu nombre? ');
let age=parseInt(prompt( 'Que edad tienes?'   ));

function checkAge(age){
    if (age > 12 && age < 60){
        console.log ('si puede entrar al aprque ');
    } else {

    console.log (' no tiene la edad adeacuada para ingresar ');
    }
}
checkAge(age);


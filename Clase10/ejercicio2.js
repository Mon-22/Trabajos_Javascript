/*
    • Ejercicio 2 – Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso,
 y luego muestre un mensaje personalizado que incluya toda esta información.

Desglosando el ejercicio deberás:
    1. Pide al usuario que ingrese su nombre.
    2. Pide al usuario que ingrese su edad.
    3. Pide al usuario que ingrese su peso.
    4. Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. Ahora nos toca pedir datos al usuario,
 por lo que usaremos prompt-sync para solicitar esta información.
*/

const prompt = require('prompt-sync')();

let name=prompt(' Ingresa tu nombre: ');
let age=prompt(' Ingresa tu edad: ');
let kg=prompt(' Cual es tu peso en kg: ')

console.log(' que alegria que te encuentres con nosotros: '+name, ' quiero decirte que te ves muy bien para tus: ' +age,  'ni parece que peses: '+kg);

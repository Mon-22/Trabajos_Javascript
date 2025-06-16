/*
    • Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña.
 Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta.
  La contraseña correcta es "1234".
*/

const prompt = require('prompt-sync')();


let UserPassword;

do { 
    
    UserPassword = parseFloat(prompt('Ingresa tu password '));
   
    if (UserPassword != '1234' ){
        console.log(' Incorrecto');
    }    
    NumeroUsuario  = parseFloat(prompt(' Ingresala de nuevo : '));
} while (UserPassword != "1234");
    console.log (' es correcto');



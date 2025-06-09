/* Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación matemática a realizar:
 suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y 
 mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.
  Usa switch para resolverlo.*/

  
 const prompt = require('prompt-sync')();

 let numeroUno = parseFloat (prompt( 'Dame un numero: ' ));
 let numeroDos = parseFloat (prompt(' Dame otro numero:  '));

 console.log ('\n Menu de opciones: \n 1) suma, \n 2) resta, \n 3) multiplicacion, \n 4) division');

 let opcion = parseInt(prompt( 'Elije una opcion: ' ));

 switch (opcion){
    case 1:
        
        console.log( ' El resultado de la suma es: '+ (numeroUno + numeroDos));
        break;
    case 2:
        
        console.log ( ' El resultado de la resta es: '+ (numeroUno - numeroDos));
        break;
    case 3:
        
        console.log( ' El resultado de la multiplicacion es: '+ (numeroUno * numeroDos));
        break;
    case 4:
        
        console.log( ' El resultado de la division es: '+ (numeroUno/numeroDos));
        break;
    default:
        console.log (' error , no tenemos esa opcion')
 }
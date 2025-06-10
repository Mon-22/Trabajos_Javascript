/* Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.
 Luego, pide al usuario que adivine el número hasta 3 intentos. 
 Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes.
  Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.
*/

const prompt = require('prompt-sync')();
const numeroAzar=Math.floor(Math.random()*10 )+1;

for( let vuelta=1;vuelta <4;vuelta++){
let numeroUsuario=parseInt(prompt(' Dame un numero, del 1 a al 10 '));

  if (numeroAzar===numeroUsuario){
      console.log ( 'Adivinaste era el numero: ' + numeroAzar);
      Process.exit(0);

    }
}

console.log (' Lo siento , el numero era:  '+ numeroAzar);
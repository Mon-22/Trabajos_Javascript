/*
Ejercicio 9:
 Contar hasta un número Crea una función declarada llamada contarHasta que reciba un número 
y use un bucle para imprimir todos los números desde 1 hasta ese número.
*/


// funcion declarada
const prompt= require('prompt-sync')();

function contarHasta (numeroLimite) {
    for (let i=1;i<=numeroLimite;i++){ // recuerda, para que imprima cada numero la condicion es mayor o igual, menor o igual segun sea el caso, si se pone == solo imprme el numero al que es igual.
        console.log(i);

    }
    return ` contar hasta ${numeroLimite}`;
}

let numeroLimite= parseFloat(prompt(' Hasta que numero quieres que cuente:  '));
let calculo=contarHasta(numeroLimite)
console.log ( calculo);
/*
    • Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, 
pero menores que 1000.
*/

const prompt= require ('prompt-sync')();

let matrizDeCien= [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4],
]
for (let i=0;i<matrizDeCien.length;i++){
    for (let j=0;j< matrizDeCien[i].length;j++){
       if (matrizDeCien[i][j]>= 10){
          let suma = matrizDeCien[i][j]+matrizDeCien[i][j];
          console.log (' el resultado es: ' +suma);
        } else {
    console.log (' nada ');
        }
    }
}        


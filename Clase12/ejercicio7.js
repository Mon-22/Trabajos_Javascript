/*
    • Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
Luego, escribe un algoritmo para sumar todos los números en la matriz.
*/

let matrizCinco = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
]

let suma=0
for (let i=0; i<matrizCinco.length;i++){
    for (let j=0;j<matrizCinco[i].length;j++){
        suma += matrizCinco[i][j];
        console.log (' el resultado es:  ' + suma);
    }
}
/* Ejercicio 3: Ordenando números 🔢
Crea una función que reciba un array de números y devuelva un nuevo
array con los números ordenados de menor a mayor.
Consigna:
 Usa el método sort().*/

const prompt = require('prompt-sync')();

function orderNumbers (array){
    return array.sort((a, b) => a - b);
}

const input=prompt("ingresa numeros, por favor separalos por comas(ejemp. 5,6,3,2):");
const numberArray=input.split(',').map(num=>{
    const numClear = num.trim();
    const number = parseFloat (numClear);
    return number;
})
const numerosOrdenados = orderNumbers(numberArray);
console.log("Array original:", numberArray);
console.log("Array ordenado:", numerosOrdenados);
/* Ejercicio 2: El menú del día 🍽️
Escribe una función que reciba un objeto con platos y precios, y devuelva
los platos cuyo precio sea menor a $20.
Consigna:
 Usa un bucle for...in.
 Usa objetos y arrays. */

const prompt = require('prompt-sync')();

const menu= {

    "sopa" :15,
    "sandwish":10,
    "papas fritas":10,
    "agua del dia":5, 
    "pozole ": 25,
}

function lowPrice(menu) {
    let platesCheap =[];

    for (let plate in menu) {
        if (menu[plate]<20){
            platesCheap.push(plate);    
        }
    }

    return platesCheap;
}

let result = lowPrice(menu);
console.log (" platos menores de $20.00: " , result);
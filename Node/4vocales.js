/*
Ejercicio 4: Contando vocales 🅰️🅾️
Crea una función que reciba una cadena de texto y devuelva cuántas
vocales contiene.
Consigna:
 Usa un bucle for y condicionales.
 Considera vocales mayúsculas y minúsculas (a, e, i, o, u). */


const prompt = require('prompt-sync')();

function countVowels (texto){
    let counter =0;
    const vowels = "aeiou";

    for (let i =0; i<texto.lenght; i++){
        if (vowels.includes(texto[i])){
            counter++;
        }
    

    }

    return counter;
}


const userText = prompt (" escribe un texto y contare tus vocales: ");
const qtyVowels = countVowels (userText);

console.log (` El texto "${userText} "tiene ${qtyVowels} vocales`);

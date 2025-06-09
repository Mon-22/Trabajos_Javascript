/*
    • Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta una temperatura 
    dada en grados Celsius a grados Fahrenheit. La fórmula de conversión es: 

f=Cx9/5+32

Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
	Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi: 
let fahrenheit = celsius * 9 / 5 + 32; 

*/
const prompt=require('prompt-sync')();

let grados=parseFloat(prompt(' cuantos grados Celcius son los que deseas convertir:  ')); 

let result= ((grados*9/5)+32); 

console.log( grados, ' Celcius es igual a   ', + result, 'Fahrenheit ');

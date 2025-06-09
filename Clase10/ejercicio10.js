/*

    • Ejercicio 10 - Cálculo de Descuento: 
    Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. 
    Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:

let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

*/
const prompt=require('prompt-sync')();

let precioOriginal= parseFloat(prompt(' Escribe el precio original del producto:  '));
let porcentajeDescuento=parseFloat(prompt(' cuanto es el porcentaje descuento :  ')); 

let resultado= precioOriginal*(porcentajeDescuento/100);
let precioConDescuento=(precioOriginal-resultado)
console.log(' el precio con descuento es :  '+precioConDescuento);


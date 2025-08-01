/*
    • Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día,
 el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día.
 Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 

    a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana,
     es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. 
     Recordar que las matrices comienzan siempre en posición 0. 
    b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, 
    por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
    c) Por último, es necesario tener el total de gastos realizados en el mes.
    • Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
    • Posibles matrices para comprobar los resultados.
    */
   
    ExpenseMatrix = [
        [1135,2500,900,1600,2800,3650,1100],
        [1750,1890,1900,1300,898,1750,2800],
        [1700,1150,1690,1900,1770,4500,2560],
        [800,1250,1430,2100,1980,1270,950],
    ]

let SumOfDays=0;
let SumOfWeeks=0;
let SumofMonth=0;
let SaveResult=[];


// aqui suma todo el mes
    for (let i=0;i<4;i++){
        for( let j=0;j<7;j++) {
      SumofMonth+= ExpenseMatrix[i][j]; 
      SumOfWeeks+= ExpenseMatrix[i][i];
        }  
    }
       SaveResult.push(SumofMonth);
       SaveResult.push(SumOfWeeks);
       console.log (' el total de gastos mensual es: ' + SumofMonth);
       console.log (' el total de la semana es:  '+SumOfWeeks)

    



    
const importEstudiantes=require ('./estudiantes.js'); // con esto se deberia importar el objeto.

// muestra nombre de todos los estudiantes

console.log (" Estudiantes del curso: ");
importEstudiantes.forEach(importEstudiantes => {
    console.log(importEstudiantes.nombre);
    
});

// aqui calculare el promedio

const estudianteEspecifico = estudiantes.find(est => est.nombre ==="Harry");
if (estudianteEspecifico){
    const promedio = estudianteEspecifico.notas.reduce((a,b)=> a+b,0)/estudianteEspecifico.notas.length;
    console.log(`\nPromedio de notas de ${estudianteEspecifico.nombre}: ${promedio.toFixed(2)}`)
} else {
        console.log(" Estudiante no encontrado ");
    }


// agregando un nuevo estudiante

const nuevoEstudiante = {
    nombre: " Gregory Goyle",
    edad: 9,
    curso : " Artes Oscuras",
    notas : [ 60 ,50,70]
};
estudiantes.push(nuevoEstudiante);

console.log("\nLista de escudiantes actualizados (JSON):");
console.log(JSON.stringify(estudiantes, null,2));
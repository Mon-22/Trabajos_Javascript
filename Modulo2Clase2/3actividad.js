const importCourse=require ('./datos.js'); // con esto se deberia importar el objeto.

console.log("Informacion del curso: ");
console.log("Nombre: ", importCourse.name);
console.log("Duracion: ", importCourse.courseTime);
console.log("Temas: ", importCourse.topics.join(" , "));

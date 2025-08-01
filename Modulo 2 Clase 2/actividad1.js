// creando un objeto JSON
let libro = {
    "title":"El medico",
    "author": "Noah Gordon",
    "year": 1986,
    "gender": ["novela historica" , " ficcion"],
    "ISBN": "8466616381"
};

// mostrar titulo y autor
console.log (" Titulo: " , libro.titulo);
console.log(" Autor: ", libro.author);

// actualizar el year

libro.year = 2025;

// add pages

libro.pages = 993;

// show all objet 

console.log (" Libro actualizado: ", libro );
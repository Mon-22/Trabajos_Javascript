let student = {
    "name" : " Venus",
    "age" : 7,
    "course" : "math",
    "note ": [100,70,85]
}

// convertir a JSON

let jsonString = JSON.stringify(student);
console.log (" cadena JSON: ");
console.log (jsonString);

// de JSON a Objeto

let objetConvert = JSON.parse(jsonString);
console.log ("\n Objeto Convertido: ");
console.log (objetConvert);
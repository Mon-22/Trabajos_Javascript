// Sistema para gestion de biblioteca

const prompt=require('prompt-sync')();


// Library Data ( Arrays )

let Books = [
  {id: 1,   
    titulo: "A la sombra del Angel",    
    Autor: "Kathryn S. Blair",   
    año: 2010 ,   
    genero: "Novela Biografica",   
    disponible: true },  
  {id: 2,  
    titulo: "La biblioteca de la media noche", 
    Autor: "Matt Haig" , 
    año: 2021 ,  
    genero: "Ficcion", 
    disponible: true },
 {id: 3, 
    titulo: "Harry Potter y El Prisionero de Askaban", 
    Autor:"J. K Rowling" , 
    año: 1999 , 
    genero: "Fantasia",   
    disponible: true },  
  {id: 4, 
    titulo: "El asesinato de Aristoteles", 
    Autor: "Marcos Chicot",  
    año: 2025 ,   
    genero: "Novela Historica",   
    disponible: true }, 
 {id: 5,   
    titulo: "Matilde",    
    Autor : "Carlos Pascual",   
    año: 2021 ,   
    genero: "Novela Biografica",  
    disponible: true } , 
 {id: 6,   
    titulo: "Los Siete Maridos de Evelyn Hugo",   
    Autor: "Taylor Jenkins Reid" ,   
    año: 2020 ,   
    genero: "Novela" ,   
    disponible: true }  ,
 {id: 7,  
    titulo: "El principe",
    Autor: "Nicolas Maquiavelo",   
    año: 1532 ,   
    genero: "Tratado politico",   
    disponible: true }  ,
 {id: 8,   
    titulo: "El Hombre en busca de sentido",    
    Autor: "Viktor Frankl" ,   
    año: 1946 ,   
    genero: "Autobiografica",  
    disponible: true }  ,
 {id: 9,   
    titulo: "Mis dias en la libreria Morisaki",    
    Autor: "Kathryn S. Blair",   
    año: 2010 ,   
    genero: "Novela Biografica",   
    disponible: true } ,
 {id: 10,   
    titulo: " Cincuenta palos y sigo soñando",    
    Autor: "Pau Donés" ,   
    año: 2017 ,   
    genero: "Autobiografica",   
    disponible: true }  ,
];
let Users =  [];
let Lends = [];
let Reports= [];

// functions block

function DataNormalize(Books){
    return Books
      .trim()
      .replace(/\s+/g, ' ')
      .toUpperCase()
  }
// block of menu functions 
// Main menu 

function CreateMainMenu () {
    console.log( ' **** MENU LA BIBLIOTECA DE MONICA ****');
    console.log(" 1 Libros");
    console.log(" 2 Usuarios");
    console.log(" 3 Prestamos");
    console.log(" 4 Reportes");
    console.log(" 5 Salir");

    const option = prompt(' Selecciona una opcion:  ');
switch (option){
    case"1":
    CreateBooksMenu();
    case"2":
    CreateUserMenu();
    case"3":
    CreateLendsMenu();
    case"4":
    CreateReportsMenu();
    case"5":
    console.log (' Saliendo del sistema ...');
    break;   

    }
    
}

  function CreateBooksMenu (){
    console.log("**** LIBROS ****");
    console.log(" 1 Agregar Libro");
    console.log(" 2 Buscar Libro");
    console.log(" 3 Ordenar Libros");
    console.log(" 4 Borrar Libros");
    console.log(" 5 Salir");

    const option = prompt(' Selecciona una opcion:  ');
    switch (option){
        case "1":
        let promptId = parseInt(prompt(' '));
        let promptTitle = prompt(' Ingresa titulo del libro: ');
        let promptAuthor = prompt(' Ingresa nombre del autor libro: ');
        let ptomptYear = parseInt(prompt(' Ingresa anio de publicacion libro: '));
        let promptGenre = prompt(' Ingresa genero o clasificacon de libro: ');
        let promptAvailable = prompt(' Disponibilidad del libro true/false: ');
        promptAvailable = promptAvailable ===  "true"? true : false;
       
        let PromptBook= {
            id: promptId,
            titulo:promptTitle,
            Autor:promptAuthor,
            año:ptomptYear,   
            genero:promptGenre,
            disponible:promptAvailable 
         }

         Books.push(PromptBook);     
    }
}

  function CreateUserMenu () {
    console.log("**** USUARIOA ****");
    console.log(" 1 Registrar usuario  ");
    console.log(" 2 Mostrar todos los usuarios ");
    console.log(" 3 Buscar usuario ");
    console.log(" 4 Borrar Usuario ");
    console.log(" 5 Salir "); 

    const option = prompt (' Selecciona una opcion:  ');
    switch (option) {
        case "1":
            let UserId = parseInt (prompt(' ID de usuario: '));
            let UserName = prompt ( ' Nombre de Usuario: ');
            let UserLastname = prompt ( ' Apellido de Usuario: ');
            let UserAge = prompt (' edad de usuario: ');
            let UserMail = prompt (' Correo electronico de usuario');
    }

  }

  function CreateLendsMenu (){
    console.log("**** PRESTAMOS ****");
    console.log('1 Prestar libro ');
    console.log('2 Devolver libro ');
    console.log('3 Reportes de prestamos');
     

  }

  function CreateReportsMenu () {
    console.log("**** REPORTES ****");
    console.log('1 Total de libros ');
    console.log('2 Cantidad de libros prestados');
    console.log('3 Cantidad de libros por genero ');
    console.log('4 Libro mas antiguo y mas nuevo');
    console.log('5 promedio de anios de publicacion de libros ');
    console.log('6 Anio de publicacion mas frecuente ');
    console.log('7 Diferencia de anios entre libros mas antiguo y el mas nuevo'); 

  }

CreateMainMenu ();
console.log(Books);
console.log(Users);





// Data Base  , libros existentes
// Libros = [
//     {id: 1,   
//     titulo: "A la sombra del Angel",    
//     Autor: "Kathryn S. Blair",   
//     año: 2010 ,   
//     genero: Novela Biografica,   
//     disponible: true },  
//     {id: 2,  
//      titulo: La biblioteca de la media noche, 
//      Autor: Matt Haig , 
//      año: 2021 ,  
//      genero: Ficcion, 
//      disponible: true },
//     {id: 3, 
//     titulo: Harry Potter y El Prisionero de Askaban, 
//     Autor:J. K Rowling , año: 1999 , 
//     genero: Fantasia,   
//     disponible: true },  
//     {id: 4, 
//      titulo: El asesinato de Aristoteles, 
//      Autor: Marcos Chicot,  
//      año: 2025 ,   
//      genero: Novela Historica,   
//      disponible: true }, 
//     {id: 5,   
//      titulo: Matilde,    
//      Autor : Carlos Pascual,   
//      año: 2021 ,   
//      genero: Novela Biografica,  
//      disponible: true } , 
//     {id: 6,   
//      titulo: Los Siete Maridos de Evelyn Hugo,   
//      Autor: Taylor Jenkins Reid ,   
//      año: 2020 ,   
//      genero: Novela ,   
//      disponible: true }  ,
//     {id: 7,  
//      titulo: El principe,
//      Autor: Nicolas Maquiavelo,   
//      año: 1532 ,   
//      genero: Tratado politico,   
//      disponible: true }  ,
//     {id: 8,   
//      titulo: El Hombre en busca de sentido,    
//      Autor: Viktor Frankl ,   
//      año: 1946 ,   
//      genero: Autobiografica,  
//      disponible: true }  ,
//     {id: 9,   
//      titulo: Mis dias en la libreria Morisaki,    
//      Autor Kathryn S. Blair,   
//      año: 2010 ,   
//      genero: Novela Biografica,   
//     disponible: true } ,
//     {id: 10,   
//      titulo: 50 palos y sigo soñando,    
//      Autor: Pau Donés ,   
//      año: 2017 ,   
//      genero: Autobiografica,   
//      disponible: true }  ,
    
// ];
// }
// 
// Users = [
// { id: 1, 
// Name: Venus , 
// LastName: Poke,
// Age: 30;
// Mail:venustina@mailito.com},
//]






             

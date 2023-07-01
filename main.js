
let opcion;

do { 
opcion= parseInt( prompt("Ingrese una opcion: \n 1- SALUDAR \n 2- CALCULAR EDAD \n 3- INGRESE q PARA SALIR"));
console.log("opcion " + opcion);
switch(opcion) {
    case 1:
    let nombre= prompt("Ingresa tu nombre ");
    alert("Hola " + nombre);
    break;
    case 2:
    let edad= prompt("Ingresa tu edad ");
    edad= parseInt(edad);
    let AnioActual= 2023;
    AnioActual= parseInt(AnioActual);
    let nacimiento= ( AnioActual - edad );
    alert("Tu año de nacimiento es " + nacimiento);
    break;
    case q:
        alert("Saliendo del programa");
        break;
    default:
        alert("Opcion no valida")
}
}while ( opcion != "q");

// crear un bucle do while que le pida al usuario su nombre. 
//si es distinto de 'q' mostrar con una alertar un mensaje que diga "hola " + nombre; 
//si es 'q' cortar el bucle.


let nombre;
do {
let nombre= prompt("como te llamas?");
if (nombre !== "q") {
    alert(" hola " +  nombre)
}
}while ( nombre != "q");



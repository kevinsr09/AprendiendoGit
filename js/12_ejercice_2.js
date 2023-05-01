"use strict"

var suma = 0;
var contador = 0;

do {

    var number = Number(prompt("Ingresa un número"));

    if (isNaN(number)) {
        number = 0;
    } else if(number >= 0){
        suma += number;
        contador++;
    }


} while (number >= 0)

if (contador > 0) {
    console.log("La suma total es: " + suma);
    console.log("El promedio es: " + (suma / contador));
}

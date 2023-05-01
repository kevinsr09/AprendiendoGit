"use strict"

var number_one = Number(prompt("Ingresa el numero uno", 0));
var number_two = Number(prompt("Ingresa el dos uno", 0));

document.write("<h1>los numeros van de " + number_one + " a " + number_two + "</h1>")

for(var i = number_one; i <= number_two; i++){
    document.write(i + "<br/>")
}
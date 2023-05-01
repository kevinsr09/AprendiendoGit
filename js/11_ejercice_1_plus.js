"use strict"

var number_one = 0;
var number_two = 0;

while (number_one <= 0 || number_two <= 0 || isNaN(number_one) || isNaN(number_two)) {

    number_one = Number(prompt("Ingrese el primer numero"));
    number_two = Number(prompt("Ingrese el segundo numero"));

}


if (number_one == number_two) {
    alert("los números son iguales.")
} else if (number_one > number_two) {
    alert(number_one + " es mayor que " + number_two)
} else if (number_two > number_one) {
    alert(number_two + " es mayor que " + number_one)
}

var lista = [];

for(let index = 0; index <6; index++){
    lista.push(prompt("escriba el numero: ", 0));
};
var array_order = lista;

console.log("lista original: " + lista);

function viewArray(array_in,customText = ""){
    document.write("<br/><h1>Array " + customText + " </h1>");
    document.write("<ul>");
    array_in.forEach(element => {
        document.write("<li>" + element + "</li>")
    });
    document.write("</ul>");
    console.log(array_in);
}

console.log("lista original: " + lista);


viewArray(array_order, "lista original");


array_order.sort(function(a, b) {return a-b});
/*
viewArray(array_order, "lista ordenada");

viewArray(array_order.reverse(), "lista desordenada");
*/

document.write("<br/><h2>Array number elements: " + array_order.length + "</h2>");

console.log("lista original: " + lista);
var element_search = prompt("escriba el numero a busacar: ");
document.write(lista.findIndex(element => element == element_search));
document.write(lista);


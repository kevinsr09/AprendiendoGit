"use strict"

//var caja = document.getElementById("caja");
/*var caja = document.querySelector("#caja")

caja.innerHTML = "nuevo txt";
caja.style.background = "red";
caja.style.height = "300px";
caja.style.transition = "all 300ms"



function changeColorBackground(color){
    caja.style.background = color
}
*/


var allDivs = document.getElementsByTagName("div");
var section = document.querySelector("#content");

for(let i in allDivs){
    let paragraph = document.createElement("p");
    let text = document.createTextNode(allDivs[i].textContent);
    paragraph.append(text);
    if(typeof allDivs[i].textContent == "string"){
        section.append(paragraph);    
    }
}

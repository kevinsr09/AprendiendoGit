
window.addEventListener("load", function () {

    var formCreate = this.document.querySelector("#createMovie");
    var formRemove = this.document.querySelector("#removeMovie");
    var ul = document.querySelector("#listMovie");


    formCreate.addEventListener("submit", function () {

        var infoMovie = formCreate.querySelector("#textCreate").value;

        if (infoMovie.length >= 1) {
            localStorage.setItem(infoMovie, infoMovie);
        }

    });


    formRemove.addEventListener("submit", function () {

        var infoMovie = formRemove.querySelector("#textRemove").value;

        if (infoMovie.length >= 1) {
            localStorage.removeItem(infoMovie);
        }

    });



    for (var index in localStorage) {

        if (typeof localStorage[index] == "string"){
    
            var li = document.createElement("li");
            li.append(localStorage[index]);
            

            ul.append(li);
        }
    }






});







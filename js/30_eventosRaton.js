

window.addEventListener("load", () => {
    var button = document.getElementById("button");
    button.style.background = "green";
    button.style.padding = "10px";
    button.style.color = "white";
    var btn = button.style.background;

    function clickButton() {
        if (btn == "green") {
            button.style.background = "red";
        } else {
            button.style.background = "green";
        }
    }




    button.addEventListener("click", function () {
        clickButton();
    });


    button.addEventListener("mousemove", function () {
        button.style.background = "#ccc";
    });

    button.addEventListener("mouseout", function () {
        clickButton();
    });


    var input = document.getElementById("campo_nombre");
    input.addEventListener("focus", function () {
        console.log("Focus");
    });

    input.addEventListener("blur", function () {
        console.log("blur");
    });

    input.addEventListener("keydown", function (event) {
        console.log("keydown ", String.fromCharCode(event.keyCode));
    });

    input.addEventListener("keypress", function (event) {
        console.log("keypress ", String.fromCharCode(event.keyCode));
    });
})




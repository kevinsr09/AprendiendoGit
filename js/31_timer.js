
window.addEventListener("load", () => {
    
    var hOneFont = document.querySelector("h1");
    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");


    function interActive() {
        let iterTime = setInterval(function () {
            if (hOneFont.style.color == "black") {
                hOneFont.style.color = "red";
            } else {
                hOneFont.style.color = "black"
            }
        }, 1000);
        return iterTime
    }
  

    var interTime = interActive();

    
    stop.addEventListener("click", () => {
        clearInterval(interTime);
    });

    start.addEventListener("click", () => {
        interTime  = interActive();
    });




});
window.addEventListener("load", ()=>{

    var form = document.querySelector("#form");
    var viewSubmit = document.querySelector(".viewSubmit");

    form.addEventListener("submit", function(){

        var box_name = document.querySelector("#boxName");
        box_name.append(document.querySelector("#name").value);

        var box_name = document.querySelector("#boxSurName");
        box_name.append(document.querySelector("#surname").value);
        
        var box_name = document.querySelector("#boxAge");
        box_name.append(document.querySelector("#age").value);

        viewSubmit.style.display = "block";


    });
    


});
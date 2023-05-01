window.addEventListener("load", ()=>{

    var ol = document.querySelector("#listUsers")
    var usuarioOrder = [];
    var usuarios = [];

    fetch("https://reqres.in/api/users?page=2")
    .then(data => data.json())
    .then(users =>{

        usuarios = users.data;


        usuarios.map(user => {

            usuarioOrder.push(user.first_name + " " + user.last_name);
        });
        

        usuarioOrder.sort();
        usuarioOrder.map(fullName => {
    
            console.log(fullName)
            let li = document.createElement("li");
            li.append(fullName);
            ol.append(li);
        });
    
        
    });




});
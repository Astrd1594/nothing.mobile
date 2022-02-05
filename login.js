function login(){
    if(document.getElementById("pwinput").value == "asdf"){
        window.location = "mainscreen.html";
        document.getElementById("pwinput").innerHTML = "";
    } else{
        var row = '<div class="alert alert-danger"><div class="glyphicon glyphicon-remove"></div> Wrong password</div>';
        document.getElementById("output").innerHTML = row;
    }
}
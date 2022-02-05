var gettext = "";
function text(){
    document.getElementById("textarea").innerHTML = localStorage.getItem("text");
}
function save(){
    localStorage.setItem("text", document.getElementById("textarea").value);
    gettext = localStorage.getItem("text");
    console.log(gettext);
}
function present(){
    save();
    window.location = "presentation.html";
}
function edit(){
    save();
    document.getElementById("textarea").readOnly = false;
    document.getElementById("savebtn").disabled = false;
    document.getElementById("presentbtn").disabled = false;
    document.getElementById("readonlybtn").disabled = false;
    document.getElementById("editbtn").disabled = true;
}
function readonly(){
    save();
    document.getElementById("textarea").readOnly = true;
    document.getElementById("savebtn").disabled = true;
    document.getElementById("presentbtn").disabled = true;
    document.getElementById("readonlybtn").disabled = true;
    document.getElementById("editbtn").disabled = false;
}
function logout(){
    save();
    window.location = "index.html";
}
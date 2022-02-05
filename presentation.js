var gettext = localStorage.getItem("text");
console.log(gettext);
function loadtext(){
    document.getElementById("p").innerHTML = gettext;
}
function back(){
    window.location = "mainscreen.html";
}
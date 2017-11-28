// Selecciona el objeto al que le vamos a asignar el event listener de click
var butonClicked = document.querySelector("button");
// Seniala la operacion que hara el objeto y le da un click listener
butonClicked.addEventListener("click", function(){
    alert("AuchXD");
    if (document.body.style.background == "purple"){
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple";
    }
});
// Seleccionamos los objetos de botones de los jugadores y de reset
var butonPlayer1 = document.getElementById("botonJugador1");
var butonPlayer2 = document.getElementById("botonJugador2");
var botonReset = document.getElementById("botonResetear");

// Variables Globales de puntaje
var puntajeJugador1 = 0;
var puntajeJugador2 = 0;

// Variable que define puntaje maximo
var puntajeMaximo = 5;

butonPlayer1.addEventListener("click", function(){
    //alert("click");
    // Aniade 1 al puntaje del jugador 1
    puntajeJugador1++;

    // Condicion de puntaje maximo
    if(puntajeJugador1 > puntajeMaximo) {
        puntajeJugador1 = puntajeMaximo;
    } else {
        // Hace una variable de cadena que indique el puntaje para pasarsela al HTML de h1
        var puntajeGlobal = puntajeJugador1 + " to " + puntajeJugador2;
        document.querySelector("h1").innerHTML = puntajeGlobal;
    }
});

butonPlayer2.addEventListener("click", function(){
    //alert("click");
    // Aniade 1 al puntaje del jugador 1
    puntajeJugador2++;

    // Condicion de puntaje maximo
    if(puntajeJugador2 > puntajeMaximo) {
        puntajeJugador2 = puntajeMaximo;
    } else {
        // Hace una variable de cadena que indique el puntaje para pasarsela al HTML de h1
        var puntajeGlobal = puntajeJugador1 + " to " + puntajeJugador2;
        document.querySelector("h1").innerHTML = puntajeGlobal;
    }
});



botonReset.addEventListener("click", function(){
    // Hace que las 2 variables de puntaje sean 0
    puntajeJugador1 = 0;
    puntajeJugador2 = 0;

    // Transforma el HTML de h1 con eso
    document.querySelector("h1").innerText = "0 to 0";
});


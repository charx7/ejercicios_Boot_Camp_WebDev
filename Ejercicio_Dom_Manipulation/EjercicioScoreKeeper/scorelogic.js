// Seleccionamos los objetos de botones de los jugadores y de reset
var butonPlayer1 = document.getElementById("botonJugador1");
var butonPlayer2 = document.getElementById("botonJugador2");
var botonReset = document.getElementById("botonResetear");

// Variables Globales de puntaje
var puntajeJugador1 = 0;
var puntajeJugador2 = 0;

// Variable que define puntaje maximo
var puntajeMaximo = 5;

// Variable que define el fin del juego
var juegoAcabado = false;

butonPlayer1.addEventListener("click", function(){

    // Condicion de puntaje maximo
    if(puntajeJugador1 == puntajeMaximo || juegoAcabado == true) {
        juegoAcabado = true;
    } else {
        // Aniade 1 al puntaje del jugador 1
        puntajeJugador1++;

        // Le pasa el puntajeJugador1 a la clase de puntaje1 del span en el h1
        document.querySelector("#puntaje1").innerHTML = puntajeJugador1;

        // Prende la clase de ganador (color verde en el score)
        if (puntajeJugador1 == puntajeMaximo) {
            document.querySelector("#puntaje1").classList.toggle('ganador');
            juegoAcabado = true;
        }
    }
});

butonPlayer2.addEventListener("click", function(){

    // Condicion de puntaje maximo
    if(puntajeJugador2 == puntajeMaximo || juegoAcabado == true) {
        juegoAcabado = true;
    } else {
        // Aniade 1 al puntaje del jugador 1
        puntajeJugador2++;

        // Le pasa el puntajeJugador2 a la clase de puntaje2 del span en el h1
        document.querySelector("#puntaje2").innerHTML = puntajeJugador2;

        // Prende la clase de ganador (color verde en el score)
        if (puntajeJugador2 == puntajeMaximo) {
            document.querySelector("#puntaje2").classList.toggle('ganador');
            juegoAcabado = true;
        }
    }
});



botonReset.addEventListener("click", function(){
    // Apaga las clases de puntaje si estas estan activadas
    if(juegoAcabado == true) {
        if(puntajeJugador1 == puntajeMaximo){
            document.querySelector("#puntaje1").classList.toggle('ganador');
        } else {
            document.querySelector("#puntaje2").classList.toggle('ganador');
        }
    }

    // Hace que las 2 variables de puntaje sean 0
    puntajeJugador1 = 0;
    puntajeJugador2 = 0;

    // Transforma el HTML de h1 con eso
    document.querySelector("#puntaje1").innerHTML = "0";
    document.querySelector("#puntaje2").innerHTML = "0";

    // Hace que otra vez se pueda jugar con los botones XD
    juegoAcabado = false;

    
});


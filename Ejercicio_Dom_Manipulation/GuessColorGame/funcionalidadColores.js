// Establecemos un arreglo con los colores iniciales de los cuadrados
var colores = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 200, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)"
];

// Guardamos todos los elementos del objeto de HTML seleccionado
var arregloCuadrados = document.querySelectorAll(".cuadrado");

// Valor escogido para que sea el color a elegir como ganador
var colorGanador = colorRandom();
// Selecciona el color para transformar el Span del html y lo procesa
var colorDesplegado = document.getElementById("desplegadoColor");
colorDesplegado.textContent = colorGanador;

// Seleccionamos span de texto que indicara al usuario si escogieron bien el color o no
var mensajeDesplegar = document.querySelector('#mensaje');

// Cambiamos el color de cada cuadrado de acuerdo al color del arreglo de colores
for(var i = 0; i<arregloCuadrados.length; i++) {
    arregloCuadrados[i].style.backgroundColor = colores[i];
    // Agregar un Event listener de cuadrado que comprueba que color eligio
    arregloCuadrados[i].addEventListener('click', function() {
        // Toma la propiedad de backgroundcolor del cuadrado al que se le dio click
        var colorClickeado = this.style.backgroundColor;
        if(colorClickeado === colorGanador) {
            // Despliega mensaje de que escogiste el color ganador
            mensajeDesplegar.textContent = 'Ganastee';
            // Cambia los colores de todos los cuadrados haciendo call a la funcion cambiarColores
            cambiarColores(colorGanador);
        } else {
            // Cambia el color al del body para eliminarlo y despliega Intenta otra vez
            this.style.backgroundColor = '#232323';
            mensajeDesplegar.textContent = 'Intenta Otra vez XD';
        }
    });
}

function cambiarColores (color) {
    // Ciclar sobre todos los elementos de cuadrado para cambiar el color al correcto
    for(var i=0; i< arregloCuadrados.length; i++) {
        arregloCuadrados[i].style.backgroundColor = color;
    }
}

function colorRandom() {
    // Escoge un numero al azar entre 0 y el tamanio del arreglo de los colores porque varia en los modos facil y normal
    var random = Math.floor(Math.random() * colores.length);
    // Regresa el elemento del arreglo de colores que fue generado con el indice al azar
    return colores[random];
}






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
var colorGanador = colores[3];
// Selecciona el color para transformar el Span del html y lo procesa
var colorDesplegado = document.getElementById("desplegadoColor");
colorDesplegado.textContent = colorGanador;


// Cambiamos el color de cada cuadrado de acuerdo al color del arreglo de colores
for(var i = 0; i<arregloCuadrados.length; i++) {
    arregloCuadrados[i].style.backgroundColor = colores[i];
    // Agregar un Event listener de cuadrado que comprueba que color eligio
    arregloCuadrados[i].addEventListener('click', function() {
        // Toma la propiedad de backgroundcolor del cuadrado al que se le dio click
        var colorClickeado = this.style.backgroundColor;
        if(colorClickeado == colorGanador) {
            alert('auch XD');
        }
    });
}


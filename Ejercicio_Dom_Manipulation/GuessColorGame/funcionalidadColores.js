// Establecemos un arreglo con los colores iniciales de los cuadrados
var colores = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)"
];

// Guardamos todos los elementos del objeto de HTML seleccionado
var arregloCuadrados = document.querySelectorAll(".cuadrado");

// Cambiamos el color de cada cuadrado de acuerdo al color del arreglo de colores
for(var i = 0; i<arregloCuadrados.length; i++) {
    arregloCuadrados[i].style.backgroundColor = colores[i];
}


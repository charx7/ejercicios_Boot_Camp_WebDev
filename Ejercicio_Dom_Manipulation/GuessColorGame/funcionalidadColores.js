// variable que lleva la cuenta de cuantos cuadrados tenemos
var numeroDeCuadrados = 6;

// Establecemos un arreglo con los colores iniciales de los cuadrados
var colores = generaColoresRandom(numeroDeCuadrados); 

// Guardamos todos los elementos del objeto de HTML seleccionado
var arregloCuadrados = document.querySelectorAll(".cuadrado");

// Valor escogido para que sea el color a elegir como ganador
var colorGanador = colorRandom();
// Selecciona el color para transformar el Span del html y lo procesa
var colorDesplegado = document.getElementById("desplegadoColor");
colorDesplegado.textContent = colorGanador;

// Seleccionamos span de texto que indicara al usuario si escogieron bien el color o no
var mensajeDesplegar = document.querySelector('#mensaje');

// Selecciona el h1 para cambarle el color de background
var tituloPagina = document.querySelector('h1');

// Selecciona el boton de reseteo del juego
var botonReset = document.querySelector('#reset');

// EventListenerde click
botonReset.addEventListener('click', function(){
    // Hace que el span de correcto o no desaparezca
    mensajeDesplegar.textContent = '';

    // Genera nuevos colores
    colores = generaColoresRandom(numeroDeCuadrados);
    // Escoge un nuevo color ganador del arrelo y lo despliega
    colorGanador = colorRandom();
    colorDesplegado.textContent = colorGanador;
    // Cambia los colores de los cuadrados del arreglo
    for(var i = 0; i < arregloCuadrados.length; i++) {
        arregloCuadrados[i].style.backgroundColor = colores [i];
    }
    // Cambia el color del h1 a otra vez el default
    tituloPagina.style.backgroundColor = "skyblue";
});

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
            tituloPagina.style.backgroundColor = colorGanador;
            // Cambia el titulo del boton
            botonReset.textContent = "Jugar Otra Vez?"

        } else {
            // Cambia el color al del body para eliminarlo y despliega Intenta otra vez
            this.style.backgroundColor = '#2323';
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

// Funcion que genera el color ganador randomente
function colorRandom() {
    // Escoge un numero al azar entre 0 y el tamanio del arreglo de los colores porque varia en los modos facil y normal
    var random = Math.floor(Math.random() * colores.length);
    // Regresa el elemento del arreglo de colores que fue generado con el indice al azar
    return colores[random];
}

// Funcion que crea el arreglo de colores a desplegar de manera random
function generaColoresRandom(numero) {
    // Hacer un arreglo y aniadir numero de colores random al arreglo
    var arr= [];
    for(var i = 0; i < numero; i++) {
        // Genera la cadena a vaciar en el arreglo vacio y lo pushea
        arr.push(generarColor());
    }
    // Regresa el arreglo generado random XD
    return arr;
}

// funcion que genera la cadena de colores random
function generarColor () {
    // Escoger red entre 0 y 255 y asi
    var rojo = Math.floor(Math.random() * 256);
    var verde = Math.floor(Math.random() * 256);
    var azul = Math.floor(Math.random() * 256);
    var colorFinal = "rgb(" + rojo + ", " + verde + ", " + azul + ")";
    return colorFinal; 
}

// Funcion de los botones de EZ o HARD
var botonEZ = document.querySelector("#ezpz");
var botonHARD = document.querySelector("#hardgame");

botonEZ.addEventListener('click', function(){
    // Establece el numero de Cuadrados a 3
    numeroDeCuadrados = 3;

    this.classList.add('seleccionado');
    botonHARD.classList.remove('seleccionado');
    // Genera nuevos Colores
    colores = generaColoresRandom(numeroDeCuadrados);
    colorGanador = colorRandom();
    colorDesplegado.textContent = colorGanador;

    // Desplegado de los nuevos colores elegidos
    for(var i = 0; i < arregloCuadrados.length; i++){
        // Ejecuta esta linea si existe un siguiente color a mostrar
        if(colores[i]) { 
            // Cambia el color de los primeros 3 cuadrados
            arregloCuadrados[i].style.backgroundColor = colores[i]; 
        }   else {
            // Siguientes cuadrados los cambia al color del background
            arregloCuadrados[i].style.display = 'none';
        }

    }


});

botonHARD.addEventListener('click', function(){
    // Genera nuevos colores
    numeroDeCuadrados = 6;

    // Codigo para mostrar background con un color de acurdo al modo elegido
    this.classList.add('seleccionado');
    botonEZ.classList.remove('seleccionado');
    
    // Genera nuevos Colores en este caso 6
    colores = generaColoresRandom(numeroDeCuadrados);
    colorGanador = colorRandom();
    colorDesplegado.textContent = colorGanador;

    // Desplegado de los nuevos colores elegidos
    for(var i = 0; i < arregloCuadrados.length; i++){
        // Cambia el color de los 6 cuadrados
        arregloCuadrados[i].style.backgroundColor = colores[i];
        // Ejecuta esta linea si existe un siguiente color a mostrar
        if(arregloCuadrados[i].style.display == 'none') { 
            // habilita los cuadrados que fueron desactivados
            arregloCuadrados[i].style.display = 'block'; 
        } 

    }

});
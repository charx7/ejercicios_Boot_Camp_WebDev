// Cruzar TODOS especificos al hacer click sobre ellos y volverlos grises
// Seleccion de JQuery
$("li").click(function() {
    // Autoseleccion y metodo de css para volver gris y tachar los elementos li
    //$(this).css("color", "grey");
    //$(this).css("text-decoration", "line-through");

    // Haciendolo en una sola clase
    // Verifica si el elemento li ya fue tachado antes
    // if( $(this).css("color") == "rgb(128, 128, 128)"){
    //     console.log("adfadsfdsf");
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     }); 
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         // Se tiene que usar el camel case porque el caracter - no lo soporta JS
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completado");
});








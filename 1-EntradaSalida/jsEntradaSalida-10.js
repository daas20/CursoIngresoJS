/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var importe;
    var descuento;
    var importeFinal;

    importe = parseInt( document.getElementById("importe").value );
    /*importe = parseFloat( document.getElementById("importe").value );
    opcion para que tome valores decimales*/
   
    descuento = importe *25 /100; // se puede poner * .25

    importeFinal = importe - descuento

    document.getElementById("resultado").value = importeFinal;
    //document.getElementById("resultado").value = importeFinal.toFixed(2);
    // aca agrego el .toFixed para agregar dos decimales a mostrar
}

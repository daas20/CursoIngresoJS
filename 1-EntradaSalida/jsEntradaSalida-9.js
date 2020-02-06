/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var sueldoFinal;

    /*aca se podria usa el parseFloat porque como es un sueldo puede haber decimales, 
    pero como la consigna pide parseInt lo dejo asi*/
    sueldo = parseInt( document.getElementById("sueldo").value ); 
   
    aumento = sueldo *10 / 100; // Aplicamos la regla de tres simple para conocer el procentaje
    //tambien se puede poner *1.1 directamentetambien se puede poner *1.1 directamente
    /*yo habia puesto asi => (sueldo*10)/100) pero como son multiplicacion y division no hace falta
    poner parentesis*/

    sueldoFinal = sueldo + aumento
    
    document.getElementById("resultado").value = sueldoFinal;

}

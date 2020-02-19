function mostrar()
{
//tomo la edad  

var mes = document.getElementById('mes').value;  //le sacamos "delAño" a "mesDelAño" porque usa caracter latino

switch (mes)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert ("Falta para el invierno");
        break;  
    case "Julio":
    case "Agosto":
        alert ("Abrigate que hace frio");
        break;
    default:    
    alert ("Ya pasamos el frio, ahora calor!!!"); 
}
/* al tener la misma linea de codigo los "case" de Enero a Junio,
saco la line de codigo y el break y solo lo pongo en el ultimo "case" de los que tienen el mismo codigo
asi ahorro lineas de codigo y no tengo que escribir lo mismo en varios "case"*/

}//FIN DE LA FUNCIÓN
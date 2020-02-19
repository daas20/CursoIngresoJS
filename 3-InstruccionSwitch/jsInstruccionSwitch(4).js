function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;  //le sacamos "delAño" a "mesDelAño" porque usa caracter latino

switch (mes)
{
    case "Febrero":
        alert ("Tiene 28 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":   
        alert ("Tiene 30 dìas");
        break;
    default:    
        alert ("Tiene 31 días"); 
}

}//FIN DE LA FUNCIÓN
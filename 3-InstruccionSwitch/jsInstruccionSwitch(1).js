function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;  //le sacamos "delAño" a "mesDelAño" porque usa caracter latino

switch (mes)
{
    case "Enero":       // la sintaxis del "case" es sin parentesis, ni lo que venga despues del " : " tampoco necesita llevar llaves " {} "
        alert ("que comiences bien el año!!!");
        break;          // Si aca ya la variable toma el valor "Enero" el break ya me saca del switch
    case "Marzo":
        alert ("a clases!!!");
        break;
    case "Julio":
        alert ("se vienen las vacaciones!!!");
        break;
    case "Diciembre":
        alert ("Felices fiestas!!!");
        break;
    default:    // entra en default cuando no entra en ningun "case". No lleva "break".
    alert ("A ese mes no lo tuve en cuenta"); /* esto lo agrega aunque no lo pide el ejercicio
    para que si se elije otro mes que no este en los "case" aparezca algun mensaje*/

}


}//FIN DE LA FUNCIÓN
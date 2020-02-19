function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt (document.getElementById("edad").value); 


//Si edad esta dentro del rango
if(edad >=13 && edad <=17){     //uso el operador logico "AND" ( && )
    alert ("Es adolescente");
}


//Si la edad no esta fuera del rango 
/* if (!(edad<13 || edad >17)){      //uso el operador logico OR ( || ) 
    alert ("Es adolescente");

}*/

}//FIN DE LA FUNCIÓN

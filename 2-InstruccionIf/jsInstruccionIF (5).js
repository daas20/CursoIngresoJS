function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt (document.getElementById("edad").value);

if (edad <13 || edad >17){    
    alert ("No es adolescente");
}

/*
if(!(edad >=13 && edad <=17)){    // version negando cuando es adolescente usando el ( ! )
    alert ("No es adolescente");
    
}*/
    
    
}//FIN DE LA FUNCIÓN
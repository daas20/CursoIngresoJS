function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt (document.getElementById("edad").value); 

if (edad <13){
    alert ("Niño");
}

else {
    if (edad>=13 && edad<=17){
        alert ("Adolescente");
    }
    else{
        alert ("Adulto");
    } 
}


// otra forma de plantearlo
/*
if (edad <13){
    alert ("Niño");
}

else if (edad>=13 && edad <=17){
    alert ("Adolescente");    
}
    else {
        alert ("Adulto");
    }*/


// otra forma de plantearlo
/*
if (edad<13){
    alert ("Niño");
}

else if (edad <=13){
    alert ("Adolescente");
}
    else {
        alert ("Adulto");
    }
}//FIN DE LA FUNCIÓN
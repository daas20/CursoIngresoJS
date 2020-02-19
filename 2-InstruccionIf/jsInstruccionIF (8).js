function mostrar()
{
//tomo la edad  
var edad;
var estado;

edad = parseInt(document.getElementById("edad").value);
estado = document.getElementById("estadoCivil").value;

if (edad >=18 && estado == "Soltero"){
    alert ("Es soltero y no es menor");
    
}



// esta forma NO esta bien porque lo que esta entre {} no puede quedar vacio sin linea de
/*if (edad <18 && estado != "Soltero"){ 
}
else {
    alert("Es soltero y no es menor");
}*/    

}//FIN DE LA FUNCIÓN
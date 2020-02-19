function mostrar()
{
//tomo la edad  

var edad;
var estado;

edad = parseInt(document.getElementById("edad").value);
estado = document.getElementById("estadoCivil").value; //no hay que usar el parseInt porque no vamos a tomar values numeros 


//recordar que el "value" de "estado" es un string y debe llevar comillas.
if (edad <18 && estado != "Soltero"){
    alert ("Es muy pequeño para NO ser soltero");
}

}//FIN DE LA FUNCIÓN
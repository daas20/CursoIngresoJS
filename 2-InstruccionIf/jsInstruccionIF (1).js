function mostrar()
{
//tomo la edad  

var edad; // declaro la variable

edad = parseInt (document.getElementById("edad").value);  //tomo el valor ingresado en el cuadro de texto 

if(edad == 15) /*operardor "igual". Tambien puedo poner
                if(edad === 15) porque el triple "igual" compara tambien por tipo*/
{
   alert("niña bonita");
   // si la edad es igual a 15 entonces se cumple la condicion y muestro la frase "niña bonita"

}


}//FIN DE LA FUNCIÓN
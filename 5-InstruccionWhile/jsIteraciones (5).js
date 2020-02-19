function mostrar()
{

var sexo = prompt("ingrese f ó m");


	while (!(sexo == "f" || sexo == "m")){    //while (!(sexo == "f" || sexo == "m")).toLowerCase;  para que me convierta a minusculas aunque ingrese mayusculas la m o la f 
		sexo = prompt("Sexo inválido. Reingrese f ó m");
	}

    document.getElementById("Sexo").value = sexo;
    

    /* otra forma de plantear el while:
    while (sexo != "f" && sexo != "m");   // while (sexo != "f" && sexo != "m" && sexo !="M" && sexo != "F");
    
    */

}//FIN DE LA FUNCIÓN
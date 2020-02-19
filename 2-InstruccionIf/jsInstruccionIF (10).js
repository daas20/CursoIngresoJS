function mostrar()
{


	//Genero el número RANDOM entre 1 y 10 
	
	var minimo;
	var maximo;
	var nota;

	
	minimo = 1;
	maximo = 10;

	//aca no va alert porque no necesito imprimirla sino solo generar el random
	nota = (Math.floor(Math.random()*((maximo+1)-minimo)+minimo));  

	
	if (nota >=9){
		alert("EXCELENTE. Nota: " + nota);  //contateno para que me muestre el texto mas la nota
	}
	else if(nota >=4){        //  (nota >=4 && nota <9) no agrego el "&& nota <9" porque si ya llegue a este paso es porque ya yo es mayoy o igual a 9 
		alert("APROBO. Nota: " + nota);
	}
		else {
			alert("Vamos, la proxima se puede. Nota: " + nota);
		}
 
//El ejercicio dice APROBO para notas mayores a 4, aunque en realidad quiso decir "mayores o iguales a 4"  


/*
	var minimo;
	var maximo;
	var mensaje = "Aprobo. Nota: ";
	
	minimo = 1;
	maximo = 10;

	nota = (Math.floor(Math.random()*((maximo+1)-minimo)+minimo));  

	if (nota >=4{

		if (nota >= 9) mensaje = "Excelente. " + mensaje;
	}	
		alert (mensaje + nota);
INCOMPLETO
*/

}//FIN DE LA FUNCIÓN
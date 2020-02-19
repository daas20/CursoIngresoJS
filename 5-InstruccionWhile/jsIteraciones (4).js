function mostrar()
{

	//var numero = prompt("ingrese un número entre 0 y 10.");
	var numero;

	numero = parseInt(prompt("ingrese un número entre 0 y 9."));
	
	while (numero >9 || numero <0 || isNaN(numero)){    // aca uso isNaN para verificar que no ingrese algo que no sea numero 
		numero = parseInt(prompt("Error. Ingrese un número entre 0 y 9."));
	}

	document.getElementById("Numero").value = numero;


/*otra forma de plantear el while:
while(!(numero >=0 && numero <=9));
*/

}//FIN DE LA FUNCIÓN
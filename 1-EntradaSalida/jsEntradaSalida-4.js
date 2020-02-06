/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt("Escriba su nombre");
	
	document.getElementById("elNombre").value = nombre; 
	/* siempre se lee que primero se resuelve lo que esta a la derecha
	para asignarlo a lo que esta a la izquierda*/
}


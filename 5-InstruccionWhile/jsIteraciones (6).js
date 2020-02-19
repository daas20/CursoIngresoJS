function mostrar()
{

	var contador=0;  // la inicializo porque la leo primero mas abajo cuando aparece por primera vez
	var acumulador=0; // la inicializo porque la leo primero mas abajo cuando aparece por primera vez
	var numero;
	// si declarara un "var promedio;"

	while(contador <5){  // aca uso la variable contador por primera vez
		numero = parseInt(prompt("ingrese un número: "));  //no esta inicializado el numero porque la escribimos 
		acumulador = acumulador + numero; // aca uso la variable acumulador por primera vez, recordar que es una asignacion, primero ejecuto lo de la derecha y lo igualo a lo que esta a la izquierda 
		contador = contador + 1;  // es lo mismo que decir contador++;
	}

	//aca iria la variable "promedio = acumulador /5"  NO ANTES NI DESPUES 

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;  //document.getElementById('promedio').value=promedio; (si usara la variable promedio)

}//FIN DE LA FUNCIÓN
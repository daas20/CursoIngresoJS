function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var seguir='s';
	var numero;
	

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		positivo = positivo + numero;
		contador++;
		seguir = prompt("Quiere ingresar otro numero?");
	} while (positivo >= 0 && seguir =='s');


	do {
		numero = parseInt(prompt("Ingrese un numero"));
		negativo = negativo * numero;
		contador++;
		seguir = prompt("Quiere ingresar otro numero?");
	} while (negativo < 0 && seguir =='s');

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
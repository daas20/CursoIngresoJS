/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var resultado;
    
    num1 = parseInt( document.getElementById("numeroUno").value );
    num2 = parseInt( document.getElementById("numeroDos").value );
    
    resultado = num1 + num2;

    alert("La Suma es " + resultado); /* alert ("La suma es " + num1 + num2);
    NO SIRVE en este caso para hacer la suma porque es una concatenacion (string + number + number).
    Pero si pordia poner...   alert(La Suma es " + (num1 + num2));
    porque aca separo por prioridad de operadores */

}

function restar()
{
    // Declaro las variables que voy a utilizar
    var num1;
    var num2;
    var resultado;


    // Guardo en memoria los datos de las cajas de texto
    // Previamente convierto a number el dato que viene como string
    num1 = parseInt( document.getElementById("numeroUno").value );
    num2 = parseInt( document.getElementById("numeroDos").value );

    // Ejecuto la operacion solicitada
    resultado = num1 - num2;

    // Muestro el resultado
    alert("La Resta es " + resultado);

}

function multiplicar()
{ 

    var num1;
    var num2;
    var resultado; 
    
    num1 = parseInt( document.getElementById("numeroUno").value );
    num2 = parseInt( document.getElementById("numeroDos").value );
    
    resultado = num1 * num2;

    alert("La Multiplicación es " + resultado);  

}

function dividir()
{
	var num1;
    var num2;
    var resultado;
    
    num1 = parseInt( document.getElementById("numeroUno").value );
    num2 = parseInt( document.getElementById("numeroDos").value );
    
    resultado = num1 / num2;

    alert ("La División es " + resultado);

}


/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var resultado;

    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);

    num2 = parseInt( document.getElementById("numeroDos").value );

    resultado = num1 + num2;
    /* tambien podria hacer la suma (solo para este caso) asi: suma = parseInt(num1) + parseInt(num2)
    pero el valor de las variables declaradas num1 y num2 seguiria siendo texto (recordar que los 
    valores los tome de un cuadro de texto) ya que no las converti
    a numeros, solo cambiaria su valor a numeros dentro de la funcion suma*/

    alert("La suma es " + resultado);

}


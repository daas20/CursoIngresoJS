/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    
    nombre = document.getElementById("elNombre").value;
    /*al tomar los valores por Id, o sea en este caso de una cuadro de texto,
    esos valores son texto, por mas que se escriban numeros, por eso hay que convertirlos a number*/

    alert(nombre);
    
}



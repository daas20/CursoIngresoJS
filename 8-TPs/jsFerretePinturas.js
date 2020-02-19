/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var tempCentigrados;
    
    temperatura = parseInt(document.getElementById("Temperatura").value);
    
    tempCentigrados = (temperatura - 32) * 5 / 9;

    alert(temperatura + " fahrenheit son en centrigrados: " + tempCentigrados + " grados");
}

function CentigradosFahrenheit () 
{
    
    var temperatura;
    var tempFahrenheit;
    
    temperatura = parseInt(document.getElementById("Temperatura").value);
    
    tempFahrenheit = (9/5) * temperatura + 32;

    alert(temperatura + " centigrados son en fahrenheit: " + tempFahrenheit + " grados");

}

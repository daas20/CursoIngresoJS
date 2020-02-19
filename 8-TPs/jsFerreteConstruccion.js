/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);

perimetro = 2*(largo + ancho);

alambre = 3 * perimetro;

alert("Para el terreno rectangular se necesitarán " + alambre + " metros");
}

function Circulo () 
{
var radio;
var perimetro;
var alambre;

radio = parseInt(document.getElementById("Radio").value);

perimetro = 2 * 3.14 * radio;

alambre = perimetro * 3;

alert("Para el terreno circular se necesitarán " + alambre + " metros");
}

function Materiales () 
{
var largo;
var ancho;
var superficie;
var cemento;
var cal;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
    
superficie = largo * ancho;

cemento = 2 * superficie;
cal = 3 * superficie;
     
alert("Para el terreno rectangular se necesitarán " + cemento + " bolsas de cemento " + "y " + cal + " bolsas de cal");	
}
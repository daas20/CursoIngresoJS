function mostrar()
{

var clave;

clave = prompt("ingrese la clave: ");  //pido el dato
/*uso el "prompt" porque como no tengo cuadro de texto donde ingresar la clave*/

while (clave != "utn750")  //me fijo si el dato es invalido
//(!(clave == "utn750")) otra forma de plantear la condicion, o sea me fijo si no es valido
{
  //si estoy aca es porque el dato no es valido
    
    //informo y pido nuevamente el ingreso de la clave
    alert ("Clave incorrecta");
    clave = prompt("Ingrese la clave nuevamente: ");  // tambien podria haber puesto clave = prompt("Clave inavlida. Reingrese clave: "); 
    /* vuelvo a pedir que ingrese la "clave", declarando nuevamente la clave
    porque sino me toma el valor primero*/

}

//si llegue a este punto del programa es porque ingresaron la clave correcta
alert ("clave correcta");


}//FIN DE LA FUNCIÓN

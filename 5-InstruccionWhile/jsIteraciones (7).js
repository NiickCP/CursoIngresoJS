function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
	alert("Todos los numero ingresados van a ser sumados y se va a sacar un promedio del mismo, el programa va a dejar de tomar numeros hasta cuando usted lo indique");
while(respuesta!="si")
{
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
		}
	acumulador=acumulador+numero
	contador++;
	respuesta=prompt("¿Usted quiere para?");	
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
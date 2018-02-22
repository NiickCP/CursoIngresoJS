function Mostrar()
{
	var numero;
	var maximo=0;
	var minimo=0;
	var respuesta
	alert("Entre todos los numeros registrados se va a guardar el valor del numero maximo y el numero minimo ,el programa va a dejar de tomar numeros hasta cuando usted lo indique");
	while(respuesta!='si')
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
			while(isNaN(numero))
			{
				numero=prompt("Ingrese un numero");
				numero=parseInt(numero);	
			}
		if (numero>maximo)
		{
			maximo=numero
		}
		else if(numero<minimo)
		{
			minimo=numero
		}
	respuesta=prompt("¿Usted quiere parar?");	
	}
document.getElementById("minimo").value=minimo;
document.getElementById("maximo").value=maximo;

}
function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	alert("Todos los numero positivos van a ser sumados y los negativos van a ser multiplicados, el programa va a dejar de tomar numeros hasta cuando usted lo indique");
	while(respuesta!="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
			while(isNaN(numero))
			{
				numero=prompt("Ingrese un numero");
				numero=parseInt(numero);
			}
				if (numero>0)
				{
					positivo=positivo+numero;
				}
					else
					{
						negativo=negativo*numero;
					}
		respuesta=prompt("¿Usted quiere para?");	
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value="-"+negativo;

}//FIN DE LA FUNCIÓN
function Mostrar()
{
	var contpos=0;
	var contneg=0;
	var contcer=0;
	var contpar=0;
	var num;
	var respuesta=true;
	var acumneg=0;
	var acumpos=0;
	var rta = true;

	while(respuesta==true)
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);
			if(num<0)
			{
				acumneg+=num;
				contneg+=1;
			}
				if(num>0)
				{
					acumpos+=num;
					contpos+=1;
				}
					if(num=0)
					{
						contcer+=1;
					}
						if ((num % 2) = 0)
						{
							contpar+=1;
						}
		rta = confirm ("¿Desea ingresar otro valor?");
	}
	alert ("La suma de los negativos es: "+acumneg);
	alert ("La suma de los positivos es: "+acumpos);
	alert ("La cantidad de positivos es: "+contpos);
	alert ("La cantidad de negativos es: "+contneg);
	alert ("La cantidad de ceros es: "+contcer);
	alert ("La cantidad de numeros pares es: "+contpar);
	alert ("El promedio de los positivos es: "+(acumpos/contpos));
	alert ("El promedio de los negativos es: "+(acumneg/contneg));
	alert ("La diferencia entre positivos y negativos es: "+(acumpos-acumneg));

}
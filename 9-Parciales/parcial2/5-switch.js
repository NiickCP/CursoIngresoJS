function Mostrar()
{
	var mes = prompt ("Ingrese un mes");
	switch (mes)
	{
		case "Enero":
		case "Febrero":
		alert ("Veranito!!!");
		break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert ("extraño enero y febrero");
		break;
		default:
		alert ("El mes ingresado no existe");		
	}
}
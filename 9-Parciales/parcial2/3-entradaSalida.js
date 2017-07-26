function Mostrar()
{
	var ancho;
	var largo;
	largo = document.getElementById("largo").value;
	ancho = document.getElementById("ancho").value;
	var perimetro = (ancho*12 + largo*12);
	alert ("Se necesitan "+perimetro+" metros de alambre");
}
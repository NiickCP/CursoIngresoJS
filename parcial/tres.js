function Mostrar()
{
var largo;
var ancho;
var perimetro;
largo=document.getElementById("alrgo").value;
ancho=document.getElementById("ancho").value;
perimetro=(largo*2)+(ancho*2);
perimetro=perimetro*3;
alert("Se necesitan "+perimetro+" metros de alambre");
}

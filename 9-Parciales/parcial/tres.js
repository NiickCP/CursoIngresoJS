function Mostrar()
{
    var alrgo;
    var ancho;
    var alambre;
    alrgo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    alambre = 6*ancho + 6*alrgo;
    alert ("La cantidad de alambre necesario es de: "+alambre);
}
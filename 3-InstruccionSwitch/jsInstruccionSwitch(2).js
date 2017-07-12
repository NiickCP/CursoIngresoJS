function Mostrar() 
{
    var mes;
    var mes = document.getElementById("mes").value;

    switch (mes)
    {
        case "Julio":
        case "Agosto":
        alert ("Invierno");
        break;
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        alert ("Falta");
        break;
        default: 
        alert ("Ya paso");
        break;
    } 
}
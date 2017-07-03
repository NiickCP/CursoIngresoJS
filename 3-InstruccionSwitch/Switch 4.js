function Mostrar() 
{
    var mes;
    var mes = document.getElementById("mes").value;

    switch (mes)
    {
        case "Febrero":
        alert ("tiene 28 dias");
        break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Septiembre":
        case "Diciembre":
        alert ("tiene 31 dias");
        break;
        default:
        alert ("tiene 30 dias");
        break;
    } 
}
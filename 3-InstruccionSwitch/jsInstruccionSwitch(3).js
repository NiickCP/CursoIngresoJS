function Mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Febrero":
            alert("Este me no tiene mas de 29 dias.");
            break;
        default:
            alert("Este mes tiene 30 o más días");
            break;
}
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN
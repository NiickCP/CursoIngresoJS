function Mostrar() 
{
    var hora = document.getElementById("hora").value;

    if (hora >= 7 && hora <= 11)
    {
        alert ("es de mañana");
    }   
        else if (hora >= 12 && hora <= 19)
        {
            alert ("es de tarde");
        }
            else if ((hora >= 20 && hora <= 24) || (hora >= 0 && hora <= 6) )
            {
                alert ("es de noche");
            }
                else 
                {
                    alert ("la hora no existe");
                }
}
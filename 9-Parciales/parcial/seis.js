function Mostrar()
{
    var max;
    var min;
    var bandera = true;
    var contador = 0;
    var importe;

        while (contador < 24)
{
    contador++;
    importe = prompt ("Ingrese el importe")
    while (importe < 0)
    {
        importe = prompt ("Ingrese nuevamente el importe");
    }
        if (bandera)
        {
            bandera = false;
            max = importe;
            min = importe;
        }
            else 
            {
                if (importe > max)
                max = importe;
                if (importe < min)
                min = importe;    
    }
}
    alert ("El mayor importe es: "+max);
    alert ("El menor importe es: "+min);
}

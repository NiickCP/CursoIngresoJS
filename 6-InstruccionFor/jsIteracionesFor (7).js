function Mostrar()
{
    contador = 0;
    var repeticiones = prompt ("Ingrese un numero");
    for (i=1 ; i<=repeticiones ; i++)
    {
        if (repeticiones%i==0)
        {
            contador++;
            alert (i);
        }
      }
    alert ("La cantidad de divisores fueron: "+contador);
}




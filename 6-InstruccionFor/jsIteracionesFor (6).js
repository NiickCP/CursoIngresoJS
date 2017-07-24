function Mostrar()
{
    contador = 0;
    num = prompt ("Ingrese un numero");
    for (i=1 ; i <= num ; i++)
    {
        if (i%2==0)
        {
            contador++;
            alert (i);
        }
    }
    alert ("La cantidad de numeros pares fueron: "+contador);



}//FIN DE LA FUNCIÓN
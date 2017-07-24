function Mostrar()
{
    var numero = prompt ("Ingrese un numero");
    for (i=2;i<numero;i++)
    {
        if (numero%i==0)
        {
            alert ("el numero no es primo");
            break;
        }
        else 
        {
            alert ("el numero es primo");
            break;
        }
    }
    
}//FIN DE LA FUNCIÓN
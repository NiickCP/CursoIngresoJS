var num;
function Mostrar ()
{
    num = prompt ("Ingrese un numero de 0 a 10 inclusive");
    while (num < 0 || num > 10)
    {
        num = prompt ("Ingrese otra vez");
    }
    alert ("el numero es correcto");
}
function Mostrar ()
{
    var num;
    var acumuladormult = 1;
    var acumuladorsuma = 0;
    var rta = "si";

    while (rta == "si")
    {
        num = prompt ("ingrese un numero");
        num = parseInt (num);
        while (isNaN (num))
        {
            num = prompt ("ingrese otro numero");
            num = parseInt (num);
        }
            if (num>=0)
            {
                acumuladorsuma+=num;
            }
            else 
            {
                acumuladormult*=num;
            }
        rta = prompt ("¿Quiere seguir ingresando?");
    }
    alert ("La suma de los positivos es: "+acumuladorsuma);
    alert ("El producto de los negativos es: "+acumuladormult);
}
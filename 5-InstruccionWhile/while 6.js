function Mostrar ()
{
    var num;
    var contador = 0;
    var acumulador = 0;

    while (contador < 5)
    {
        contador++;
        num = prompt ("ingrese un numero");
        num = parseInt (num);
         while (isNaN (num))
        {
            num = prompt ("ingrese otro numero");
            num = parseInt (num);
        }  
        acumulador = acumulador + num;
         
    }
    alert (acumulador);
    alert (acumulador / contador);
}
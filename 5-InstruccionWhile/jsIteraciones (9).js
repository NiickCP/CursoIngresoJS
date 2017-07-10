function Mostrar ()
{
    var num;
    var max;
    var min;
    var primera = true;
    var rta = true;

    while (rta == true)
    {
       num = prompt ("Ingrese un numero");
       if (primera)
       {
           max=num;
           min=num;
           primera=false;
       }
       else 
       {
           if (num < min)
       {
           min=num;
       }
            if (num > max)
       {
           max=num;
       }
       }
       
        rta = confirm ("¿Quiere seguir ingresando?");
    }
    alert ("El maximo es: "+max);
    alert ("El minimo es: "+min);
}
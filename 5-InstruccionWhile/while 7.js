function Mostrar ()
{
    var num;
    var contador = 0;
    var acumulador = 0;
    var rta = true;
    
    while (rta == true)
   {
    contador++;
    num = prompt ("Ingrese un numero");
    num = parseInt(num);
    while (isNaN (num))
        {
            num = prompt ("ingrese otro numero");
            num = parseInt (num);
        }
    acumulador+=num;
    rta=confirm("desea ingresar otro numero?");
         
    }
    alert (acumulador);
    alert (acumulador / contador);
}
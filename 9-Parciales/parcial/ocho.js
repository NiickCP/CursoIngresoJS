function Mostrar()
{
    var cantpar = 0;
    var total = 0;
    var min = 0;
    var max = 0;
    var num = 1;
    var contador = 0;
    var seguir = true;
    while (seguir == true)
    {
        num = prompt ("Ingrese un numero positivo");
        while (num < 0)
        {
            num = prompt ("El numero no es positivo, Ingrese nuevamente");
        }
 
            var total = parseInt(total) + parseInt(num);
            contador++;
            if (num%2==0)
            cantpar++;
            if (num > max)
            max = num;
            if (num < min)
            min = num;
            seguir = confirm("Desea seguir?");
        }
        var promedio = total/contador;
        document.write ("La cantidad de numeros pares es: "+cantpar);
        document.write ("El promedio de todos los numeros es: "+promedio);
        document.write ("La suma de todos los numeros es: "+total);
        document.write ("El numero maximo es: "+max);
        document.write ("El numero minimo es: "+min);
        
}
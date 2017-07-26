function Mostrar()
{
    var resultado;
    var num1 = prompt ("Ingrese el primer numero");
    var num2 = prompt ("Ingrese el segundo numero");
    if (num1 == num2)
    resultado = num1*num2;
    else if (num1 > num2)
    resultado = num1 - num2;
    else
    resultado = num1 + num2;

    document.write(resultado); 
}

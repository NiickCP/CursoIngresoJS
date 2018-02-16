function Mostrar()
{
    var numeroUno;
    var numeroDos;
    var numeroFinal;
numeroUno=prompt("Ingrese un numero");
numeroDos=prompt("Ingrese un numero");
if (numeroUno==numeroDos)
{
numeroFinal=numeroDos*numeroUno;
document.write(numeroFinal);
}
else if (numeroUno>numeroDos)
{
    numeroFinal=numeroUno-numeroDos;
    document.write(numeroFinal);
}
else
{
    numeroFinal=numeroUno+numeroDos;
    document.write(numeroFinal);
}
}
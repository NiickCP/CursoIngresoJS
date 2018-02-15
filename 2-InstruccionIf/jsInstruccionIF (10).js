function Mostrar()
{
    var numero;
numero=parseInt((Math.random()*10));
if (numero>=9 && numero<=10 )
{
    alert("Su nota es excelente ,"+numero);
}
else if (numero>=6)
{
    alert("Muy bien ,"+numero);
}
else if (numero>=4)
{
    alert("Bien ,"+numero);
}
else if(numero>=2)
{
    alert("Mal ,"+numero);
}
else
alert("Desastroso ,"+numero);
}
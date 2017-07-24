/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso()
{
    contpar = 0;
    contimpar = 0;
    contdiv = 0;
    contprimo = 0;
    function NumerosPares()
    {
        numero = document.getElementById("numero").value;
        if (numero < 1)
        alert ("Ingrese un numero positvo");
        else {
    for (i=1 ; i<numero ; i++)
    {
        if (i%2==0)
        contpar++;  
    }
        }
    }
    function NumerosImpares()
    {
        numero = document.getElementById("numero").value;
        if (numero < 1)
        alert ("Ingrese un numero positvo");
        else {
    
        for (i=1 ; i<numero ; i++)
        {
            if (i%2!=0)
            contimpar++;
        }
        }
    }
    function NumerosDivisibles()
    {
        numero = document.getElementById("numero").value;
        if (numero < 1)
        alert ("Ingrese un numero positvo");
        else {
            for (i=1 ; i < 101 ; i++)
            {
                if (numero%i==0)
                contdiv++;
            }
        }
    }
    function VerificarPrimo()
    {
        numero = document.getElementById("numero").value;
        if (numero < 1)
        alert ("Ingrese un numero positvo");
        else {
                for (i=2 ; i<numero ; i++)
                {
                    if (numero%i==0)
                    {
                        contprimo++;
                    }
                }
        }
    }

    alert ("La cantidad de numeros pares es: "+contpar);
    alert ("La cantidad de numeros impares es: "+contimpar);
    alert ("La cantidad de numeros divisibles es: "+contdiv);
    if (contprimo > 0)
    alert ("El numero no es primo");
    else
    alert ("El numero es primo");
    alert ("La cantidad de primos es: "+contprimo);

}

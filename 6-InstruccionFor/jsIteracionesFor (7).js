function Mostrar()
{
        var numero=2;
        var divisor=0;
        var contador=0;
        var repeticiones=0;
        repeticiones=prompt("Ingrese un numero");
        repeticiones=parseInt(repeticiones);
        for(var i=1; i<=repeticiones; i++)
        {
        for(var divisores=1; divisores<=i; divisores++)
        {
            divisor=i%divisores;
            if(divisor==0)
            {
                alert(i+" es divisible por "+divisores);
                contador++;
            }
          
        }
        }  
        alert("La cantidad de numeros divisores encontrados es de "+contador);  
}//FINDE LA FUNCIÓN
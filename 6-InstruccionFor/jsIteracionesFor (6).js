function Mostrar()
{
    var numero=2;
    var par=0;
    var repeticiones=0;
    var contador=0;
    repeticiones=prompt("Ingrese un numero");
    repeticiones=parseInt(repeticiones);
    for(var i=1; i<=repeticiones; i++)
    {
    par=(i)%numero;
    if(par==0)
    {
        alert(i);
        contador++;  
    }    
    }
    alert("La cantadidad de numeros pares encontras es de "+contador);
}//FIN DE LA FUNCIÓN
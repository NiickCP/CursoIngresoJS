function Mostrar ()
{
    var cantidad = 0;
    var total = 0;
    var promedio = cantidad / total;
    var min = 11;
    var varonesaprobados = 0;
    var nota = 1;
    var sexo = "F";

    while (nota > 0 && nota < 11 && sexo == "F" && sexo == "M" && cantidad < 101)
    {
        var nota = prompt ("Ingrese la nota");
        var sexo = prompt ("Ingrese sexo ('F' o 'M')");
        if (nota > 0 && nota < 11 && sexo == "F" && sexo == "M")
        {
          total = total + nota;
          cantidad++; 
           if (nota < min)
           min = nota;
           if (sexo == "M" && nota > 5)
          varonesaprobados++;
        }
        else 
        {
            alert ("La nota o el sexo no son validos");
            nota = 1;
            sexo = "F";
        }
    }
    
    alert ("El promedio de las notas totales es: "+promedio);
    alert ("La nota mas baja es: "+min);
    alert ("La cantidad de varones aprobados es: "+varonesaprobados);
}
        
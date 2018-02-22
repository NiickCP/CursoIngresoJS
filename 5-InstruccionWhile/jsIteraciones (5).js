function Mostrar()
{

var sexo;
sexo=prompt("ingrese f ó m ."); 
while((sexo!="f" && sexo!="m")&& sexo!=null)
    {    
    
            sexo=prompt("El dato que usted ingreso es incorrecto, porfavor ingrese el dato correcto");   
    }

if(sexo="f")
{
    sexo="Usted es de sexo femenino";
}
        else if(sexo="m")
        {
            sexo="Usted es de sexo masculino";
        }
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
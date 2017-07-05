var numeroS;
var contador = 0
var numuser;

function Comenzar()
{
    numeroS = Math.floor(Math.Random()*100)+1;
    console.log(numeroS);
    contador = 0;
}
    function Verificar()
    {
        contador = contador + 1;
        numuser = document.getElementById("numero").value;
        if (numeroS == numuser)
        {
            alert ("gano en "+contador+" intentos");
            contador = 0;
        }
        else
            {
                if (numuser < numeroS)
                {
                    alert ("falta");
                }
                else 
                {
                    alert ("se paso");
                }
            }
    }
let NMaxPosible = prompt("Elija una cantiadad de numeros con las que jugaras:")
let NumeroSecreto = Math.floor(Math.random()*(`${NMaxPosible}`)+1);
let NumeroDeUsuario = 0;
let intentos = 1;
let MaxIntentos = Math.floor(3 * (NMaxPosible/10)) 

console.log(NumeroDeUsuario);

while (NumeroDeUsuario != NumeroSecreto)
{
    NumeroDeUsuario = parseInt (prompt ("Me podrias indicar un numero entre 1 y " + `${NMaxPosible}` + ", por favor:")); 
        
    if (NumeroDeUsuario == NumeroSecreto) 
    {
        alert("¡¡¡Sorprendente, lo acertaste en el " + `${intentos == 1 ? 'primer intento' : 'intento número '+intentos}` + "!!!");
    }
    else
    { 
        if (NumeroDeUsuario > NumeroSecreto)
        {
            alert ("Lo siento, no acertaste el número. El número secreto es menor");
        }
        else
        {
            alert("Lo siento, no acertaste el número. El número secreto es mayor");
        }       
        intentos = intentos +1; 
    }

    if (intentos > MaxIntentos)
    {
        alert("Llegaste al número maximo de intentos")
        break; 
    }
}

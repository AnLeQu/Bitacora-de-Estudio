/*D2-1 Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". De lo contrario, muestra 
"¡Buena semana!".*/

let Dia = prompt ("¿Qué día de la semana es hoy?")

console.log(Dia)

if (Dia == "Sabado")
    {
        alert("¡Buen fin de semana!")
    }
else if (Dia == "Domingo")
    {
        alert("¡Buen fin de semana!")
    }
else
    {
        alert("¡Buena semana!")
    }
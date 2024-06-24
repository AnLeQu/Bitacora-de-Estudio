//D2-3 Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

//Variables
//Score = Deberia de investigar como hacerlo aleatorio 

let SPJ = 100;
let N = 150;
let ScoreRandomNumber = Math.floor(Math.random() * N);
console.log(ScoreRandomNumber);  // Número aleatorio entero entre 0 y 149 (incluyendo ambos)

if (ScoreRandomNumber === SPJ || ScoreRandomNumber > SPJ)
    {
        alert("¡Felicidades, has ganado! Tu puntaje fue de: " + ScoreRandomNumber);
    }
else (ScoreRandomNumber < SPJ)
    {
        alert("Intentalo nuevamente para ganar.");
    }
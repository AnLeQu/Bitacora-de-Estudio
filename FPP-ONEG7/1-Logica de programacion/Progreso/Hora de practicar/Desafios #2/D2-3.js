//D2-3 Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

//Variables
//Score = Deberia de investigar como hacerlo aleatorio 

let SPJ = 100;
let N = 150;
let ScoreRandomNumber = Math.random() * N;
console.log(ScoreRandomNumber);  // Puede ser cualquier número entre 0 y 10 (sin incluir 10)

if (ScoreRandomNumber = SPJ || ScoreRandomNumber > SPJ)
    {
        console.log("¡Felicidades, has ganado!");
    }
else (ScoreRandomNumber < SPJ)
    {
        alert("Intentalo nuevamente para ganar.");
    }
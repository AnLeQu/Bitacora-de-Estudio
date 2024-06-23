//Variables
let NumeroSecreto = 6;
let NumeroDeUsuario = prompt ("Me podrias indicar un numero por favor:");

/*Este codigo guarda/imprime la variable 
escrita en NombreDeUsuario en la consola 
del entorno de desarrollo, lo que permite 
probar información relevante durante la 
ejecución de un programa.*/
console.log(NumeroDeUsuario);

//Este codigo realiza la comparación
if (NumeroDeUsuario == NumeroSecreto) 
    {
        /*La condición, si NumeroDeUsusario 
        es igual que NumeroScreto o almenos 
        entró entre los límites establecidos. 
        Por lo tanto es verdadera, o mejor 
        dicho acertamos el número.*/
        alert('Sorprendente, lo acertaste')
    }
else
    {
        /*La condición no se dio, por lo cual 
        no se acertó. 
        NumeroDeUsuario es diferente o no entra 
        entre los parametros establecidos de 
        NumeroSecreto.*/
        alert("Lo siento, no acertaste el numero")
    }

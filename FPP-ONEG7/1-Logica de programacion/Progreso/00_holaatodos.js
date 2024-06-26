/*El nombre Hola a todos se debe a lo primer 
codigo que se hizo, este sería mi equivalente 
del Hello World, o Hola mundo en español*/

/*El codigo alert imprime de forma visible 
como a modo de alerta en una pequeña ventana
los parametros o las variables que uno le pida
Ejemplo: (Solo visible desde el archivo html)
alert ("¡¡Hola a todos!!") */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Variables
let NumeroSecreto = 6;
let NumeroDeUsuario = 0;
let intentos = 1;
let palabraIntento = "(x) intento o intento (x)"

/*Este codigo guarda/imprime la variable 
escrita en NombreDeUsuario en la consola 
del entorno de desarrollo, lo que permite 
probar información relevante durante la 
ejecución de un programa.*/
console.log(NumeroDeUsuario);

//Este codigo realiza la comparación
while (NumeroDeUsuario != NumeroSecreto)
    {
        //Esta condicon es para cuando se gane.
        if (intentos === 1)
            {
                palabraIntento = "primer intento";
            }
        else
            {
                palabraIntento = "intento número " + intentos;
            }
        NumeroDeUsuario = prompt ("Me podrias indicar un numero entre 1 y 10, por favor:"); 
        /* Cómo habiamos puesto 0, o mejor dicho que 
        la variable no tenia valor, para que lo tenga 
        ahora se llama la variable para que el usuario 
        elija su numero e inicie este bucle hasta que el 
        Numero de Usuario ya no sea diferente al Numero 
        Secreto, o mejor dicho sean iguales.*/
        
        if (NumeroDeUsuario == NumeroSecreto) 
            {
                /*La condición, si NumeroDeUsusario 
                es igual que NumeroScreto o almenos 
                entró entre los límites establecidos. 
                Por lo tanto es verdadera, o mejor 
                dicho acertamos el número.*/
                alert("¡¡¡Sorprendente, lo acertaste en el " + palabraIntento + "!!!");
            }
        else
            {
                /*La condición no se dio, por lo cual 
                no se acertó. 
                NumeroDeUsuario es diferente o no entra 
                entre los parametros establecidos de 
                NumeroSecreto.*/
            
                if (NumeroDeUsuario > NumeroSecreto)
                    {
                        alert ("Lo siento, no acertaste el número. El número secreto es menor");
                    }
                else
                    {
                        alert("Lo siento, no acertaste el número. El número secreto es mayor");
                    }
                    
                intentos = intentos +1;
                //Incrementamos el contador cuando no se acierta
            }
    }



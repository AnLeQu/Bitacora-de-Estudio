//D3-3 Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let CuentaRegresiva = prompt("Dime un numero para crear una cuenta regresiva: ")
let Contador = 0
while (Contador != CuentaRegresiva && CuentaRegresiva < 1500) //Esto debido que por estar jugando puse un numero muy grande y se quedo pegado (y toco reiniciar la computadora), asi que es para prevenir
    {
        Contador = Contador + 1
        console.log(Contador)
    }
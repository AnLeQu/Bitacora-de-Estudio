//DF-8 Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let Numero = parseFloat(prompt("Dame cualquier número entero"));
if (Numero > 0)
{
    alert("Este es un número positivo");
}
else if (Numero < 0)
{
    alert("Este es un número negativo");
}
else (Numero == 0)
{
    alert("Este número es un cero");
}
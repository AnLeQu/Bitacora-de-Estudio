//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta
function SumaDosNumeros()
{
let PrimerNumero = parseInt(prompt("Digite el primer numero: "));
let SegundoNumero = parseInt(prompt("Digite el segundo numero: "))
let resultado = PrimerNumero + SegundoNumero
alert(`${PrimerNumero} + ${SegundoNumero} = ${resultado}`)
}
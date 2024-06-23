// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

//Variables
let MensajeMayor = ("¡Puedes obtener tu licencia de conducir!")
let mensajemenor = ("¿Qué haces aquí?")
let edad = 18;
let edaddecompr = prompt ("Queremos confirmar tu edad para saber si puedes tener esta licencia. Edad:");
console.log(edaddecompr);

//Comparación de variables
if (edaddecompr >= edad)
    {alert(MensajeMayor)}
else 
    {alert(mensajemenor)};
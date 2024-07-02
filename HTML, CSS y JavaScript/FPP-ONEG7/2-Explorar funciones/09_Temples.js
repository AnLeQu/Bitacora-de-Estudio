/*
Los Template strings, o plantillas de cadenas, son características 
comunes en muchos lenguajes de programación y sistemas de plantillas. 
Estas plantillas ofrecen una manera eficiente de crear cadenas de texto 
donde es posible incluir marcadores o espacios reservados que posteriormente 
serán reemplazados por valores concretos. Estos marcadores, por lo general, 
se encuentran delimitados por caracteres especiales, como llaves, corchetes 
o signos de dólar, y desempeñan el papel de puntos de inserción para datos 
dinámicos.

En la gran mayoría de los lenguajes de programación, Template strings 
simplifican la tarea de concatenar valores variables en una cadena, 
sin requerir concatenación manual de cadenas o conversiones explícitas 
de tipos. Esto contribuye a que el código sea más legible y menos propenso 
a errores, lo cual es particularmente valioso en diversas situaciones, 
como la generación de mensajes de usuario, la construcción de consultas 
SQL dinámicas o la creación de documentos HTML.

Un ejemplo ilustrativo de esto se encuentra en JavaScript, donde puedes 
emplear las comillas invertidas (backticks) para crear plantillas de 
cadenas. Esto te permite incrustar expresiones dentro de la cadena 
utilizando el formato ${}. A continuación, un ejemplo práctico:

const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

//Salida: Hola, soy Juan y tengo 30 años.

*/
/*
¿Qué es Math en JavaScript?
Math en JavaScript es un objeto incorporado que 
proporciona métodos y constantes matemáticas 
predefinidas. No es una función ni código externo, 
sino más bien un objeto integrado en el lenguaje.

Uso de punto (.) con Math:
En JavaScript (y muchos otros lenguajes), el punto (.) 
se utiliza para acceder a propiedades y métodos de objetos. 
Cuando ves algo como Math.floor o Math.random, Math es el 
objeto y floor y random son métodos (funciones) definidos 
dentro de ese objeto.

Ejemplos:
{
    Math.random:

    Math.random() es un método que genera un número decimal 
    pseudoaleatorio entre 0 (inclusivo) y 1 (exclusivo).
    {
        let numeroAleatorio = Math.random();
        console.log(numeroAleatorio); 
        // Ejemplo de salida: 0.123456789
    }

    Math.floor:

    Math.floor() es un método que devuelve el mayor entero 
    menor o igual a un número dado.
    {
        let numero = 3.7;
        let numeroEntero = Math.floor(numero);
        console.log(numeroEntero); // Salida: 3
    }
}
    
Math en JavaScript es un objeto que proporciona métodos 
matemáticos útiles como random, floor, round, sin, cos, 
entre otros. Usamos el punto (.) para acceder a estos 
métodos desde el objeto Math. Esto facilita la organización 
y la utilización de funciones matemáticas comunes en nuestros 
programas.*/
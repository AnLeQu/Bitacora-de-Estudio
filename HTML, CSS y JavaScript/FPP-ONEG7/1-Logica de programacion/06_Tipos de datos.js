/*
Tipos de datos primitivos en JavaStript
{
  Number: Números enteros o de punto flotante (decimales)
  {
    Se pueden crear de forma literal escribiendo 
    simplemente el número dentro de una variable:
    let numeroEntero = 10;
    let numeroDecimal = 3.14;
    
    let myage = 12
    console.log('myage =>', my_age)
    console.log(typeof(my_age))
    parseInt() 
    //Para convertir el tipo de dato a un número

    También se pueden generar mediante operaciones 
    matemáticas o asignaciones:
    let resultadoSuma = 5 + 3; 
    // Genera el número 8
  }

  Strings: Cadenas de texto o secuencia de 
  caracteres que see utilizan para representar 
  texto.
  {
    Se escriben entre comillas simples o 
    dobles. Ejemplos: 'Hola', "JavaScript"
    let mensaje1 = 'Hola mundo';
    let mensaje2 = "JavaScript es divertido";

    let my_name = "Nicolas"
    my_name = 'Santiago'
    console.log('my_name =>', my_name)
    console.log(tipeof(my_name))

    También se pueden generar concatenando 
    strings o usando métodos de cadenas:
    let saludo = 'Hola';
    let nombre = 'Juan';
    let mensaje = saludo + ', ' + nombre + '!';
    // Genera 'Hola, Juan!'
  }

  Booleans: Valores booleanos (True o False)
  {
    let esMayorDeEdad = true;
    let aceptaTerminos = false;

    let is_single = true
    console.log('is_single =>', is_single)
    console.log(typeof(is_single))

    Se generan típicamente como resultado de 
    expresiones lógicas:
    let edad = 18;
    let esMayor = edad >= 18; 
    // Genera true si edad es 18 o más, false 
    si es menos de 18
  }

  Undefined: Representa una variable que ha sido 
  declarada pero aún no tiene un valor asignado
  {
    En general, se asigna automáticamente a las variables 
    que se declaran sin valor inicial. Ejemplo: let x;.
    let x;
    console.log(x); 
    // Genera undefined

  }
  
  Symbol: Representa un valor único e inmutable
  {
    Los símbolos se crean usando la función constructora 
    Symbol() o mediante la sintaxis de símbolo literal 
    (Symbol() con una descripción opcional entre paréntesis):
    let simbolo1 = Symbol();
    let simbolo2 = Symbol('descripcion');

  }

  Null: Representa la ausencia intencional de algún 
  valor o referencia a un objeto. Ejemplo: let y = null;.
  {
    Se asigna explícitamente a una variable para indicar 
    que no tiene ningún valor o referencia:
    let y = null;
  }
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Tipos de de datos adicionales
{
  Datos Compuestos: Object
  Datos Especiales: BIGint
}
*/
//EQUAL TO ( = ) / ( == ) / ( === )

    /*Asignación (=):
        El operador de asignación (=) se utiliza para asignar un valor a una variable.*/

        let x = 10;  // Asigna el valor 10 a la variable x

    /*Igualdad débil (==):
        El operador de igualdad débil (==) 
        compara dos valores para verificar si son iguales, pero permite la conversión de 
        tipos (coerción de tipos) durante la comparación.
        Esto significa que si los valores comparados son de diferentes tipos, JavaScript 
        intentará convertirlos a un tipo común antes de compararlos.*/

        A == B	// Verdadero si A es igual a B
        5 == '5';  // true, porque el string '5' se convierte al número 5 antes de la comparación
        0 == false;  // true, porque false se convierte al número 0 antes de la comparación
        null == undefined;  // true, porque null y undefined se consideran iguales en == 

    /*Igualdad estricta (===):
        El operador de igualdad estricta (===) compara dos valores para verificar si son 
        exactamente iguales, sin permitir la conversión de tipos.
        Los valores deben ser del mismo tipo y tener el mismo valor para que la comparación 
        sea verdadera.*/

        5 === '5';  // false, porque son de tipos diferentes (número y string)
        0 === false;  // false, porque son de tipos diferentes (número y booleano)
        null === undefined;  // false, porque son de tipos diferentes

///////////////////////////////////////////////////////

/*LESS THAN ( < ) 
<	Menor que	A < B	Verdadero si A es menor que B */

///////////////////////////////////////////////////////
/*
>	Mayor que	A > B	Verdadero si A es mayor que B

////////////////////////////////////////////////////////

<=	Menor o igual	A <= B	Verdadero si A es menor o igual a B

////////////////////////////////////////////////////////

>=	Mayor o igual	A >= B	Verdadero si A es mayor o igual a B
*/
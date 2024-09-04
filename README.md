<!DOCTYPE html>
<html lang="es-cr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<div align="center">

# 📝 Registro de Progreso en Programación

</div>

## Contenido
- [De qué trata esto](#de-qué-trata-esto)
- [Programación](#programación)
  <!--- [Conceptos](#)-->
  - [HTML-CSS-JavaScript](#html-css-y-javascript)
    - [Conceptos html](#)
    - [Proyectos HTML-CSS-JS](#Project-HTML-CSS-JS)
  - [Git y Github](#git-y-github)
    - [Comandos](#)
<!-- [CIM](#cim) y [TAMA](#--) -->
  - [IA - Data Science](#ia-y-data-science)
  - [Python](#python)
      - [Conceptos py](#)
      - [Proyectos py](#Project-py)
  - [Excel](#Excel)
    - [Estadística y Probabilidad](#probabilidad-y-estadistica-en-exel-y-google-sheets)
- [Contacto](#Contacto)
- [Fuentes](#fuentes)
  - [Repositorios](#)
  - [Articulos y links](#)

# 🧐 ¿De qué trata esto?
Este repositorio de GitHub es un registro de mi progreso en el aprendizaje en programación y conceptos relacionados. Aquí podrás encontrar proyectos, tareas y apuntes que reflejan el camino recorrido en diferentes lenguajes. Mi objetivo es documentar mi proceso durante los 7 meses del curso FPP-ONEG7 y otros estudios.
Agradezco a todos los que se han tomado el tiempo de ver mi perfil y este repositorio, y aquellos que puedan ofrecer [comentarios o sugerencias](#contacto) para mejorar durante este proceso.

# Programación <img src="/HTML, CSS y JavaScript/assets/code.png" width="3%"/>

<details>
<summary>
    
## Conceptos

</summary>


### Variables:
```python
# Esto es una variable
my_name = "Andrés"
```
Una variable <!--en JavaScript--> es como una caja etiquetada 
donde puedes guardar información. Puedes pensar en ella 
como un nombre que utilizas para referirte a un valor 
específico. Por ejemplo, imagina una caja llamada edad 
donde guardas el número "24". Más tarde, puedes cambiar el 
valor guardado en esa caja o usarlo en cálculos.
Ejemplo:
```javascript 
let edad = 24;
```
Aquí "edad" es la variable que guarda el valor 24

Son como nombres que guardan valores y se encuentran en diferentes lenguajes como Python, JavaScript entre otros, en js al inicio de la variable se debe de poner let cómo se ve en el ejemplo

### Etiquetas:

### Tipos de datos:

#### Number: 
Números enteros o de punto flotante (decimales)
    Se pueden crear de forma literal escribiendo 
    simplemente el número dentro de una variable:
    
```JavaScript
let numeroEntero = 10;
let numeroDecimal = 3.14;
let myage = 12
console.log('myage =>', my_age)
console.log(typeof(my_age))
parseInt() 
//Para convertir el tipo de dato a un número
```
<!-- revisar que esto este bien ya que es una readaptacion de python a Javascript -->

También se pueden generar mediante operaciones matemáticas o asignaciones:
```javascript
    let resultadoSuma = 5 + 3; 
    // Genera el número 8
```

#### Strings: 
Cadenas de texto o secuencia de caracteres que see utilizan para representar texto.
Se escriben entre comillas simples o 
dobles. Ejemplos:
|Javascript|
|----------|

<div align=left weigh=40%>
    
```javascript
  // strings Javascript 
'Hola', "JavaScript"
let mensaje1 = 'Hola a todos';
let mensaje2 = "JavaScript es divertido";

let my_name = "Andrés"
my_name = 'D.'
console.log('my_name =>', my_name)
console.log(tipeof(my_name))
```
|Python|
|------|

</div>
<div align=right weigh=40%>

```python
  # strings python
"Hola", 'Python' 
mensaje1 = 'Hola a todos'
mensaje ="python es divertido"
my_name = "Andrés"
my_name = 'D.'
print('my_name =>', my_name)
print(type(my_name))
```

</div>

También se pueden generar concatenando strings o usando métodos de cadenas:
<!-- poner la versión de Javascript de concatenar letras donde se puede poner ${, y poner esta pero para python qué es de donde la adapte originalmente
    let saludo = 'Hola';
    let nombre = 'Juan';
    let mensaje = saludo + ', ' + nombre + '!';
    // Genera 'Hola, Juan!'
  }
-->
#### Booleans: 
Valores booleanos (True o False)
```javascript
let esMayorDeEdad = true;
let aceptaTerminos = false;

let is_single = true
console.log('is_single =>', is_single)
console.log(typeof(is_single))
```
<!-- revisar esta última parte del código de basado en py -->

Se generan típicamente como resultado de 
    expresiones lógicas:
```javascript
let edad = 18;
let esMayor = edad >= 18; 
// Genera true si edad es 18 o más, false si es menos de 18
```

###### Hasta donde es de mi conocimiento actual los siguientes tipos de datos son de Javascript 

#### Undefined: 
Representa una variable que ha sido 
  declarada pero aún no tiene un valor asignado
  
En general, se asigna automáticamente a las variables que se declaran sin valor inicial. Ejemplo: 
```javascript
let x;.
    let x;
    console.log(x); 
    // Genera undefined
```
#### Symbol: 
Representa un valor único e inmutable
Los símbolos se crean usando la función constructora 
Symbol() o mediante la sintaxis de símbolo literal 
(Symbol() con una descripción opcional entre paréntesis):
```javascript
let simbolo1 = Symbol();
let simbolo2 = Symbol('descripcion');
```
#### Null: 
Representa la ausencia intencional de algún valor o referencia a un objeto. Ejemplo: let y = null;.
Se asigna explícitamente a una variable para indicar que no tiene ningún valor o referencia:
```javascript
let y = null;
```
Tipos de datos en Javascript
  Number:
  Strings: Cadenas de texto
  Booleans: Valores booleanos (True o False)
  Undefined
  Symbol
  Null
Tipos de de datos adicionales en js
  Datos Compuestos: Object
  Datos Especiales: BIGint

Tipos de datos en Python
  
  
  
  
  
  
Tipos de datos adicionales

<details>
<summary> 
    
  [Datos de texto: str](#strings:)
  
</summary>
</details>
<details><summary>
    
  Datos numéricos: int, float, complex
  
</summary>

Integers: Numeros enteros
      
  ```python
  # int
my_age = 24
print('my_age =>', my_age)
print(type(my_age))
```

Floats: Numeros de punto flotante (decimales)

</details>
<details>
<summary>
  Datos de secuencia: list, tuple, range
</summary>
    
  ```python
#List comprehension
#Example 1: list de 10 numeros
#estructura: [element for element in iterable]
numbers = [] 
for element in range(1,11):
  numbers.append(element *2 )

print(numbers)
print('-'*10)
#Example 2: list de 10 numeros en una sola linea
#element = iterador lo que hace dentro del for 
numbers_v2 = [element *2 for element in range(1,11)]
print(numbers_v2)

print('-' * 10)

#estructura con condicion: [element for element in iterable if condition]
#Forma tradicional:
print('Forma Tradicional:')
numbers = []
for i in range(1, 11):
  if i % 2 == 0:
    numbers.append(i * 2)

print(numbers)
print('-' * 10)
#Forma de list comprehension: tiene legibilidad
print('Forma con list comprehension:')
#[operacion del iterador-primera parte del for-la primera parte del if]
numbers_v2 = [i * 2 for i in range(1, 11) if i % 2 == 0]
print(numbers_v2)
print('-' * 10)
```
</details>
<details><summary>
  Datos de mapeo: dict
</summary>

  ```python
#Diccionario comprehension:
#structure: {key:value for var in interable}
print('Example 1')

print('Forma tradicional:')
dict = {}
for i in range(1,5):
  dict[i] = i*2

print(dict)

print('Forma Comprehension:')
#versión corta
dict_v2={i: i*2 for i in range(1,5) } 
print(dict_v2)
print('-'*10)

print('Example 2')

print('Forma Tradicional:')
import random 
countries = ['col','mex','bol','pe']
population = {}

for country in countries:
  population[country] = random.randint(1,100)

print(population)

print('Forma Comprehension:')
#iterador: # aleatorios random for recorre la lista y llena el diccionario
population_v2 = {country: random.randint(1,100) for country in countries}
print(population_v2)
print('-'*10)
print('Example 3')
print('Forma Tradicional:')
names = ['León','Andrés','Josué']
ages = [12,56,98]
#tenemos una lista con tuplas dentro
{
  'León':12,
  'Andrés':56,
  'Josué':98
}

#unir una lista con otra, se usa ZIP
print(list(zip(names, ages)))

print('Forma Comprehension:')
new_dict = {name: age for (name, age) in zip(names, ages) }
print(new_dict)
```
</details>
<details><summary>
  Datos de tipo binario: bytes, bytearray, memoryview
</summary>
</details>

<details><summary>
  Datos booleanos: bool
</summary>
Valores booleanos (True o False)
</details>

<details>
<summary>
Set Types: set, frozenset
</summary>
Sets: Estructura de datos, agrupa elementos que tienen algo en común, se pueden modificar, no tiene un orden y no se pueden duplicar
    
  ```python
set_countries = {'cr', 'col', 'mex', 'bol'}
print(set_countries)
print(type(set_countries))

set_numbers = {1, 2, 45, 6, 7, 7}
print(set_numbers)

set_types = {'hola', 7, 36.25, False}
print(set_types)

#crea un set apartir de un string con la funcion set.
#lo que hace es dividir el texto en 4 elementos
set_from_string = set('hola')
print(set_from_string)

#crea un set apartir de una tupla con la funcion set.
set_from_tuples = set(('abc', 'as', 'def', 'abc'))
print(set_from_tuples)

#crea un set apartir de una lista con la funcion set.
numbers = [1, 2, 3, 1, 2, 3, 4]
set_from_list = set(numbers)
print(''set_from_list)
#pasar el conjunto de datos unicos a una lista o tupla
unique_numbers = list(set_from_list)
print(unique_numbers)
unique_numbers = tuple(set_from_list)
print(unique_numbers)
```
</details>

### Comparadores de variables:
Este codigo realiza la comparación de variables

#### IF (parametro/condición)

Si la condición planteada es igual o almenos entró entre los límites establecidos es verdadera
<!-- Agregar ejemplo -->

#### ELSE IF (nuevo parametro != al anterior)

Si la condición planteada es falsa y no entró entre los límites establecidos, estas variables se les puede generar nuevas condiciones a las cuales comparar con algun otro argumento.
<!-- Agregar ejemplo -->
        
#### ELSE

Sino se le da alguna condicion en caso de no entrar entre los parametros anteriores
        
#### WHILE (parametro)

Mientras alguna condicion establecida se de, el codigo dentro de el seguira funcionando de manera de bucle
<!-- Agregar ejemplo y explicar como romper el ciclo con break-->

### Comparadores de aritmetricos:
EQUAL TO ( = ) / ( == ) / ( === ) 

#### Asignación (=):
El operador de asignación (=) se utiliza para asignar un valor a una variable.
```javascript
let x = 10;  // Asigna el valor 10 a la variable x
```

#### Igualdad débil (==):
El operador de igualdad débil (==) compara dos valores para verificar si son iguales, pero permite la conversión de tipos (coerción de tipos) durante la comparación.
Esto significa que si los valores comparados son de diferentes tipos, JavaScript intentará convertirlos a un tipo común antes de compararlos.

A == B	// Verdadero si A es igual a B
5 == '5';  // true, porque el string '5' se convierte al número 5 antes de la comparación
0 == false;  // true, porque false se convierte al número 0 antes de la comparación
null == undefined;  // true, porque null y undefined se consideran iguales en == 


#### Igualdad estricta (===):
El operador de igualdad estricta (===) compara dos valores para verificar si son exactamente iguales, sin permitir la conversión de tipos.
Los valores deben ser del mismo tipo y tener el mismo valor para que la comparación sea verdadera.
```javascript
5 === '5';  // false, porque son de tipos diferentes (número y string)
0 === false;  // false, porque son de tipos diferentes (número y booleano)
null === undefined;  // false, porque son de tipos diferentes
```

#### LESS THAN ( < ) 
<	Menor que	
A < B	Verdadero si A es menor que B 

#### MORE THAN ( > )
>	Mayor que
A > B	Verdadero si A es mayor que B

#### (<= / >=) 
<=	Menor o igual	
A <= B	//Verdadero si A es menor o igual a B

>=	Mayor o igual
A >= B	//Verdadero si A es mayor o igual a B

### Operadores Logicos:
<details><summary>
    
#### Javascript

</summary>

#### AND ( && )
El operador AND, representado por el símbolo "&&", se utiliza para combinar dos condiciones y evaluar si ambas son verdaderas. Si ambas condiciones son verdaderas, el resultado será... verdadero. De lo contrario, lógicamente será falso. Por ejemplo:


```javascript
  (A > B) && (B == C)	// Verdadero si A es mayor que B 
  y B es igual a C

  let edad = 25;
  let tieneLicencia = true;

  // si la edad es mayor de 18 y tiene una licencia...
  if (edad > 18 && tieneLicencia) 
  {
    console.log("Puede conducir!");
  } 
  else 
  {
    console.log("No puede conducir!");
  }
}
```

#### OR( | | )
El operador OR, representado por los símbolos "||", se utiliza para verificar si al menos una de las condiciones es verdadera. Si una de las condiciones es verdadera, el resultado será verdadero. Si ambas son falsas, el resultado será falso. Ejemplo:

```javascript
  (A > B) || (B == C)	//Verdadero si A es mayor que B o B es 
  igual a C

  let tieneManzana = false; let tieneBanana = true

  // si tiene manzana o tiene banama…
  if (tieneManzana|| tieneBanana) 
  {
    console.log("Tienes frutas!");
  } 
  else 
  {
    console.log("No tienes frutas.");
  }
  
}
```
#### DENIAL OR DIFFERENT ( ! )
[!] NEGACIÓN
```javascript
  	[!(A == B)]	//Verdadero si A NO es igual a B
```
[!=] DIFERENTE
```javascript
  	[A != B]   //Verdadero si A es diferente a B
```

</details>
<details><summary>
    
#### Python

</summary>

#### AND - TODAS las operaciones deben ser True, para obtener True
```python
print('#'*5,' AND ', '#'*5)
print('AND')
print('True and True => ', True and True)
print('True and False => ', True and False)
print('False and True => ', False and True)
print('False and False => ', False and False)

print(10 > 5 and 5 < 10)
print(10 > 5 and 5 > 10)

print("-"*10)

stock = input('Ingrese el número de stock => ')
stock = int(stock)

print(stock >= 100 and stock <= 1000)

print('')
print('#'*5,' OR ', '#'*5)
```

#### OR - Al menos una de las operaciones debe ser True, para obtener True
```python
print('OR')
print('True or True => ', True or True)
print('True or False => ', True or False)
print('False or True => ', False or True)
print('False or False => ', False or False)

role = input('Digita el rol => ')

print(role == 'Admin' or role == 'Seller')
```
</details>
</details>

## HTML, CSS y JavaScript <img src="/HTML, CSS y JavaScript/assets/folder.png" width="3%"/>

<!--<p align="center">
<img wight="10%" alt="Logos de HTML, CSS y JS" src="/Otros Proyectos/img/Sin título.png">
</p>-->

### Recursos
- FPP-ONEG7
 Formación de Principiantes en Programación atraves del programa ONE. 

<div align="center">

| Curso                                                                  |
| ---------------------------------------------------------------------- |
|- Logica de programación: sumérgete en la programación con JavaScript.  |
| - Lógica de programación: explorar funciones y listas |
| - Curso de HTML y CSS: ambientes de desarrollo, estructura de archivos y tags |
| - Curso de HTML y CSS: Clases, Posicionamiento y Flexbox |
| - Curso de HTML y CSS: header, footer y variables CSS |
| - Curso de HTML y CSS: trabajando con responsividad y publicación de proyectos |

</div>
<!-- Proyectos -->
<div>
    <h2 id="Project-HTML-CSS-JS">Projectos.html <img src="/HTML, CSS y JavaScript/assets/blueprint.png" width="3%"/></h2>
</div>
<div align="center">
<details>
<summary><h3><a href="/HTML, CSS y JavaScript/FPP-ONEG7/1-Logica de programacion">Curso de
  Lógica de programación: sumérgete en la programación con JavaScript</a></h3></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://app.aluracursos.com/certificate/88d50ad9-7900-4335-8b38-f071ba9fedb9?lang">Certificado</a></td>
      </tr>
    </tbody>
  </table>
  </div>
</details>
</div>

```javascript
//Variables
let NMaxPosible = prompt("Elija una cantiadad de numeros con las que jugaras:")
let NumeroSecreto = Math.floor(Math.random()*(`${NMaxPosible}`)+1); //
let NumeroDeUsuario = 0;
let intentos = 1;
//let palabraIntento = "(x) intento o intento (x)"
let MaxIntentos = Math.floor(3 * (NMaxPosible/10)) 

/*Este codigo guarda/imprime la variable 
escrita en NombreDeUsuario en la consola 
del entorno de desarrollo, lo que permite 
probar información relevante durante la 
ejecución de un programa.*/
console.log(NumeroDeUsuario);

//Este codigo realiza la comparación
while (NumeroDeUsuario != NumeroSecreto)
{
    /*Esta condicon es para cuando se gane.
    if (intentos === 1)
    {
        palabraIntento = "primer intento";
    }
    else
    {
        palabraIntento = "intento número " + intentos;
    }
    Este mismo codigo  es remplazado por:
    `${intentos == 1 ? 'primer intento' : 'intento número '+intentos}`
    esto es una version simplificada de if y else*/

    NumeroDeUsuario = parseInt (prompt ("Me podrias indicar un numero entre 1 y " + `${NMaxPosible}` + ", por favor:")); 
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
        alert("¡¡¡Sorprendente, lo acertaste en el " + `${intentos == 1 ? 'primer intento' : 'intento número '+intentos}` + "!!!");
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
        //intentos += 1; 
        //intentos ++;
        //Otras formas para describir lo mismo: Incrementamos el contador cuando no se acierta
    }

    if (intentos > MaxIntentos)
    {
        alert("Llegaste al número maximo de intentos")
        break; 
        //Rompe/corta la condición que crea el bucle
    }
}
```

<div align="center">
<details>
<summary><h3><a href="/HTML, CSS y JavaScript/FPP-ONEG7/2-Explorar funciones">Curso de
Lógica de programación: explorar funciones y listas</a></h3></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://app.aluracursos.com/certificate/7a8b22de-9530-400f-a794-e3a5cf418a9f?lang">Certificado</a></td>
      </tr>
    </tbody>
  </table>
  </div>

![Juego](/HTML,%20CSS%20y%20JavaScript/assets/Juego.png)

</details>
</div>

<div align="center">
<details>
<summary><h3><a href="/HTML, CSS y JavaScript/FPP-ONEG7/3-HTML y CSS - Ambiente de desarrollo, estructura de archivos y tags/">Curso de HTML y CSS: ambientes de desarrollo, estructura de archivos y tags</a></h3></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://app.aluracursos.com/user/anlequ/course/html-css-desarrollo-estructura-archivos-tags/certificate">Certificado</a></td>
      </tr>
   </tbody>
  </table>
  </div>
</details>
</div>

```html

```

<div align="center">
<details>
<summary><h3><a href="/HTML, CSS y JavaScript/FPP-ONEG7/4-HTML y CSS - Clases, Posicionamiento y Flexbox/">Curso de HTML y CSS: Clases, Posicionamiento y Flexbox</a></h3></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://app.aluracursos.com/user/anlequ/course/html-css-clases-posicionamiento-flexbox/certificate">Certificado</a></td>
      </tr>
   </tbody>
  </table>
  </div>
</details>
</div>

```html

```

<div align="center">
<details>
<summary><h3><a href="/HTML, CSS y JavaScript/FPP-ONEG7/5-HTML y CSS - header, footer y variables CSS/">Curso de HTML y CSS: header, footer y variables CSS</a></h3></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://app.aluracursos.com/user/anlequ/course/html-css-header-footer-variables-css/certificate">Certificado</a></td><!--Agregar aca /cambiar link del certificado-->
      </tr>
   </tbody>
  </table>
  </div>
</details>
</div>

```html

```

<div align="center">
<details>
<summary><h3><a href="/HTML, CSS y JavaScript/FPP-ONEG7/6-HTML y CSS - trabajando con responsividad y publicación de proyectos/">Curso de HTML y CSS: trabajando con responsividad y publicación de proyectos</a></h3></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://app.aluracursos.com/user/anlequ/course/html-css-trabajando-responsividad-publicacion-proyectos/certificate">Certificado</a></td>
      </tr>
   </tbody>
  </table>
  </div>
</details>
</div>

```css

```

<div align="center">
<details>
<summary><h3><a href="https://anlequ.github.io/Challenge-FPP-One-G7/">Prácticando lógica de programación: Challenge Encriptador de texto</a></h3></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://app.aluracursos.com/user/anlequ/course/challenge-encriptador-texto/certificate">Certificado</a></td>
      </tr>
      <tr>
    </tbody>
  </table>
  </div>

![Encriptador](/HTML,%20CSS%20y%20JavaScript/assets/Encriptador.png)

<!--El espacio es para llenar con lo que hace falta-->
</details>
</div>

## Git y Github <img src="/HTML, CSS y JavaScript/assets/branch.png" width="3%"/>

### Temas Cubiertos

<!-- idea:poner tipo un código  de como hacer pull, push, clonar repositorio y para que sirve exactamente
Ejemplo:
```bash
git clone <URL del Repositorio>
cd AnLeQu
El git clone tal como dice su nombre su función es clonar el repositorio....
-->

<!--<p align="center">
<img alt="Logos de git y GitHub" src="/Otros Proyectos/img/Sin título 2.png">
</p>-->

<!--
<table>
  <thead>
    <tr>
      <th>Cursos</th>
      <th>Contenidos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="      ">Curso de Git y GitHub: repositorio, commit y versiones</a></td>
    </tr>
    <tr>
-->

# CIM
<!--
# R
# Mathlab
# C++
[GNome](https://github.com/google-deepmind/materials_discovery)
-->

## IA y Data Science
### Recursos
- Platzi

<div align="center">
<table>
  <thead>
    <tr>
      <th>Cursos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://platzi.com/p/AnLeQu/curso/2807-aprender-data-ia/diploma/detalle/">Guía para Empezar una Carrera en Data Science e Inteligencia Artificial</a></td>
    </tr>
    <tr>
      <td><a href="https://platzi.com/p/AnLeQu/curso/8517-adopcion-ia/diploma/detalle/">Guía de Adopción a la Inteligencia Artificial</a></td>
    </tr>
    <tr>
    <td><a href="https://platzi.com/p/AnLeQu/curso/7963-ai/diploma/detalle/">Curso de Introducción a Inteligencia Artificial</a></td>
    </tr>
    <tr>
    <td><a href="https://platzi.com/p/AnLeQu/curso/6935-ia-data-ml/diploma/detalle/">Curso de Fundamentos de IA para Data y Machine Learning</a></td>
    </tr>
    <tr>
    <td><a href="https://platzi.com/p/AnLeQu/curso/3156-etica-ia/diploma/detalle/">Curso de Ética y Manejo de Datos para Data Science e Inteligencia Artificial</a></td>
    </tr>
    <tr>
    <td><a href="https://platzi.com/p/AnLeQu/curso/2434-jupyter-notebook/diploma/detalle/">Curso de Entorno de Trabajo para Ciencia de Datos con Jupyter Notebooks y Anaconda</a></td>
    </tr>
    <tr>
    <td><a href="https://platzi.com/p/AnLeQu/curso/2069-negocios-data-science/diploma/detalle/">Curso de Análisis de Negocios para Ciencia de Datos</a></td>
    </tr>
    <tr>
    <td><a href="https://platzi.com/p/AnLeQu/ruta/13496-introduccion-data-ia/diploma/detalle/">Ruta de Aprendizaje de Bases para Analítica y Ciencia de Datos</a></td>
    </tr>
    <tr>
    <td><a href="https://app.aluracursos.com/user/anlequ/course/chatgpt-optimizando-calidad-resultados/certificate">ChatGPT: Optimizando la calidad de los resultados</a></td>
    </tr>
  </tbody>
</table>
</div>

## Python <img src="/HTML, CSS y JavaScript/assets/python.png" width="3%"/>

```python
def mi_funcion():
    return "Hola, a todos!"
```
### Fundamentos

<!-- Proyectos -->
<div>
    <h2 id="Project-py">Projectos.py <img src="/HTML, CSS y JavaScript/assets/blueprint.png" width="3%"/></h2>
</div>
<div align="center">
<details>
<summary><h2><a href="/Python/2-Comprehensions - Funciones - Manero de Errores/11_game.py">Juego: Piedra, papel y tijreas</a></h2></summary>
  <div>
  <table>
    <tbody>
      <tr>
        <td><a href="https://platzi.com/p/AnLeQu/curso/4227-python-fundamentos/diploma/detalle/">Certificado</a></td>
      </tr>
    </tbody>
  </table>
  </div>
</details>
</div>

```python
import random


def choose_options():
  options = ('piedra', 'papel', 'tijera')
  user_option = input('piedra, papel o tijera => ')
  user_option = user_option.lower()

  if not user_option in options:
    print('esa opcion no es valida')
    # continue
    return None, None

  computer_option = random.choice(options)

  print('User option =>', user_option)
  print('Computer option =>', computer_option)
  return user_option, computer_option

def check_rules(user_option, computer_option, user_wins, computer_wins):
  if user_option == computer_option:
    print('Empate!')
  elif user_option == 'piedra':
    if computer_option == 'tijera':
      print('piedra gana a tijera')
      print('user gano!')
      user_wins += 1
    else:
      print('Papel gana a piedra')
      print('computer gano!')
      computer_wins += 1
  elif user_option == 'papel':
    if computer_option == 'piedra':
      print('papel gana a piedra')
      print('user gano')
      user_wins += 1
    else:
      print('tijera gana a papel')
      print('computer gano!')
      computer_wins += 1
  elif user_option == 'tijera':
    if computer_option == 'papel':
      print('tijera gana a papel')
      print('user gano!')
      user_wins += 1
    else:
      print('piedra gana a tijera')
      print('computer gano!')
      computer_wins += 1
  return user_wins, computer_wins

def run_game():
  computer_wins = 0
  user_wins = 0  
  rounds = 1
  while True:
    print('*' * 10)
    print('ROUND', rounds)
    print('*' * 10)

    print('computer_wins', computer_wins)
    print('user_wins', user_wins)
    rounds += 1

    user_option, computer_option = choose_options()
    user_wins, computer_wins = check_rules(user_option, computer_option, user_wins, computer_wins)

    if computer_wins == 2:
      print('El ganador es la computadora')
      break

    if user_wins == 2:
      print('El ganador es el usuario')
      break

run_game()
```

<!--
<p align="center">
<img alt="Logo de python" src="/Otros Proyectos/img/Python.png">
</p>
-->


# Excel <img src="/HTML, CSS y JavaScript/assets/office365.png" width="3%"/>
### Recursos
- TAMA
<!--
<p align="center">
<img alt="Logo de Excel" src="">
</p>
-->

> [!IMPORTANT]\
> Los proyectos compartidos no son visibles dentro de GitHub por el formato de Excel, proximamente habilitaré un link para su vizualización 

<table>
  <thead>
    <tr>
      <th>Curso</th>
      <th>Contenido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://platzi.com/p/AnLeQu/curso/3639-excel-intro/diploma/detalle/">Curso de Introducción a Excel para Principiantes: Fundamentos y Formato de Hojas de Cálculo</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td><a href="https://platzi.com/p/AnLeQu/curso/4036-excel-basico/diploma/detalle/">Curso de Excel Básico: Tablas y Fórmulas para la Gestión de Datos</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>Curso de Excel TAMA</td>
      <td>
        <ul>
          <li><a href="/Excel/1.%20REPASO1.xlsx">Repaso en Excel</a></li>
          <li><a href="/Excel/2.%20FORMULAS%20DE%20TEXTO.xlsx">Formulas de texto</a></li>
          <li><a href="/Excel/3.%20Tabla%20BDSUMA%20-%20BDPROMR..xlsx">Tabla BDSUMA - BDPROMR.</a></li>
          <li><a href="/Excel/4.%20Dashboard%20Con%20BDSUMA.xlsx">Dashboard Con BDSUMA</a></li>
          <li><a href="/Excel/5.SUBTOTAL.xlsx">SUBTOTAL</a></li>
          <li><a href="/Excel/12.%20Tablas%20Dinamicas%201.xlsx">Tablas Dinamicas</a></li>
          <li><a href="/Excel/14._DashBoard-1684450094313.xlsx">DashBoard</a></li>
          <li><a href="/Excel/16.%20power%20pivot%20y%20formulas.xlsx">Power Pivot y Formulas</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Curso de Excel Intermedio para Analistas con Tableros y Fórmulas</td>
      <td><a href="/Excel/Curso%20de%20Excel%20Intermedio%20para%20Analistas%20con%20Tableros%20y%20Fórmulas/PROYECTO%20EXCEL%20TABLAS%20-%20ANLEQU.xlsx">Proyecto</a></td>
    </tr>
  </tbody>
</table>


<p align="center">
<img alt="Captura de pantalla de un trabajo de Excel" src="/Excel/Captura de pantalla 2023-12-16 150224.png">
</p>

## Probabilidad y Estadistica en Exel y Google Sheets
| Curso                                                                                                                 |  Contenido |
| :--------------------------------------------------------------------------------------------- | :--------: |
| [Curso de Estadística y Probabilidad](https://platzi.com/p/AnLeQu/curso/7594-estadistica-probabilidad/diploma/detalle/) | [Proyecto](/Excel/Intro%20a%20Est%20&%20Prob/) |

## Contacto
Pueden enviarme cualquier consulta, sugerencia o colaboración y unirse a mis grupos de mediante el siguiente los siguientes enlaces:
  - [LinkedIn](https://www.linkedin.com/in/anlequ/)  
  - [Discord](https://discord.gg/PDEy2m3ddz)
  - Correo: AnLeQu@outlook.com
  <!-- - [Telegram]()
  -->
 > [!IMPORTANT]\
  > Cómo mencioné anteriormente estos datos son para que tengan una manera más directa de contactarme, por favor con lo que se refiere a mi información de contacto no la utilicen para enviarme spam, o contenido no deseado ya que tendré que bloquearlos y de ser el caso los repotarlos.

# Fuentes
> [!NOTE]\
> No solo hay una unica fuente donde voy agarrando la información a pesar que diga que el curso tal o cuál, la verdad es que incluso hago uso desde repositorios en GitHub hasta videos de YT, paginas web u otras redes sociales, ya son de utilidad en mi intento aprender un poco más cada dia. Quiero aprovechar lo mas que pueda las oportunidades que se me han dado y la idea de este repositorio es demostrar el tiempo qu le dedico, por lo tanto los trabajos van dependiendo de como voy avanzando.

### Canales de YouTube
En vez de videos voy a dejar canales que recomiendo y que han sido recursos durante mi aprendizaje
- [DotCSV](https://www.youtube.com/channel/UCy5znSnfMsDwaLlROnZ7Qbg)
- [Pildoras de programación](https://www.youtube.com/@pildorasdeprogramacion)
- [Platzi](https://www.youtube.com/@Platzi)

<!--
### Cursos
- FPP-ONEG7 [alura LATAM](https://app.aluracursos.com/)
- CIM [Tec || itcr]
- TAMA [FUNDEPOS]
- [Platzi](https://platzi.com/)
-->

### Repositorios
- [Para aprender programación prácticando](https://github.com/practical-tutorials/project-based-learning)
- [Coding Interview University](https://github.com/jwasham/coding-interview-university) 
- [Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook/tree/master)
- [Genetifics](https://github.com/NathalyDM/genetifics) sirvio de inspiración para este mismo repositorio.
- [GNome](https://github.com/google-deepmind/materials_discovery)
- [Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook)

### Articulos y otros links
- [Learn X in Y minutes](https://learnxinyminutes.com/)

[Readme Typing SVG](https://readme-typing-svg.demolab.com/)

[w3schools](https://w3schools.com/html/html_intro.asp)
- [W3SCHOOL HTML](https://www.w3schools.com/html/)

[mdn]
- [Selectores](https://developer.mozilla.org/es/docs/Web/CSS/CSS_selectors)

[Alura Cursos]
- [Extensiones](https://www.aluracursos.com/blog/extensiones-de-vscode-descubre-cuales-son-las-mas-utilizadas) 
- [Nombres de clases](https://www.aluracursos.com/blog/nombre-de-clases-en-css)
- [Reset CSS](https://www.aluracursos.com/blog/reset-css-que-es-ejemplos-como-crear-y-utilizar)

[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Emmet](https://docs.emmet.io/es) una herramienta que permite escribir códigos HTML y CSS de manera extremadamente rápida y productiva.

[Semantica](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

[Colores]
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/pt/create/color-wheel) presenta una Rueda de Colores que se puede ajustar de diversas maneras para obtener una armonía de colores. 
- [Color Hunt](https://colorhunt.co/) ofrece diversas paletas elaboradas. 
- [Color Tool]() Color Tool es excelente para crear, compartir y aplicar paletas de colores a la interfaz de usuario.

[GNome](https://github.com/google-deepmind/materials_discovery)
- [Millions of new materials discovered with deep learning](https://deepmind.google/discover/blog/millions-of-new-materials-discovered-with-deep-learning/)
- [Paper published in Nature](https://www.nature.com/articles/s41586-023-06735-9)
Tokenizer
-[Si tienes curiosidad por ver cómo un texto se traduce en tokens, hay una herramienta de OpenAI llamada tokenizer.](https://platform.openai.com/tokenizer)
<!-- 
> [!WARNING]\
> Estos son articulos generados por la inteligencia artificial de LinkedIn, algunos estan comentados por espertos en sus áreas...

- [¿Cuáles son los softwares y herramientas de simulación más importantes para la Ciencia de los Materiales?](https://www.linkedin.com/advice/0/what-most-important-simulation-software-tools?utm_source=share&utm_medium=member_android&utm_campaign=share_via)
[¿Cómo puedes ampliar tu experiencia en Ciencia de los Materiales con lenguajes de programación avanzados?](https://www.linkedin.com/advice/0/heres-how-you-can-expand-your-expertise-vd2sc?lang=es&originalSubdomain=es#:~:text=A%20continuaci%C3%B3n%2C%20te%20explicamos%20c%C3%B3mo%20puedes%20ampliar%20tu,es%20lo%20que%20hay%20que%20tener%20en%20cuenta)
[¿Cómo puedes ampliar tu experiencia en Ciencia de los Materiales con lenguajes de programación avanzados?](https://www.linkedin.com/advice/0/heres-how-you-can-expand-your-expertise-vd2sc?lang=es&originalSubdomain=es#:~:text=A%20continuaci%C3%B3n%2C%20te%20explicamos%20c%C3%B3mo%20puedes%20ampliar%20tu,es%20lo%20que%20hay%20que%20tener%20en%20cuenta)
-->

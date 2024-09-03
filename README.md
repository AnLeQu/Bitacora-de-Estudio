<!DOCTYPE html>
<html lang="es-cr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

# 📝 Registro de Progreso en Programación

Este repositorio es un registro de mi aprendizaje en diferentes lenguajes de programación y conceptos relacionados. Agradezco a todos los que se han tomado el tiempo de ver mi perfil y este repositorio, y aquellos que puedan ofrecer [comentarios o sugerencias](#contacto) para mejorar durante este proceso.

# Contenido
- [De qué trata esto](#de-qué-trata-esto)
- [Programación](#programación)
  - [HTML-CSS-JavaScript](#html-css-y-javascript)
    - [Conceptos] (#)
    - [Proyectos HTML-CSS-JS](#Project-HTML-CSS-JS)
  - [Git y Github](#git-y-github)
    - [Comandos](#)
<!-- [CIM](#cim) y [TAMA](#--) -->
  - [IA - Data Science](#ia-y-data-science)
  - [Python](#Python)
      - [Conceptos] (#)
      - [Proyectos py](#Project-py)
  - [Excel](#Excel)
    - [Estadística y Probabilidad](#probabilidad-y-estadistica-en-exel-y-google-sheets)
- [Contacto](#Contacto)
- [Fuentes](#fuentes)
  - [Repositorios](#)
  - [Articulos y links](#)

# 🧐 ¿De qué trata esto?
Cómo mencioné anteriormente este repositorio de GitHub es un registro de mi progreso en el aprendizaje de programación y conceptos relacionados. Aquí podrás encontrar proyectos, tareas y apuntes que reflejan el camino recorrido. Mi objetivo es documentar mi proceso durante los 7 meses del curso FPP-ONEG7 y otros estudios.

# Programación <img src="/HTML, CSS y JavaScript/assets/code.png" width="3%"/>

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


<!--
<p align="center">
<img alt="Logo de python" src="/Otros Proyectos/img/Python.png">
</p>
-->

<table>
  <thead>
    <tr>
      <th>Cursos</th>
      <th>Contenidos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://platzi.com/p/AnLeQu/curso/4227-python-fundamentos/diploma/detalle/">Curso de Fundamentos de Python</a></td>
      <td>
        <ul>
          <li><a href="/Python/3-PIP y Entornos Virtuales/main.py">Código del proyecto</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

# Excel <img src="/HTML, CSS y JavaScript/assets/office365.png" width="3%"/>
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

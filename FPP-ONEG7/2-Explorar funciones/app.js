//variables "globales"
let NumeroSecreto = Math.floor(Math.random()*10)+1;

//Cuando se hace referencia a un elemento es a una etiqueta de HTML, como lo son los titulos, los parrafos, etc: h, h1... p, p1...
function AsignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento)
    //variable que llama o selecciona al elemento del html
    elementoHTML.innerHTML = texto
    //Llama al elemento para decirle que irá en el, cvual sera el texto dentro del parrafo o titulo o lo que sea
    return;
}

function IntentoDeUsuario ()
    {
        alert()
        return;
    }
function GenerarNumeroSecreto(params) 
    {
        //let NumeroSecreto = Math.floor(Math.random()*10)+1;
        /*las variables que se pongan en una funcion solo sirve durante ese bloque 
        y no globalmente para todo el codigo escrito, mejor dicho afuera es como 
        ni existiera, se oculta porque se puede llamar la variable global adentro 
        de la funcion, en este caso usamos [return]*/
        return
    }

AsignarTextoElemento ('h1', "Juego del numero secreto!")
AsignarTextoElemento ('p', "Indica un numero de 1 al 10")
function encriptar(texto) {
    const teclado = "qwertyuiopasdfghjklñzxcvbnm";
    const vocales = "aeiou";
    let resultado = "";
    let contadorVocal = 0;

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase();
        
        if (teclado.includes(char)) {
            // Primer caracter: sumar 2 en el teclado
            let indice = teclado.indexOf(char);
            let primerChar = teclado[(indice + 2) % teclado.length];
            resultado += primerChar;

            // Añadir vocal solo si no es la última letra de la palabra
            if (i < texto.length - 1 && teclado.includes(texto[i + 1].toLowerCase())) {
                resultado += vocales[contadorVocal % 5];
                contadorVocal++;
            }

            // Segundo caracter: sumar 4 en el teclado
            let segundoChar = teclado[(indice + 4) % teclado.length];
            resultado += segundoChar;
        } else {
            // Si no es una letra, mantenerlo igual
            resultado += char;
        }
    }

    return resultado;
}
function desencriptar(textoEncriptado) {
    const teclado = "qwertyuiopasdfghjklñzxcvbnm";
    let resultado = "";

    for (let i = 0; i < textoEncriptado.length;) {
        let char = textoEncriptado[i];
        
        if (teclado.includes(char)) {
            let indice = teclado.indexOf(char);
            let charOriginal = teclado[(indice - 2 + teclado.length) % teclado.length];
            resultado += charOriginal;
            
            // Saltar la vocal si existe
            if (i + 1 < textoEncriptado.length && "aeiou".includes(textoEncriptado[i + 1])) {
                i += 2;
            } else {
                i++;
            }
        } else {
            resultado += char;
            i++;
        }
    }

    return resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

    encryptBtn.addEventListener('click', function() {
        const texto = inputText.value;
        const textoEncriptado = encriptar(texto);
        outputText.value = textoEncriptado;
    });

    decryptBtn.addEventListener('click', function() {
        const textoEncriptado = inputText.value;
        const textoDesencriptado = desencriptar(textoEncriptado);
        outputText.value = textoDesencriptado;
    });

    copyBtn.addEventListener('click', function() {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});

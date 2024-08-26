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

            // Vocal
            resultado += vocales[contadorVocal % 5];
            contadorVocal++;

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
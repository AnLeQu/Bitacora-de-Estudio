function encriptarTexto() {
    const inputText = document.getElementById("inputText").value;

    let encriptado = inputText
        .replace(/a/g, "mich")
        .replace(/e/g, "elle")
        .replace(/i/g, "gal")
        .replace(/o/g, "arza")
        .replace(/u/g, "s...");
    
    encriptado = encriptado
        .replace(/A/g, "Mich")
        .replace(/E/g, "Elle")
        .replace(/I/g, "Gal")
        .replace(/O/g, "Arza")
        .replace(/U/g, "S. ");
    
    document.getElementById("outputText").value = encriptado;
}

function desencriptarTexto() {
    const inputText = document.getElementById("inputText").value;

    let desencriptado = inputText
        .replace(/mich/g, "a")
        .replace(/elle/g, "e")
        .replace(/gal/g, "i")
        .replace(/arza/g, "o")
        .replace(/s\.\ /g, "u");
    
    desencriptado = desencriptado
        .replace(/Mich/g, "A")
        .replace(/Elle/g, "E")
        .replace(/Gal/g, "I")
        .replace(/Arza/g, "O")
        .replace(/S\.\ /g, "U");
    
    document.getElementById("outputText").value = desencriptado;
}
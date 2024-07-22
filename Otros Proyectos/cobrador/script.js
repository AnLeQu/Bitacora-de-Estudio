function main(option) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    switch(option) {
        case 1:
            seleccionDibujo();
            break;
        case 2:
            seleccionPintura();
            break;
        case 3:
            content.innerHTML = `
                <p>Has seleccionado Digital.</p>
                <p>+Impresión, más proceso e imágenes digitales a máxima calidad<br>[Calidad sRGB 59,4x42cm 350PPP + video + TIFF + PDF + JPEG + PNG]</p>
                ${printCotizacionMessage()}
            `;
            break;
        case 4:
            content.innerHTML = `
                <p>Has seleccionado Encargo especial.</p>
                <p>Nos gustaría escuchar qué propuestas tienes en mente, te dejamos nuestros datos para que nos contactes. Muchas gracias por tomarnos en cuenta.</p>
                ${printCotizacionMessage()}
            `;
            break;
        default:
            content.innerHTML = '<p>Opción no válida. Regresando a las opciones iniciales.</p>';
    }
}

function seleccionDibujo() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <p>Actualmente solo manejamos el tamaño carta para el dibujo.</p>
        <p>Si está interesado en otras medidas específicas, podemos averiguar sobre ellas sin cotización.</p>
        <p>También puede regresar a las opciones iniciales para ver si alguna de ellas se ajusta mejor a lo que busca.</p>
        <button onclick="main()">Regresar a las opciones iniciales</button>
        <button onclick="calcularDibujoTamañoCarta()">Continuar con el tamaño carta</button>
    `;
}

function calcularDibujoTamañoCarta() {
    const ancho = 21;
    const alto = 29.7;
    const area = ancho * alto;
    const CostoLino = 2000;
    const CostoLapicero = 1000;
    const CostoTrabajo = area * 10;
    const IVA = 0.13;

    const costoMateriales = CostoLino + CostoLapicero + CostoTrabajo;
    const costoTotal = costoMateriales + (costoMateriales * IVA);

    const content = document.getElementById('content');
    content.innerHTML = `
        <p>Costo del dibujo en tamaño carta: ${costoTotal.toFixed(2)} CRC</p>
        ${printCotizacionMessage()}
    `;
}

function seleccionPintura() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <p>Seleccione el tipo de pintura:</p>
        <button onclick="elegirLienzo('Blanco y Negro')">Blanco y Negro - Descripción blanco y negro (Imagen: imagen_bn.jpg)</button>
        <button onclick="elegirLienzo('A Color')">A Color - Descripción a color (Imagen: imagen_color.jpg)</button>
        <button onclick="elegirLienzo('Mastercopy')">Mastercopy - Replicas de obras, pueden llegar a aumentar el precio por su complejidad, el estudio de paleta, estilo de pintura que requiere, e incluso materiales extra. (Imagen: imagen_mastercopy.jpg)</button>
    `;
}

function elegirLienzo(tipoPintura) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <p>Seleccione el tipo de lienzo:</p>
        <button onclick="calcularPrecioTotalPintura('${tipoPintura}', 'Lienzo con bastidor')">Lienzo con bastidor (soporte de madera)</button>
        <button onclick="calcularPrecioTotalPintura('${tipoPintura}', 'Solo tela')">Solo tela (más económico)</button>
    `;
}

function calcularPrecioTotalPintura(tipoPintura, tipoLienzo) {
    const ancho = parseFloat(prompt("Ancho (cm): "));
    const alto = parseFloat(prompt("Alto (cm): "));

    const area = ancho * alto;
    const CostoPintura = 4000;
    const CostoPinceles = 5000;
    const CostoGesso = 11400;
    const CostoBarniz = 9750;
    const CostoTrabajo = area * 10;

    let CostoLienzo;
    if (tipoLienzo === "Solo tela") {
        CostoLienzo = 3000;
    } else {
        CostoLienzo = 10000;
    }

    let numPinturas;
    if (tipoPintura === "Blanco y Negro") {
        numPinturas = 3;
    } else if (tipoPintura === "A Color") {
        numPinturas = 7;
    } else if (tipoPintura === "Mastercopy") {
        numPinturas = 3;
    } else {
        numPinturas = 0;
    }

    let costoTotalPinturas = numPinturas * CostoPintura;

    let categoria;
    if (area <= 616) {
        categoria = "pequeño";
        costoTotalPinturas *= 0.25;
        CostoGesso *= 0.15;
        CostoBarniz *= 0.15;
    } else if (area > 616 && area <= 1200) {
        categoria = "mediano";
        costoTotalPinturas *= 0.50;
        CostoGesso *= 0.30;
        CostoBarniz *= 0.30;
    } else if (area > 1200 && area <= 2400) {
        categoria = "grande";
        costoTotalPinturas *= 1.00;
        CostoGesso *= 0.50;
        CostoBarniz *= 0.50;
    } else {
        categoria = "muy grande";
        costoTotalPinturas = 13000;
        CostoGesso *= 0.75;
        CostoBarniz *= 0.75;
    }

    const costoTotal = costoTotalPinturas + CostoLienzo + CostoGesso + CostoBarniz + CostoPinceles + CostoTrabajo;

    const content = document.getElementById('content');
    content.innerHTML = `
        <p>Categoría de la pintura: ${categoria}</p>
        <p>Costo total: ${costoTotal.toFixed(2)} CRC</p>
        ${printCotizacionMessage()}
    `;
}

function printCotizacionMessage() {
    return `
        <p>¿Cómo solicito una cotización?</p>
        <p>Debes enviarme por mensaje:</p>
        <ul>
            <li>Fotografía o idea de referencia.</li>
            <li>Tamaño en que se desea y cuál prefiere: ilustración / pintura / dibujo.</li>
            <li>Fecha en que se requiere lista [en caso de ser necesario]</li>
            <li>También me gustaría saber si, durante el proceso de creación y al finalizar el proyecto me permites publicarlo en mis redes sociales.</li>
        </ul>
        <p>¿Cómo es el proceso de pago?</p>
        <p>Una vez que se solicita la cotización, procedo a darte mi número para que puedas pagar mediante SINPE la mitad del costo total. De no tener este medio se puede pagar en efectivo, PayPal u otros.</p>
        <p>Deben enviarme el comprobante de pago y procedo a empezar el proyecto.</p>
        <p>( ..)φ Muchas gracias.</p>
    `;
}

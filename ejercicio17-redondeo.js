function redondeo(numero) {
    return Math.round(numero);
}

function solicitarNumeroYRedondeo() {
    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt("Introduce un número decimal:"));
        let numeroRedondeado = redondeo(numero);
        console.log(`El numero redondeado es: ${numeroRedondeado}`);
    }
}

solicitarNumeroYRedondeo();

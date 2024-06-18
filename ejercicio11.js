let numeroIngresado;
while (true) {
    numeroIngresado = prompt("Ingrese cantidad de repeticiones:");
    numeroIngresado = Number(numeroIngresado);

    if (!isNaN(numeroIngresado) && numeroIngresado > 0) {
        break;
    }

    alert("Eso no es un número válido. Por favor, ingresa un número positivo.");
}

let textoIngresado = prompt("Ingrese un texto a repetir").toUpperCase();

for (let index = 0; index < numeroIngresado; index++) {
    console.log(textoIngresado);
}


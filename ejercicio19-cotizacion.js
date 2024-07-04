let opcionesDeConversion = ["", "Peso a Dólar", "Dólar a Peso"];
alert("Seleccione 1 si desea convertir de Peso a Dólar\nSeleccione 2 si desea convertir de Dólar a Peso");

let opcion = parseInt(prompt("Ingrese su opción (1 o 2):"));

if (opcion === 1) {
    let valorPesos = parseFloat(prompt("Ingrese cantidad de Pesos a convertir en Dólares"));
    if (!isNaN(valorPesos) && valorPesos > 0) {
        let tasaDeCambio = parseFloat(prompt("Ingrese la tasa de cambio actual de Pesos a Dólares"));
        if (!isNaN(tasaDeCambio) && tasaDeCambio > 0) {
            let valorDolar = cotizarDolar(valorPesos, tasaDeCambio);
            alert(valorPesos + " Pesos equivalen a " + valorDolar.toFixed(2) + " Dólares");
        } else {
            alert("Tasa de cambio inválida.");
        }
    } else {
        alert("Cantidad de Pesos inválida.");
    }
} else if (opcion === 2) {
    let valorDolares = parseFloat(prompt("Ingrese cantidad de Dólares a convertir en Pesos"));
    if (!isNaN(valorDolares) && valorDolares > 0) {
        let tasaDeCambio = parseFloat(prompt("Ingrese la tasa de cambio actual de Dólares a Pesos"));
        if (!isNaN(tasaDeCambio) && tasaDeCambio > 0) {
            let valorPesos = cotizarPesos(valorDolares, tasaDeCambio);
            alert(valorDolares + " Dólares equivalen a " + valorPesos.toFixed(2) + " Pesos");
        } else {
            alert("Tasa de cambio inválida.");
        }
    } else {
        alert("Cantidad de Dólares inválida.");
    }
} else {
    alert("Opción inválida. Por favor seleccione 1 o 2.");
}

function cotizarDolar(pesos, tasaDeCambio) {
    return pesos / tasaDeCambio;
}

function cotizarPesos(dolares, tasaDeCambio) {
    return dolares * tasaDeCambio;
}
function validacion(cadena) {
    return cadena !== "";
}

function solicitarCadena () {
    let cadena;

while (true) {
    cadena = prompt("Ingrese una cadena a validar (o ingrese ESC para finaliza");
    if (cadena === "ESC") {
    break;
}

if (validacion (cadena)){
    console.log("cadena valida: ", cadena);
} else {
    console.log ("Cadena vacía:", cadena);

}

}
}
solicitarCadena();

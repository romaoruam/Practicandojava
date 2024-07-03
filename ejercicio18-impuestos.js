function impuesto(precio, porcentaje) {
    return precio + (precio * (porcentaje / 100));
}

for (let i = 0; i < 5; i++) {
    let precio = parseFloat(prompt("Ingrese el precio: "));
    let porcentaje = parseFloat(prompt("Ingrese el porcentaje: "));
    
    let resultado = impuesto(precio, porcentaje);
    
    console.log(`Resultado ${i + 1}: ${resultado}`);
}

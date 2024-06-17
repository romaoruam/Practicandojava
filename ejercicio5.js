let precio1 = parseFloat(prompt ("Ingrese aqui el monto a aplicar descuento " ));


function aplicarDescuento (precio) {
const descuento = precio * 0.1;
const precioConDescuento = precio - descuento;
return precioConDescuento;
}

const precioConDescuento = aplicarDescuento(precio1);
alert ("El precio con Descuento es de " + precioConDescuento);
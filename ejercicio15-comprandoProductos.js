let listaProductos = ["", "Tomate", "Papa", "Carne", "Pollo"];
let salida = [];

while (true) {
  let numeroIngresado = prompt("Ingrese un número del 1 al 4 para seleccionar un producto, o escriba 'ESC' para salir.");

  if (numeroIngresado === "ESC") {
    break; // Salir del bucle
  }

  numeroIngresado = parseInt(numeroIngresado); // Convertir a número entero

  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 4) {
    alert("Ingrese un número del 1 al 4 válido.");
  } else {
    let productoSeleccionado = listaProductos[numeroIngresado];
    salida.push(productoSeleccionado);
    alert(`Ha seleccionado: ${productoSeleccionado}`);
  }
}

if (salida.length > 0) {
  alert(`Productos seleccionados: ${salida.join(", ")}`);
} else {
  alert("No se seleccionaron productos.");
}


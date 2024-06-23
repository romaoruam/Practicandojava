let PresupuestoIngresado = prompt("Ingrese presupuesto");

while (true) {
    PresupuestoIngresado = prompt("Ingrese presupuesto (o presione Cancelar para salir):");

    // Si el usuario presiona Cancelar o ingresa una cadena vacía, se rompe el bucle
    if (PresupuestoIngresado === null || PresupuestoIngresado === "") {
        break;
    }

    // Convertir el valor ingresado a un número
    PresupuestoIngresado = Number(PresupuestoIngresado);

    if (isNaN(PresupuestoIngresado) || PresupuestoIngresado < 0) {
        alert("Presupuesto inválido");
    } else if (PresupuestoIngresado <= 1000) {
        alert("Presupuesto bajo");
    } else if (PresupuestoIngresado <= 3000) {
        alert("Presupuesto medio");
    } else {
        alert("Presupuesto alto");
    }
}
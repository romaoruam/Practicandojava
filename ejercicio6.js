let nombreRegistrado = "ROMA";
let nombre;

do { 
    nombre = prompt("Ingrese su nombre: ").toUpperCase();  // Convertir el nombre ingresado a mayúsculas
    if (nombre === nombreRegistrado) {
        alert("Fui Yo cara de verga");
        
    } else {
        alert("No fui yo, CHUPALA");
    }
} while (nombre !== nombreRegistrado);

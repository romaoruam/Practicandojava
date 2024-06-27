// Crear un array vacío para almacenar los nombres
let listaNombres = [];

// Bucle para solicitar los nombres hasta que se ingrese "Voldemort"
while (true) {
    let nombreIngresado = prompt(`Ingrese un nombre (o "Voldemort" para terminar):`);
    
    if (nombreIngresado === "Voldemort") {
        break;
    }
    
    listaNombres.push(nombreIngresado);
}

// Unir todos los nombres en una sola cadena, separada por comas y mostrar en una alerta
alert("Nombres ingresados:\n" + listaNombres.join("\n"));


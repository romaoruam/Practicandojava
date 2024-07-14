class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    // Método para mostrar la información de la tienda
    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Dirección: ${this.direccion}, Propietario: ${this.propietario}, Rubro: ${this.rubro}`;
    }
}

// Función para registrar cinco tiendas
function registrarTiendas() {
    let tiendas = [];

    for (let i = 0; i < 5; i++) {
        let nombre = prompt(`Ingrese el nombre de la tienda ${i + 1}:`);
        let direccion = prompt(`Ingrese la dirección de la tienda ${i + 1}:`);
        let propietario = prompt(`Ingrese el propietario de la tienda ${i + 1}:`);
        let rubro = prompt(`Ingrese el rubro de la tienda ${i + 1}:`);

        // Crear una nueva instancia de Tienda con los datos ingresados
        let tienda = new Tienda(nombre, direccion, propietario, rubro);
        tiendas.push(tienda);
    }

    // Generar la salida compuesta por la información de las tiendas
    let salida = "Información de las tiendas registradas:\n";
    tiendas.forEach((tienda, index) => {
        salida += `Tienda ${index + 1}: ${tienda.mostrarInformacion()}\n`;
    });

    // Mostrar la salida
    console.log(salida);
}

// Llamar a la función para registrar las tiendas
registrarTiendas();

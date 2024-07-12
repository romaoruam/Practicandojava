

class Tienda {
    constructor (nombre, direccion, propietario, rubro){
this.nombre = nombre;
this.direccion = direccion;
this.propietario = propietario; 
this.rubro = rubro;
    }

}

let TiendaPendorcha = new Tienda (
    "Pendorcha", "Av gral chamizzo 1278", "Roque Narvaja", "Bombachas usadas"
);

let TiendaJinete = new Tienda (
    "Jinete", "Av los corrales 1234", "Tornado", "Boxers estirados"
);

let TiendaBotija= new Tienda (
    "Botija", "Olimpo 666", "Nando Cuevas", "Cosas robadas"
);

console.log(`Tienda: ${TiendaPendorcha.nombre}\nDirección: ${TiendaPendorcha.direccion}\nPropietario: ${TiendaPendorcha.propietario}\nRubro: ${TiendaPendorcha.rubro}`);


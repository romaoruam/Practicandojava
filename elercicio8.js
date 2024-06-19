let mensaje = "Buen día, ingrese una de las siguientes opciones";
let opcionIngresada = prompt(mensaje + "\n1: Homero\n2: Marge\n3: Bart\n4: Lisa");

if (opcionIngresada == 1) {
    alert("Elegiste a Homero");
} else if (opcionIngresada == 2) {
    alert("Elegiste a Marge");
} else if (opcionIngresada == 3) {
    alert("Elegiste a Bart");
} else if (opcionIngresada == 4) {
    alert("Elegiste a Lisa");
} else {
    alert("Opción no válida, por favor ingrese un número entre 1 y 4");
}
// Crear un array vacío para almacenar los nombres de los alumnos
let listaAlumnos = [];

// Bucle para solicitar los nombres de 10 alumnos
for (let i = 0; i < 10; i++) {
    let nombreAlumno = prompt(`Ingrese el nombre del alumno ${i + 1}:`);
    listaAlumnos.push(nombreAlumno);
}

// Unir todos los nombres en una sola cadena, separada por comas
let mensaje = "Listado de alumnos registrados:\n" + listaAlumnos.join("\n");

// Mostrar el listado de alumnos en una alerta
alert(mensaje);

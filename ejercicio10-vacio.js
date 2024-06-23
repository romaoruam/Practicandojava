let producto1 = prompt("Ingrese un producto");
let producto2 = prompt("Ingrese otro producto");
let producto3 = prompt("Ingrese otro producto");
let producto4 = prompt("Ingrese otro producto");

if (producto1 === "" || producto2 === "" || producto3 === "" || producto4 === "") {
    alert("Error: Es necesario ingresar todos los productos.");
} else {
    let combo = "Los productos seleccionados son: " + producto1 + " " + producto2 + " " + producto3 + " " + producto4;
    alert(combo);
}

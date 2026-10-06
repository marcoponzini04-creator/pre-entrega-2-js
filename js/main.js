const nombre = prompt("¿Cual es tu nombre?");
console.log(nombre);

const precioGeneral = 10000;
const precioPreferencial = 15000;
const precioVIP = 25000;

let opcion = "";
let total = 0;
let cantidadEntradas = 0;

while (opcion !== "4") {
    opcion = prompt(
    "Elegi una opcion:\n1 - Entrada General: $10.000\n2 - Entrada Preferencial: $15.000\n3 - Entrada VIP: $25.000\n4 - Salir"
)

console.log(opcion);

if (opcion === "1") {
    console.log("Elegiste Entrada General");
    total = total + precioGeneral;
    cantidadEntradas = cantidadEntradas +1;
    console.log("Total acumulado: $" + total);
} else if (opcion === "2") {
    console.log("Elegiste Entrada Preferencial");
    total = total + precioPreferencial;
    cantidadEntradas = cantidadEntradas +1;
    console.log("Total acumulado: $" + total);
} else if (opcion === "3") {
    console.log("Elegiste Entrada VIP");
    total = total + precioVIP;
    cantidadEntradas = cantidadEntradas +1;
    console.log("Total acumulado: $" + total);
} else if (opcion === "4") {
    console.log("Saliendo...");
    if (cantidadEntradas > 0) {

        console.log("Gracias por tu compra, " + nombre);
    console.log("Cantidad de entradas compradas: " + cantidadEntradas);
    console.log("Total de la compra: $" + total);

    } else {
        console.log("No realizaste ninguna compra.");
    }
    
} else {
    console.log("Opcion invalida");
}

}

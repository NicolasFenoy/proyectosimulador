let MiNombre = {
    nombre: "Nicolás",
    altura: 1.68,
}
alert("Bienvenido al Simulador Interactivo de " + MiNombre.nombre + " . " + " Este es un simulador interactivo en el que usted le regalará a su hermano un regalo por su cumpleaños. Presione aceptar para continuar.");



let nombreMenor = prompt("Como se llama tu hermano, proporcionale un nombre a tu hermano, entre estos 5 nombres = MARTIN, JUAN, ALEXIS, ALEJO, LEO").toUpperCase();
while (nombreMenor !== "MARTIN" && nombreMenor !== "JUAN" && nombreMenor !== "ALEXIS" && nombreMenor !== "ALEJO" && nombreMenor !== "LEO") {
    nombreMenor = prompt("Datos incorrectos, reingrese los datos nuevamente por favor (martin, juan, alexis, alejo o leo)").toUpperCase();
}



let ubicacion = prompt(" El nombre de tu hermano es " + nombreMenor + " . " + " En donde se encuentra " + nombreMenor + " . " + " En la cocina, habitacion, patio " + " ? ").toUpperCase();
function dondeEsta() {
    while (ubicacion !== "COCINA" && ubicacion !== "HABITACION" && ubicacion !== "PATIO") {
        ubicacion = prompt("Datos incorrectos, reingrese los datos nuevamente por favor (cocina, habitacion o patio)").toUpperCase();
    }
}
dondeEsta();

let cocina = {
    horno: "horno",
    microondas: "microondas",
    tenedores: "tenedores",
    cuchillos: "cuchillos",
    cucharas: "cuchara",
}



let  habitacion = {
    placar: "placar",
    mesaDeNoche: "mesa de noche",
    cama: {
        nombre: "cama",
        colchon: "colchon",
        sabana: "sabana",
        almohadas: "almohadas",
    }
}



let patio = {
    pasto: "pasto",
    arbol: "arbol",
    plantas: "plantas",
    pileta: "pileta",
    pelota: {
        nombre: "pelota",
        color: "blanca y negra",
        antiguedad: "nueva",
    }
}
alert ("En la cocina de la casa se encuentra un " + cocina.horno + " un " + cocina.microondas + " unos " + cocina.tenedores + " unos " + cocina.cuchillos + " En la habitacion se encuentra una " + habitacion.cama.nombre + " un " + habitacion.placar + " y una " + habitacion.mesaDeNoche + " En el patio se encuentra " + patio.pasto + " un " + patio.arbol + " varias y variadas " + patio.plantas + " y una " + patio.pileta);

if (ubicacion === "COCINA") {
    alert("Encuentras a " + nombreMenor + " que estaba en la cocina, " + " usando los " + cocina.tenedores + " y " + cocina.cuchillos + " para comer. " + " Como iba vestido " + nombreMenor + " ? " );
} else if (ubicacion === "HABITACION") {
    alert("Encuentras a" + nombreMenor + " que estaba en su habitacion " + " descansando en su " + habitacion.cama.nombre + " . " + " Como iba vestido " + nombreMenor + " ? " );
} else if (ubicacion === "PATIO") {
    alert("Encuentras a " + nombreMenor + " que estaba en el patio " + " jugando con su " + patio.pelota.nombre + "  " + patio.pelota.color + " Como iba vestido " + nombreMenor + " ? " );
} else {
    alert("Encuentras a " + nombreMenor + " en otra pieza de la casa " + " Como iba vestido " + nombreMenor + " ? " );
}




const vestidoHermano = { id: 1, nombre: "una remera", color: "roja", marca: "de Nike" };
const conjuntoHermano = [vestidoHermano, { id: 2, nombre: "un pantalon", color: "azul", marca: "de Adidas" }];
conjuntoHermano.push({ id: 3, nombre: "unos botines", color: "turquesa", marca: "de Puma" });
for (let i = 0; i < conjuntoHermano.length; i += 1) {
    alert("Tu hermano " + "  " + nombreMenor + "esta vestido con = " + conjuntoHermano[i].nombre + "  " + conjuntoHermano[i].color + "  " + conjuntoHermano[i].marca);
}



let Uno = parseInt (prompt(" Ingrese el número de juguetes que quiere tu hermano, en un rango de 1 a 12 juguetes  "));
function JugueteHermano() {
    while (Uno != 1 && Uno != 2 && Uno != 3 && Uno != 4 &&  Uno != 5 && Uno != 6 && Uno != 7 && Uno != 8 && Uno != 9 && Uno != 10 && Uno != 11 && Uno != 12) {
        Uno = prompt("Datos incorrectos, reingrese los datos nuevamente por favor (un número del 1 al 12)");
    }
    alert(" El número de juguetes que quiere " + nombreMenor + " es/son " + Uno);
}
JugueteHermano();



let auto = {
    color: "rojo",
    marca: "Ford",
    antiguedad: "nuevo",
    tiempoDeLlegada: "15 minutos",
    medidas: {
        largo: 4.3,
        ancho: 1.8,
        alto: 1.5
    }
}
let ComoVamos = prompt ("Tu auto es un automovil de marca " + auto.marca + " de color " + auto.color + " " + auto.antiguedad + " cuyas medidas son " + auto.medidas.largo + "metros de largo" + auto.medidas.ancho + " metros de ancho y " + auto.medidas.alto + "metros de alto. " + " Escribe auto, coche, vehiculo, automovil para ir a la tienda ").toUpperCase();
while (ComoVamos !== "AUTO" && ComoVamos !== "AUTOMOVIL" && ComoVamos !== "COCHE" && ComoVamos !== "VEHICULO" && ComoVamos !== "VEHÍCULO" ) {
    ComoVamos = prompt ("Datos incorrectos, reingrese los datos nuevamente por favor, escribe auto, automovil, coche o vehiculo").toUpperCase();
}



let Dinero = Number(parseInt (prompt("Vas a comprar los juguetes a una tienda " + " Tu tiempo de llegada es de " + auto.tiempoDeLlegada + " . " + " Elíge la cantidad de dinero que posees, entre 500 y 20000 pesos ")));
while (Dinero < 500 && Dinero > 20000) {
    Dinero = prompt("Datos incorrectos, reingrese los datos nuevamente por favor (un número del 500 al 20000)");
}



let elegir = Number(parseInt(prompt("Tienes " + Dinero + " pesos argentinos" + "Los precios disponibles de los juguetes de la primera tienda son entre 100 pesos y 1000 pesos, elíge los juguetes que quieras")));
while (elegir < 100 && elegir > 1000) {
    elegir = prompt("Datos incorrectos, reingrese los datos nuevamente por favor (un número del 100 al 1000)");
}

function principal (funcionSecundaria) {
    return funcionSecundaria (Uno, elegir);
}
let multiplicacion = principal (function (Uno, elegir){
    return Uno * elegir;
});
alert (multiplicacion);

function operacionJuguetes() {
    alert(multiplicacion + " pesos ");
}
alert(" Ves el precio total de lo que te saldría comprar el/los juguete/s = ");
operacionJuguetes();


function sobraOnoSobra (NmF) {
    return NmF (Dinero, multiplicacion);
}
let resta = sobraOnoSobra (function (Dinero, multiplicacion) {
    return Dinero - multiplicacion
});
alert ("Te quedan " + resta + " pesos argentinos ");

if (resta < 0) {
    alert("Le debes dinero a el vendedor" + resta + " pesos ");
}


alert(" Si quieres volver a utilizar el simulador interactivo, apreta la equis que esta en la esquina superior izquieda, al apretarla pasará a ser una flecha circular, volvela a apretar y el simulador comenzara de nuevo. ");


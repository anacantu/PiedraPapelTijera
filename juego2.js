function getRandomInt (min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var usuario = prompt ("Escoge 1 para piedra, 2 para papel, y 3 para tijera")

var computadora = getRandomInt(0,2);

if (computadora == usuario) {
	console.log("empate");
}

if (usuario == 0 && computadora == 1 ) {
	console.log("perdiste");
}
if (usuario == 0 && computadora == 2 ) {
	console.log("ganaste");
}
if (usuario == 1 && computadora == 0 ) {
	console.log("ganaste");
}
if (usuario == 1 && computadora == 2 ) {
	console.log("perdiste");
}
if (usuario == 2 && computadora == 0 ) {
	console.log("perdiste");
}
if (usuario == 2 && computadora == 1 ) {
	console.log("ganaste");
}




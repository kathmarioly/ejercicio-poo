function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color)
	}

	this.mostrarAmistad = function(){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
const Charmander = new Pokemon("Charmander", "rojo", 100)
const Fennekin = new Pokemon("Fennekin", "amarillo con naranjo", 100)
const Bulbasaur = new Pokemon("Bulbasaur" "celeste", 100)

Pikachu.atacar(Charmander)
document.write("La cantidad de vidas de tu Charmander es de: " + Charmander.vida +"<br>" + Pikachu.mostrarPokemon());

function pelea(){
	var boton = document.getElementById("boton").value;
	var opcion1 = document.getElementById("opcion1").value;
	var opcion2 = document.getElementById("opcion2").value;
	var opcion3 = document.getElementById("opcion3").value;
	var opcion4 = document.getElementById("opcion4").value;

if (opcion3 == opcion4) {
	alert("Los pokemon no pueden pelear contra si mismos")
}else{

var poder = prompt("Ingresa tu nivel de ataque");
var combate1 = new Pokemon(opcion3, + color, + poder);
var combate2 = new Pokemon(opcion4, + color, + poderDeAtaque);
	combate1.atacar(combate2);
}

boton.innerHTML = "<br" + combate1.nombre + " atacó a" + combate2.nombre + " y " + combate2.nombre + " su vida es de: " + combate2.vida;

}



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

Pikachu.atacar(Charmander)
document.write("La cantidad de vidas de tu Charmander es de: " + Charmander.vida +"<br>" + Pikachu.mostrarPokemon());

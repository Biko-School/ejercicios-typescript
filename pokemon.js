class Pokemon {
    constructor(nombre, numero, ataques) {
        this.nombre = nombre
        this.numero = numero
        this.ataques = ataques
    }

    ataque(numero) {
        if (this.ataques.length >= numero && 0 < numero) {
            console.log(this.nombre + ' utiliza el ataque ' + this.ataques[numero - 1]);
        } else {
            console.log("Inserte un valor de ataque valido (valor entre 1 y " + this.ataques.length + ")")
        }
    }
}

var pokemon1 = new Pokemon("Pikachu", 25, ["placaje", "rayo", "gruñido"]);
pokemon1.ataque(2);

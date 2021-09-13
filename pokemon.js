function Pokemon(nombre, numero, ataques) {
    if (typeof(nombre) == "string") {
        this.nombre = nombre;
    } else {
        console.log("Inserte un valor valido nombre. EJEMPLO: Pikachu, Charmander, ...")
    }

    if (Number.isInteger(numero)) {
        this.numero = numero;
    } else {
        console.log("Inserte un valor valido para numero. EJEMPLO: 1, 2, 3, ...")
    }

    if (Array.isArray(ataques)) {
        this.ataques = ataques;
    } else {
        console.log("Inserte un valor valido para ataques. EJEMPLO: ['placaje', 'rayo', 'gruñido']")
    }
    this.ataques = ataques;
}

Pokemon.prototype.ataque = function(numero) {
    if (this.ataques.length >= numero && 0 < numero) {
        console.log (this.nombre + ' utiliza el ataque ' + this.ataques[numero-1]);
    } else {
        console.log("Inserte un valor de ataque valido (valor entre 1 y " + this.ataques.length + ")")
    }
};

var pokemon1 = new Pokemon("Pikachu", 25, ["placaje", "rayo", "gruñido"]);

pokemon1.ataque(2);

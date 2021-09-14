/*
    Coalescencia nula u Nullish coalescing (??)

    Es un operador lógico que devuelve el valor del primer argumento cuando este no es null ni undefined.
    En caso contrario, devuelve el segundo.

   Puedes saber más en: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

    --- Resultado esperado por consola
    Alicia tiene un perro que se llama Toby
    Juan tiene una cobaya que se llama Brownie
*/

interface Personaje {
  name: string;
  animal: Animal;
}

interface Animal {
  type: string;
  name?: string;
}

const personaje: Personaje = {
  name: "Alicia",
  animal: {
    type: "Perro",
  },
};

const personaje2: Personaje = {
  name: "Juan",
  animal: {
    name: "Brownie",
    type: "Cobaya",
  },
};

// Modifica el código bajo esta línea
const getName = (animal: Animal) => {};
// Modifica el código sobre esta línea

console.log(
  `${personaje.name} tiene un ${personaje.animal.type} que se llama ${getName(
    personaje.animal
  )}`
);
console.log(
  `${personaje2.name} tiene una ${
    personaje2.animal.type
  } que se llama ${getName(personaje2.animal)}`
);

export {}; //https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

/*
    Encadenamiento opcional u optional chaining (?.)
    El operador ?. funciona de manera similar a el operador de encadenamiento .,
    excepto que en lugar de causar un error si una referencia es casi-nula (null o undefined),
    la expresión hace una evaluación de circuito corto con un valor de retorno de undefined.

    Puedes saber más en: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining

    --- Resultado esperado por consola
    Alicia tiene perro que se llama undefined
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

// Modifica el código bajo esta línea
const getName = (animal?: Animal) => animal.name;

// Modifica el código sobre esta línea

console.log(
  `${personaje.name} tiene un ${personaje.animal.type} que se llama ${getName(
    personaje.animal
  )}`
);

export {}; //https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

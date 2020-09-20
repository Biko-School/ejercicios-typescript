/* 
    CLASES QUE IMPLEMENTAN INTERFACES
    Hemos aprendido qué son las interfaces y qué son las clases. Pues bien,
    podemos hacer que una clase implemente una interfaz. Ya que estamos, échale
    un ojo a cómo tipamos esa función, puede interesarte

    --- Resultado esperado por consola
    Mi gato Periko hace miau, mi perro Felipe hace guau
*/

interface Animal {
  name: string;
  getNoise: () => string; // Sí, aquí estamos tipando una función ;)
}

// Modifica el código bajo esta línea

class Cat implements Animal {
  constructor(private name) {}

  getNoise() {
    return 4;
  }
}

class Dog implements Animal {}

// Modifica el código sobre esta línea

const gato = new Cat('Periko');
const perro = new Dog('Felipe');

console.log(
  `Mi gato ${gato.name} hace ${gato.getNoise()}, mi perro ${
    perro.name
  } hace ${perro.getNoise()}`
);

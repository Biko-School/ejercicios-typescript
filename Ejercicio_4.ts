/* 
    DEFINIENDO CLASES
    Ya vimos que ES6 nos permite crear clases. Typescript también lo hace pero,
    además, podemos declarar miembros privados o públicos. Igual que en los
    mejores lenguajes!

    Consulta la documentación: https://www.typescriptlang.org/docs/handbook/classes.html

    --- Resultado esperado en consola
    Hola, Maialen!
*/

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const maialen = new Person('Maialen');

// Modifica el código bajo esta línea

console.log(`Hola, ${maialen.name}!`);

// Modifica el código sobre esta línea

/* 
    BONUS: También podíamos haber declarado esa clase de la siguiente manera,
    mira tú qué bien :)
*/
class PersonVersionPro {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }
}

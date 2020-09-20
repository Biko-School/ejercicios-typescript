/* 
    DEFINIENDO INTERFACES
    También podemos definir una interfaz en Typescript. Te diría lo que hace
    pero mejor se lo dejaremos a la documentación oficial:
    https://www.typescriptlang.org/docs/handbook/interfaces.html

    ¿Puedes hacer que este código pinte lo que esperamos?

    --- Resultado esperado en consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

// Modifica el código bajo esta línea

interface Personajes {
  elBueno: string;
  elFeo: string;
}

const personajes: Personajes = {
  elBueno: 'Rubio',
};

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${personajes.elBueno}, al malo ${personajes.elMalo} y, al feo, ${personajes.elFeo}`
);

/* 
    DEFINIENDO ENUMERADOS
    Typescript nos permite crear enumerados, que podríamos definir como un
    listado de constantes. Veamos un ejemplo

    --- Resultado esperado por consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

enum Personaje {
  Bueno,
  Feo,
  Malo,
}

// Modifica el código bajo esta línea

function getName(personaje: Personaje): string {
  if (personaje === Personaje.Bueno) {
    return 'Rubio';
  }
}

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${getName(Personaje.Bueno)}, al malo ${getName(
    Personaje.Malo
  )} y, al feo, ${getName(Personaje.Feo)}`
);

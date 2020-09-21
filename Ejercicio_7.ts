/* 
    STRINGS EN ENUMERADOS
    Los enumerados también pueden contener strings. A ver si sabes cómo ;)

    Tienes más información sobre el enum en: https://www.typescriptlang.org/docs/handbook/enums.html

    --- Resultado esperado en consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

// Modifica el código bajo esta línea

enum PersonajeStrings {
  Bueno,
  Feo,
  Malo,
}

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${PersonajeStrings.Bueno}, al malo ${PersonajeStrings.Malo} y, al feo, ${PersonajeStrings.Feo}`
);

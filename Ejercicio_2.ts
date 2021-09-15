/* 
    ACEPTANDO VARIOS TIPOS EN UNA VARIABLE
    Podemos aceptar varios tipos en una variable, ¿sabrías cómo?
    Una pista: Typescript union types. Google es tu amigo ;)

    Más información: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

    --- Resultado esperado por consola
    5
    a text
*/

// Modifica el código a partir de esta línea

let aTextOrNumber: number = 5;

// Modifica el código sobre esta línea

console.log(aTextOrNumber);
aTextOrNumber = 'a text';
console.log(aTextOrNumber);

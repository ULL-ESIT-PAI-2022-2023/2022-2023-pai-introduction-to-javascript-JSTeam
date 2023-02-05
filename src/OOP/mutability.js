/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author       Enrique Alvarez Mesa
 * @author       Sergio de la Barrera Garcia
 * @since 03.02.2023
 */

'use strict'

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10
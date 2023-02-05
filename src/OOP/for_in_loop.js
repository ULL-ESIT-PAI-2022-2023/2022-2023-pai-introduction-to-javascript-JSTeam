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

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  console.log(key);  // name, age, isAdmin
  console.log(user[key]); // John, 30, true
}
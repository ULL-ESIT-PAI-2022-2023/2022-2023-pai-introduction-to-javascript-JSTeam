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
  name: 'Luis',
  age: 20,
  'Driving license': false
};
console.log(user['Driving license']); // → false
console.log(user.car); // → undefined
console.log(user.luis); // → Luis
user.car = false;
console.log(user.car); // → false
delete user.age;
console.log(user.age); // → undefined
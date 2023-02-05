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

// strict mode
"use strict"


// spread operator (array)
let firstHalf = [ 'one', 'two'];
let secondHalf = ['three', 'four'];

let complete = [...firstHalf, ...secondHalf]

console.log(complete) // [ 'one', 'two', 'three', 'four' ]


// spread operator (object)
let hero = {
  name: 'Xena - Warrior Princess',
  realName: 'Lucy Lawless'
}


let heroWithSword = {
 ...hero,
 weapon: 'sword'
}

console.log(heroWithSword)  
/* {
    name: 'Xena - Warrior Princess',
    realName: 'Lucy Lawless',
    weapon: 'sword'
   } */


// rest parameter 
let myFun = (a, b, ...manyMoreArgs) => {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]  


// string interpolation
class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
 
 showInformation() {
    return `Full description \n: 
    name: ${this.name}
    description ${this.description}
    `;
  }
};


// class atributtes examples
let createCoord = (x, y) => {
  return {
    x: x,
    y: y
  }
}

let createCoord = (x, y) => {
  return {
    x,
    y
  }
}


//  method shorthand examples
let math = {
  add: function(a,b) { return a + b; },
  sub: function(a,b) { return a - b; }, 
  multiply: function(a,b) { return a * b; }
}

let mathm = {
  add(a,b) { return a + b; },
  sub(a,b) { return a - b; },
  multiply(a,b) { return a * b; }
}


// array functions examples
let array = [{ id: 1, checked: true }, { id: 2 }];

array.find(item => item.id === 2)       // { id: 2 }
array.findIndex(item => item.id === 2)  // 1
array.some(item => item.checked)        // true

let numberArray = [1,2,3,4];

numberArray.includes(2) // true


// at examples
['this', 'presentation', 'is', 'awesome'].at(-1) // awesome

let words = ['this', 'presentation', 'is', 'awesome'];
words[words.length - 1] // awesome


// flat examples
[1, 2, 3, [4, 5]].flat()          // [1, 2, 3, 4, 5]
[1, 2, 3, [4, 5,[6, 7]]].flat(2)  // [1, 2, 3, 4, 5, 6, 7]


// for of examples
let list = [4, 5, 6];

for (let i in list) {
   console.log(i) // "0", "1", "2",
}

for (let i of list) {
   console.log(i) // "4", "5", "6"
}


// arrow functions examples
let printArray = function(arr) {
  // do something
}

let printArray = (arr) => {
  // do something
}

let add = (a, b) => a + b

let add = function(a, b) { return a + b }


let object1 = {value: 10}; 
let object2 = object1; 
let object3 = {value: 10};
console.log(object1 == object2);
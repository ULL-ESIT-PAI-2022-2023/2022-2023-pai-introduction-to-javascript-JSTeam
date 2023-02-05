# ¿Qué tipo de lenguaje es javascript?
Se trata de un lenguaje dinámico y de tipado débil. Esto quiere decir, como deberíais saber de LPP, que podemos cambiar el tipo de una variable en tiempo de ejecución:

```js
let example = 'Hello World'

example = 2

console.log(typeof example) // number

```

Y es tipado débil ya que no es necesario especificar el tipo de una variable:

```js
let num = 2

console.log(typeof num) // number
```

# Valores, tipos y operadores(if-else,...)
## Tipos primitivos:
### String
Es el que conocemos de cualquier otro lenguaje
```js
console.log(typeof "String") // string
```
### Boolean
```js
console.log(typeof true) // boolean
```
### Number (Infinity, NaN, …)
```js
console.log(typeof 1) // number
```
### Bigint
```js
console.log(typeof 2n) // bigInt
```
### Symbol
```js
console.log(typeof Symbol()) // symbol
```
### Undefined
```js
console.log(typeof undefined) // undefined
```
### Bug Javascript (null)
```js
console.log(typeof null) // object*
```
## Objetos:
- { }
  ```js
  console.log(typeof {}) // object
  ```
- [ ] 
  ```js
  console.log(typeof []) // object
  ```

- Sets
  ```js
    let set = new Set(["sumit","anil","amit"])
    console.log(typeof set)           // object
  ```

- Function (deriva del constructor de objeto)
  ```js
    let myFunction = function(p1, p2) {
      return p1 * p2;
    }
    console.log(typeof myFunction)   // function
  ```

## Diferencias entre ambos (primitivos por valor y objetos por referencias)
Los primitivos se comparan por valor, en cambio los objetos se comparan por 
referencia(por dirección de memoria). De manera que al comparar dos objetos con
el mismo contenido, como vemos en el ejemplo, no son iguales ya que apuntan a
diferentes direcciones de memoria.

```js
console.log("1" === "1") // true

console.log({a: 1, b: 2} === {a: 1, b: 2}) // false
```

En el caso particular de null, se comporta como un primitivo pero al hacer el 
typeof devuelve object.

```js
console.log(null  === null) // true
```

Los primitivos son inmutables, es decir, no puedes cambiar su valor, a diferencia 
de los objetos: 

```js
true // va a ser true siempre

1 // va a ser siempre 1
```

## Operadores binarios
- Matemáticos:

  ```
  Suma (+)
  Resta (-)
  Multiplicación (*)
  División (/)
  Módulo (%)```

- Lógicos:

  ```js 
  && // AND
  || // OR
  ```

- Comparación:

  ```js
  ==   // Igual
  !=   // No igual
  ===  // Estrictamente igual  
  !==  // No estrictamente igual
  >    // Mayor que
  <    // Menor que
  >=   // Mayor o igual que
  <=   // Menor o igual que
  ```
- Asignación:

  ```js
  =   // Asignación simple
  +=  // Suma y asignación
  -=  // Resta y asignación
  *=  // Multiplicación y asignación
  /=  // División y asignación
  %=  // Módulo y asignación
  ```
## Operador ternario

```js
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```

## Anidados
```js
let getTime = (seconds) => {
  return (
    seconds <= 60     ?  'seconds' :
    seconds <= 3600   ?  'minutes' :
    seconds <= 86400  ?  'hours'   :
                         'days'
  )
}

console.log(getTime(90))      // minutes
console.log(getTime(86300))   // hours
console.log(getTime(234894))  // days
```

## Conversión de tipos
When an operator is applied to the "wrong" value type, JavaScript will silently cast that value to the type it needs, using a set of rules that are often not what you want or expect. This is called *type coercion*

Javascript is a lax programming language and will accept almost any program you give it, allowing you to do weird things like:

```js
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```

When `null` or `undefined` appears on either side of the `==` operator, it returns true only if both sides are one of `null` or `undefined`.

```js
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

That behavior is often helpful. When you want to test whether a value has a real value instead of `null` or `undefined`, you can compare it to `null` with the `==` (or `!=`) operator.

If you do not want to use this automatic type conversion, you must use the operators:
- ===
- !==

```It is recommended to use it defensively, to prevent type conversion```
## Short circuit of logical operators
There are certain behaviors with the logical operators && and || when its operands are not boolean, it will apply automatic type conversion.
- ||: It will return the operand on the left if it can be converted to true, otherwise, it will return the operand on the right.
```js
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```
- &&: Returns the left operand if it can be cast to false, otherwise it returns the right operand.

Values that can NOT be converted to booleans and therefore return false:- "" → Empty string
- 0
- NaN
```js
console.log(0 || -1)
// -1

console.log("" || "!?")
// "!?"
---
console.log(0 && -1)
// 0

console.log("" && "!?")
// ""
```
# Functions
## Function declation
In JavaScript, a function is not a “magical language structure”, but a special kind of value.
## Function declaration
```js
function sayHi() {
  console.log("Hello");
}
```
Example:
```js
function power(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```
### Function is a value
Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

We can even print out that value using alert:
```js	
function sayHi() {
  console.log("Hola");
}
console.log(sayHi); // muestra el código de la función
```

## Function expression
In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.
```js	
function sayHi() {
  console.log("Hola");
}
console.log(sayHi); // display the function code
```

```js	
function sayHi() {
  console.log( "Hello" );
}
let func = sayHi; 
func();
sayHi();
```

### Why is there a semicolon at the end?
A Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.
```js
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
```
The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

## Arrow function
Instead of the `function` keyword, it uses an arrow (`=>`) made up of an equal sign and a greater-than character. The arrow comes *after* the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.

```js
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```
When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function. So, these two definitions of `square` do the same thing:

```js
const square1 = (number) => { return number * number; };
const square2 = number => number * number;
```

When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

In some functional patterns, shorter functions are welcome. Compare:

```js
let lista = ["Hidrógeno", "Helio", "Litio", "Berilio"];

let longuitudes = lista .map(function (palabra) {
  return palabra.length;
});
console.log(longuitudes); // [8, 6, 7, 9]

let longuitudes2 = lista.map((palabra) => palabra.length);
console.log(longuitudes2); // [8, 6, 7, 9]
```

## Sumary

- Functions are values. They can be assigned, copied or declared in any place of the code.
- If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
- If the function is created as a part of an expression, it’s called a “Function Expression”.
- Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
- Function Expressions are created when the execution flow reaches them.

# OOP

As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

```js
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
```
Each property has a name followed by a colon and a value. When an object is written over multiple lines, indenting it like in the example helps with readability. Properties whose names aren’t valid binding names or valid numbers have to be quoted.

Reading a property that doesn’t exist will give you the value `undefined`.

## =

This will replace the property’s value if it already existed or create a new property on the object if it didn’t.

## Delete

It is a unary operator that, when applied to an object property, will remove the named property from the object. This is not a common thing to do, but it is possible.

## in

It is a binary operator that, when applied to a string and an object, tells you whether that object has a property with that name.

```js
let user = {
  name: 'Luis',
  age: 20,
  'Driving license': false
};
console.log('name' in anObject); // → true
```

The difference between setting a property to `undefined` and actually deleting it is that, in the first case, the object still *has* the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and `in` will return `false`.

## Object.keys

To find out what properties an object has, you can use the `Object.keys` function. You give it an object, and it returns an array of strings—the object’s property names.

```js
let user = {
  name: 'Luis',
  age: 20,
  'Driving license': false
};
console.log(Object.keys(user)); // [ 'name', 'age', 'Driving license' ]
```

## Object.assign

Copies all properties from one object into another.

```js
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA); // → {a: 1, b: 3, c: 4}
```

## Mutability

With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:

```jsx
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10
```

The `object1` and `object2` bindings grasp the *same* object, which is why changing `object1` also changes the value of `object2`. They are said to have the same *identity*. The binding `object3` points to a different object, which initially contains the same properties as `object1` but lives a separate life.

Bindings can also be changeable or constant, but this is separate from the way their values behave. Even though number values don’t change, you can use a `let` binding to keep track of a changing number by changing the value the binding points at. Similarly, though a `const` binding to an object can itself not be changed and will continue to point at the same object, the *contents* of that object might change.

```js
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;

// This isn't allowed
score = {visitors: 1, home: 1};
```

When you compare objects with JavaScript’s `==` operator, it compares by identity: it will produce `true` only if both objects are precisely the same value. Comparing different objects will return `false`, even if they have identical properties. There is no “deep” comparison operation built into JavaScript, which compares objects by contents, but it is possible to write it yourself

## For … in loop

To walk over all keys of an object, there exists a special form of the loop: `for..in`. The syntax:

```js
for (key in object) {
  // executes the body for each key among object properties
}
```

Example:

```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  console.log(key);  // name, age, isAdmin
  console.log(user[key]); // John, 30, true
}
```

💡 Prefer `for...of` and `Object.keys` over `for...in` when possible.

## Class

The basic syntax is:

```js
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```
Then use new MyClass() to create a new object with all the listed methods.

```js
class Rabbit {
  type_;
  constructor(type) {
    this.type_ = type;
  }
  speak(line) {
    console.log(`The ${this.type_} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

Do not use JavaScript getter and setter properties. They are potentially surprising and difficult to reason about, and have limited support in the compiler. Provide ordinary methods instead.


# Modern JS 

## What is it?
Modern JavaScript is a safe, latest update way of coding in JS.
In general, modern JavaScript is considered to be more concise, expressive, and efficient than older versions, and is designed to make it easier for developers to create dynamic, high-performing web applications.

## Where do we start?
We should start by adding this at the first line of your code: `"use strict"`.
This way, we enable Strict Mode  that changes the semantics of the JavaScript language and force you to code in a modern style.

There are a lot of cool features of Modern JS.  But we can't cover them all, so here are the ones we like the most:
## Spread operator for arrays

```js
let firstHalf = [ 'one', 'two'];
let secondHalf = ['three', 'four'];

let complete = [...firstHalf, ...secondHalf]

console.log(complete) // [ 'one', 'two', 'three', 'four' ]
```

## Spread operator for objects

```js
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
```
## Rest parameter

```js
let myFun = (a, b, ...manyMoreArgs) => {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"] 
```
## String interpolation
```js
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
```
##  Array methods(“find()”, “findIndex()”, “some()”, “includes()”)

```js
let array = [{ id: 1, checked: true }, { id: 2 }];

array.find(item => item.id === 2)       // { id: 2 }
array.findIndex(item => item.id === 2)  // 1
array.some(item => item.checked)        // true

let numberArray = [1,2,3,4];

numberArray.includes(2) // true
```

## Flat()

```js
[1, 2, 3, [4, 5]].flat()          // [1, 2, 3, 4, 5]
[1, 2, 3, [4, 5,[6, 7]]].flat(2)  // [1, 2, 3, 4, 5, 6, 7]
```
## At

```js
['this', 'presentation', 'is', 'awesome'].at(-1) // awesome

let words = ['this', 'presentation', 'is', 'awesome'];
words[words.length - 1] // awesome
```

## For of

```js
let list = [4, 5, 6];

for (let i in list) {
   console.log(i) // "0", "1", "2",
}

for (let i of list) {
   console.log(i) // "4", "5", "6"
}
```

## Arrow Functions and let usage

```js
let printArray = function(arr) {
  // do something
}

let printArray = (arr) => {
  // do something
}

let add = (a, b) => a + b

let add = function(a, b) { return a + b }
```

And that's all, thanks fo reading this far, if you want to investigate more on your own, we leave you the references used for this work in referencias.md in the bib folder.
Also you can contact us at:

Enrique Álvarez Mesa (alu0101142104@ull.edu.es)
Sergio de la Barrera García (alu0100953275@ull.edu.es)

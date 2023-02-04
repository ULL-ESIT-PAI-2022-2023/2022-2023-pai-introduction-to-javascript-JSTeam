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
Cuando se aplica un operador al tipo de valor "incorrecto", JavaScript convertirá silenciosamente ese valor al tipo que necesita, utilizando un conjunto de reglas que amenudo no son lo que desea o espera. Esto se llama *coerción de tipos*

Javascript es un lenguaje de programación poco estricto y acepta casi cualquier programa que se le de, lo que permite hacer cosas raras como:

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

Cuando `null` o `undefined` aparece en cualquier lado del operador `==`, produce verdadero solo si ambos lados son uno de `null` o `undefined`.

```js
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

Ese comportamiento es a menudo útil.  Cuando desee probar si un valor tiene un valor real en lugar de `null` o `undefined`, puedes compararlo con `null` con el `==` (o `!=`) operador.

Si no se desea usar esta conversión automática de tipo se han de usar los operadores:
- ===
- !==

```Es recomendable usarlo de manera defensiva, para prevenir la conversión de tipos```
## Cortocircuito de operadores lógicos
Existen ciertos comportamientos con los operadores lógicos && y || cuando sus operandos no son booleanos, pues aplicará la conversión automática de tipo.
- ||: Devolverá el operando de la izquierda si este puede ser convertido a true, en caso contrario, devolverá el operando de la derecha.
```js
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```
- &&: Devuelve el operando de la izquierda si este puede ser convertido a false, en caso contrario, devolverá el operando de la derecha.

Valores que NO pueden ser convertidos a booleanos y por tanto retorna false:
- "" → Empty string
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
# Funciones
## Function declation

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
There is another syntax for creating a function that is called a Function Expression.
It allows us to create a new function in the middle of any expression.

```js	
let sayHi = function() {
  console.log("Hello");
};
```
Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHi".

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

```js
const horn = () => {
  console.log("Toot");
};
```

En algunos patrones funcionales, las funciones más cortas son bienvenidas. Compara:

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
user.car = false;
console.log(user.car); // → false
delete user.age;
console.log(user.age); // → undefined
```
Each property has a name followed by a colon and a value. When an object is written over multiple lines, indenting it like in the example helps with readability. Properties whose names aren’t valid binding names or valid numbers have to be quoted.

Reading a property that doesn’t exist will give you the value `undefined`.


# JS Moderno
## use strict
## let

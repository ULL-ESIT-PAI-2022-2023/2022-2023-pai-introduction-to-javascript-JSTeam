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

// primitives
console.log(typeof "String")                  // String
console.log(typeof "This is not a String")    // String

console.log(typeof true)                      // Boolean
console.log(typeof false)                     // Boolean

console.log(typeof 1)                         // Number
console.log(typeof -5437534)                  // Number
console.log(typeof 5.4)                       // Number

console.log(typeof 2n)               // Bigint
console.log(typeof -8n)              // Bigint

console.log(typeof Symbol(5))       // Symbol
console.log(typeof Symbol("id"))    // Symbol

console.log(typeof undefined)       // Undefined

console.log(typeof null)            // Object*


// max_safe_integer js
// >= ES6
Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER;

// <= ES5
Number.MAX_VALUE;
Number.MIN_VALUE;


// javascript known bug
console.log(null  === null)  // ??


// objects
console.log(typeof {})            // Object
console.log(typeof {a: 1,b: 3})   // Object

console.log(typeof [])            // Object
console.log(typeof [1,2,3])       // Object

let set = new Set(["sumit","anil","amit"])
console.log(typeof set)           // Object

let myFunction = function(p1, p2) {
  return p1 * p2;
}
console.log(typeof myFunction)   // Function


// mutable
let example = 'Hello World'

example = 2

console.log(typeof example) // Number


// weak typing
let num = 2
let str = '2'

console.log(typeof num) // Number
console.log(typeof str) // String


console.log("1" === "1") // true

console.log({a: 1, b: 2} === {a: 1, b: 2}) // false

let arr1 = [1]
let arr2 = a

console.log(arr1 === arr2) // true


console.log(null  === null)   // true

console.log(typeof null)      // Object*


// primitive example
true    // always true
1       // always 1

a = 1
a + 1   // 2


// unary operator
let a = 1

!true    // false
!false   // true
a++      // 1 (postfix increment)
a--      // 1 (postfix decrement)
++a      // 2 (prefix increment)
--a      // 0 (prefix decrement)
+a       // 1 (unary plus)
-a       // -1 (unary negation)

a a++ a         a ++a a
- --- -         - --- -
1  1  2         1  2  2
2  2  3         2  3  3
3  3  4         3  4  4
4  4  5         4  5  5


// binary operators
1 + 1   // 2 (sum)
1 - 1   // 0 (subtraction)
1 * 1   // 1 (multiplication)
1 / 1   // 1 (division)
1 % 1   // 0 (module)
1 ** 1  // 1 (exponentiation)


// logical operators
true && true   // true
true && false  // false

true || true   // true
true || false  // true


// binary operators
1 == 1  // true  (equal)
1 === 1 // true  (strictly equal)

1 != 1  // false (not equal)
1 !== 1 // false (strictly not equal)

2 > 1   // true  (greater than)
1 >= 1  // true  (greater than or equal to)

2 < 1   // false (less than)
1 <= 1  // true  (less than or equal to)


// diferences between == and ===
let num = 0;
let str = "0";

console.log(num == str); // true
console.log(num === str); // false


// binary operators
let a = 1;  // a = 1      (assignment)
a += 1;     // a = a + 1  (addition assignment)
a -= 1;     // a = a - 1  (subtraction assignment)
a *= 1;     // a = a * 1  (multiplication assignment)
a /= 1;     // a = a / 1  (division assignment)
a %= 1;     // a = a % 1  (module assignment)
a **= 1;    // a = a ** 1 (exponentiation assignment)


// nested ternary operator
console.log(true ? 1 : 2);  // → 1
console.log(false ? 1 : 2); // → 2


let getTime = (seconds) => {
  return ( seconds <= 60     ?  'seconds' : seconds <= 3600   ?  'minutes' :
           seconds <= 86400  ?  'hours'   : 'days')}

console.log(getTime(90))      // minutes
console.log(getTime(86300))   // hours
console.log(getTime(234894))  // days


// infinity exaples
console.log(Infinity);             // Infinity 
console.log(Infinity + 1);         // Infinity 
console.log(Math.pow(10, 1000));   // Infinity 
console.log(Math.log(0));         // -Infinity 
console.log(1 / Infinity);         // 0 
console.log(1 / 0);                // Infinity 


// NaN example
let  showNumber = (x) => {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(showNumber(1)); // 1

console.log(showNumber('NotANumber')); // NaN


// type coercion
console.log(8 * null)     // → 0
console.log("5" - 1)      // → 4
console.log("5" + 1)      // → 51
console.log("five" * 2)   // → NaN
console.log(false == 0)   // → true


console.log(null === undefined);        // → false
console.log(null === 0);                // → false
console.log(null === null);             // → true
console.log(undefined === undefined);   // → true


// logical operators
console.log(null || "user") // → "user"
console.log("Agnes" || "user") // → "Agnes"

console.log(null && "user") // → null
console.log("Agnes" && "user") // → "user"

console.log(0 || -1)      // -1
console.log("" || "!?")   // "!?"

console.log(0 && -1)      // 0
console.log("" && "!?")   // ""


// concatenation example1
let num1 = "12" // string
let num2 = 10   // number

console.log(parseInt(num1, 10) + num2) // 22

console.log(num1 + num2) // 1210

// concatenation example2
let one = 1 // number
let two = 2 // number

console.log(`${one} ${two}`) // 1 2
console.log(String(one) + " " + String(two)) // 1 2

console.log(one + two)       // 3
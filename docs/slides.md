---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
title: JavaScript / TypeScript
---

<div style="display: flex; justify-content: center; margin-bottom: 32px">
  <img src="/logo.png" style="height: 180px">
  <img src="/ts-logo.svg" style="height: 180px">
</div>

# JavaScript / TypeScript

## Welcome

---

# FAQ

- What is JavaScript?
- What can you do with it?
- Where does JavaScript code run?
- ECMAScript vs JavaScript vs TypeScript?

---

# What is JavaScript

<br/>

<p class="text-yellow-400/80 font-bold text-2xl">
One of the most popular and widely used programming language
</p>

[Stack Overflow - Most popular technologies](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages)

<br/>

<p class="text-yellow-400/80 font-bold text-2xl">
Big companies like Netflix build entire applications around JavaScript
</p>

[Netflix JavaScript TechBlog](https://netflixtechblog.com/tagged/javascript)

---

# What can you do with it?

First JavaScript was only used in browsers to build interacitve sections on a web pages

<br/>
<br/>

## JavaScript Today

<br/>
<br/>

<div class="grid grid-cols-4 grid-rows-1 items-start content-center ">
  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-green-600/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <small>Web / Mobile<br>Apps</small>
  </div>

  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-blue-600/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <small>Backend, Micro Services<br>Network Apps <br>(Chats, Streaming ...)</small>
  </div>

  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-yellow-400/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <small>Command-line<br>Tools</small>
  </div>

  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-red-600/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <small>Games</small>
  </div>
</div>

---

# Where does JavaScript code run?

<div class="grid grid-cols-2 grid-rows-1 items-start content-center mt-20">
  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-blue-600/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <b>Browser</b>
    <br>
    <small>JavaScript Engine</small>
  </div>

  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-green-600/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
      <b>Node (since 2009)</b>
      <br>
        <small>C++ Program with the JavaScript Engine</small>
  </div>
</div>

---

# ECMAScript vs JavaScript vs TypeScript?

<div class="grid grid-cols-3 grid-rows-1 items-start content-center mt-20">
  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-green-600/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <b>ECMAScript</b>
    <br>
    <small>Specification</small>
  </div>

  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-yellow-400/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <b>JavaScript</b>
    <br>
    <small>Programming Language</small>
  </div>

  <div class="flex flex-col justify-center items-center text-center">
    <div class="bg-blue-600/80 my-4" style="border-radius: 100%; width: 80px; height: 80px;"></div>
    <b>TypeScript</b>
    <br>
    <small>Strongly Typed Programming Language</small>
  </div>
</div>

---
layout: image image: ./ecma.png
---

---

# ES5 to ES9

- Runs in all modern browsers (except IE11 🙈)
- New versions are transpiled into ES5

<br>

![ECMA](/ecma-2.png)

---

# TypeScript

- Created by Microsoft
- Transpiled with the TypeScript Transpiler to JavaScript
- Has features like:
  - Types / Interfaces
  - Annotations / Decorators
  - Interfaces / Generics

---
layout: center
---

# Questions

<br>
<strong class="text-20xl font-extrabold text-yellow-400/80">?</strong>

---

## layout: center

<div style="display: flex; justify-content: center; margin-bottom: 32px">
  <img src="/logo.png" style="height: 180px">
  <img src="/ts-logo.svg" style="height: 180px">
</div>

# JavaScript / TypeScript

## Fundamentals

---

# Table of Content

- Comments
- Variables
- Types
- Unions
- Interfaces
- Classes
- Functions
- Modules
- Advanced features
- Promises & Async/Await

---

# Comments

JavaScript comments can be used to explain JavaScript code, and to make it more readable.

### Single Line Comments

Single line comments start with `//`.

```typescript
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";
```

<br>

### Multi-line Comments

Multi-line comments start with `/*` and end with `*/`.

```typescript
/*
The code below will change the heading with id = "myH"
and the paragraph with id = "myP" in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

---

# Variables

There are 3 ways to declare a JavaScript variable:

```typescript
var oldValue = "some string";

// We are going to focus on `let` and `const`
let index = 0;
const list = [];
```

---

# Variables / `let`

Variables defined with let cannot be Redeclared.

```typescript
let x = "John Doe";
let x = 0; // SyntaxError: 'x' has already been declared
```

Variables defined with let must be Declared before use.

```typescript
x = "John Doe";
let x = 0; // ReferenceError: Cannot access 'x' before initialization
```

Variables defined with let have Block Scope.

```typescript
{
  let x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

---

# Variables / `const`

Variables defined with const cannot be Reassigned.

```typescript
const PI = 3.141592653589793;
PI = 3.14; // TypeError: Assignment to constant variable.
```

Variables defined with const need to be initialized.

```typescript
const PI; // SyntaxError: Missing initializer in const declaration.
```

Variables defined with const have Block Scope.

```typescript
{
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

---

# Variables / `const`

As a general rule, always declare a variable with const unless you know that the value will change. Use const when you declare a new Array, Object, Function or a RegExp

```typescript
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";
cars.push("Fiat");
```

<p class="text-yellow-500/80 flex items-center py-4">
  <uim-exclamation-triangle class="inline-block mr-3" /> 
  It does not define a constant value. It defines a constant reference to a value.
</p>

---

# Types

| Java Typ            | TypeScript Typ        | Example            |
| ------------------- | --------------------- | ------------------ |
| Object              | any                   | `{ key: 'value' }` |
| void                | void                  |                    |
| boolean             | boolean               | `true, false`      |
| int, long, short... | number                | `1, 0.2`           |
| String, char        | string                | `'Text'`           |
| Type[]              | Type[] / Array\<Type> | `[1,2,3]`          |

---

# Types / `string`

A JavaScript string is zero or more characters written inside quotes.

```typescript
let name = "John";
```

<br>
<br>

### Template Strings

<p class="text-grey-500">
  Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
</p>

```typescript
let templString = `Hello
   ${name},
   how are you?`;
console.log(templString); // Hello
// John,
// how are you?
```

[W3Schools - Strings](https://www.w3schools.com/js/js_strings.asp)

---

# Types / `number` / Floating precision

```typescript
let x = 0.2 + 0.1;
```

<br>

### What is the result?

<v-click>

```typescript
0.30000000000000004;
```

</v-click>

<v-click>

Number are converted into `1001011100` binary code.

Not every number can be converted, so JS takes the next available number.

In our case `0.2` is `0.20000000000000004`

<br>

</v-click>

<v-click>

### Workaround

```typescript
let x = (0.2 * 10 + 0.1 * 10) / 10; // 0.3
```

</v-click>

---

# Types / `number`

Adding Numbers and Strings

> Hint: The JavaScript interpreter works from left to right.

<br>

```typescript
let a = 10 + 20; // 30
let b = "10" + 20; // 1020
let c = 10 + "20"; // 1020
let c = "10" + "20"; // 1020
```

<br>

<v-click>

### What is the output?

```typescript
let d = 10 + 20 + "30";
```

</v-click>

<v-click>

```typescript
"3030";
```

</v-click>

[W3Schools - Numbers](https://www.w3schools.com/js/js_numbers.asp)

---
layout: image-right 
image: ./truthy-and-falsy.png
---

# Types / Truthy & Falsy

- false
- 0, -0
- "" (empty string)
- null, undefined, NaN

**All other values are considered truthy!**

<br>

### Better conditions

```typescript
if (pets.length) {
  // instead of pets.length > 0
  return "You have at least one pet!";
}
```

```typescript
if (character) {
  // character === undefined
  return "No character found.";
}
```

---

# Types / `null` & `undefined`

<br>

**null**: It is used to represent an intentional absence of an object value.

**undefined**: It represents uninitialized variables. .

```typescript
let customer = getCustomer();
if (customer === null || customer === undefined) {
  // do sth.
}
```

<br>

<v-clicks>

### How could it be simpler?

</v-clicks>

<v-clicks>

```typescript
if (!customer) {
  // do sth.
}
```

</v-clicks>

---

# Types / Arrays

<br>

```typescript
const cars = ["Saab", "Volvo", "BMW"]; // creating an array

let car = cars[0]; // access one item

cars[0] = "Opel"; // modiefy one item

cars.length;
3;
```

[w3schools - arrays](https://www.w3schools.com/js/js_arrays.asp)

---

# Types / Arrays / Methods

<br>

```typescript
cars.push("Ferrari"); // add item
let fruit = fruits.pop(); // removes the last item and returns it
```

[w3schools - arrays methods](https://www.w3schools.com/js/js_array_methods.asp)

---

# Types / Arrays / Iteration

Array iteration methods operate on every array item.

```typescript
const arr = [45, 4, 9, 16, 25];

// creates a new array
const numbersTwice = arr.map(function (value) {
  return value * 2;
});

// creates a new array with array elements that passes a test
const numbersLarge = arr.filter(function (value) {
  return value > 18;
});

// reduces an array to a single value
const sum = arr.reduce((previous, value, index, array) => previous + value);
```

[w3schools - arrays iteration](https://www.w3schools.com/js/js_array_iteration.asp)

---

# Types / Object

<br>

```typescript
let lastName = "Doe";
let obj = {
  firstName: "John",
  lastName,
  hobbies: ["Tennis", "Read"],
};

let obj = {};
obj.firstName = "John";
obj.lastName = "Doe";
obj.hobbies = ["Tennis", "Read"];
```

[w3schools - objects](https://www.w3schools.com/js/js_objects.asp)

---

# Interfaces

```typescript
interface Customer {
  hobbies: string[];
}
let validCus: Customer = {
  hobbies: ["Tennis", "Squash"],
};

// Type '{ hobbies: string; }' is not assignable to
// type 'Customer'. Types of property 'hobbies' are
// incompatible. Type 'string' is not assignable
// to type 'string[]'.
let compileError: Customer = {
  hobbies: "Tennis",
};
```

---

# Interfaces / Optional properties

```typescript{all|3}
interface Customer {
  mandatory: string;
  optional?: string[];
}

let validCus: Customer = {
  mandatory: "Mandatory",
};

// type '{ optional: string; }' is not assignable to
// type 'Customer'. Property 'mandatory' is missing
// in type '{ optional: string; }'.
let compileError: Customer = {
  optional: ["Optional", "Prop"],
};
```

---

# Types / Interfaces / Functions

```typescript{all|4|9-11}
interface Customer {
  mandatory: string;
  optional?: string[];
  fullName: (first: string, last: string) => string;
}

let customer: Customer = {
  mandatory: "John",
  fullName(first, last) {
    return first + " " + last;
  },
};
```

---

# Union Types

```typescript
function printAge(age: number | string) {
  console.log(age);
}

printAge(1); // 1
printAge("1"); // 1

// Argument of type 'number[]' is not assignable
// to parameter of type 'string | number'.
printAge([1, 2, 3]);
```

---

# Classes

```typescript
class CustomerService {

  private _customers: Customer[] = [{ name: "John" }];

  get customers() {
    return this._customers;
  }

  set customers(customers: Customer[]) {
    this._customers = customers;
  }

  getCustomerNames(): string[] {
    return this.customers.map((customer) => customer.name);
  }

}
```

---

# Class / Properties

```typescript
class CustomerService {

  // Optional props
  private title: string | undefined = undefined;
  private title?: string;

  private name: string;
  // Property 'name' has no initializer and is not definitely assigned in the constructor.
  // Not null assertion operator
  private name!: string;

}
```

---
 
# Class / Constructor

```typescript{all|2-5}
class CustomerComponent {
  private service: Service;

  constructor(service: Service) {
    this.service = service
  }

  findAll() {
    return this.service.findAll();
  }
}
```

<br>

<v-click>

### Lets use the shorthand variant

```typescript
class CustomerComponent {
  constructor(private service: Service) {}
}
```

</v-click>

---

# Functions

A JavaScript function is a block of code designed to perform a particular task.

```typescript
function myFunction(p1: number, p2: number) {
  return p1 * p2; // The function returns the product of p1 and p2
}
```

```typescript
myFunction(1, 2);
```

<br>

# Arrow Function

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

```typescript
const myFunction = (p1: number, p2: number) => p1 * p2;
```

---

# Functions / Arguments

```typescript
function renderCustomer(c) {
  console.log(c); // "John Doe"
}

function getFullName(name, callback) {
  let lastName = "Doe";
  callback(name + " " + lastName);
}

getFullName("John", function (result) {
  return renderCustomer(result);
});

getFullName("John", renderCustomer);
```

---

# Functions / Arguments

Not passed parameters have the value `undefined`.

```typescript
function fullName(first = "John", last) {
  return first + " " + last;
}

console.log(fullName());
console.log(fullName("Peter", "Parker"));
```

<br>

<v-click>

### What is the output

</v-click>

<v-click>

```typescript
"John undefined";
"Peter Parker";
```

</v-click>

---

# Module / Export

Any declaration (such as a variable, function, class, type alias, or interface) can be exported by adding the export keyword.

```typescript
export interface StringValidator {
  isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

---

# Module / Import

Importing is just about as easy as exporting from a module. Importing an exported declaration is done through using one of the import forms below:

```typescript
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();
```

<br>

```typescript
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```

<br>
<br>

### Import a module for side-effects only

<p class="text-white/40">Though not recommended practice, some modules set up some global state that can be used by other modules. These modules may not have any exports, or the consumer is not interested in any of their exports. To import these modules, use:</p>

```typescript
import "./my-module.js";
```

---

# Advanced Features

- Rest & Spreading
- Destructuring

---

# ...Rest & [... Spreading]

## Rest Parameter

```typescript
function info(name, ...hobbies) {
  hobbies.forEach((hobby) => console.log(hobby));
}
info("John", "Tennis", "Squash", "Football");

// "Tennis" "Squash" "Football"

function multiply(multi, ...numbers) {
  return numbers.map((num) => multi * num);
}
console.log(multiply(2, 3, 4, 5, 6));

// [6, 8 , 10, 12]
```

---

# Spread Operator

```typescript
// copy arrays (but not deeply)
let arr = [1, 2];
let newArr = [...arr];

// join arrays
let devs = ["John", "Tony"];
let testers = ["Peter", "Nicole"];
let employees = ["Will", ...devs, ...testers];
console.log(employees);
// ["Will", "John", "Tony", "Peter", "Nicole"]

let today = [2017, 2, 29];
console.log(new Date(...today).toDateString());
// Wed Mar 29 2017
```

---

# Destructuring

## Arrays

```typescript
let arr = [1, 2, 3];
let [a, b] = arr;
console.log(a); // 1
console.log(b); // 2

let arr = [1, 2, 3, 4, 5];
let [a, , ...rest] = arr;
console.log(a); // 1
console.log(rest); // [3, 4, 5]
```

---

# Destructuring

## Objects

```typescript
let obj = {
  firstName: "John",
  lastName: "Doe",
  hobbies: ["Tennis", "Read"],
};

let { firstName, hobbies } = obj;
console.log(firstName); // "John"
console.log(hobbies); // ["Tennis", "Read"]

let { firstName: name } = obj;
console.log(name); // "John"
```

---

# Links

- [w3school JavaScript](https://www.w3schools.com/js/default.asp)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---
layout: center
---

# Questions

<br>
<strong class="text-20xl font-extrabold text-yellow-400/80">?</strong>

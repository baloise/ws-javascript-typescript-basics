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

# ES5

- Runs in all modern browsers
- New versions are transpiled into ES5

---

# ES6 / ES2015

- New version from 2015
- In most cases gets compiled or transpiled to ES5
- Has new features like:
  - Classes
  - Arrow Functions
  - Block scoped let und const
  - Module
  - Multiline Strings
  - ...

---

# TypeScript

- Created by Microsoft
- Transpiled with the TypeScript Transpiler to JavaScript
- Has features like:
  - Types
  - Annotations / Decorators
  - Interfaces -Generics

---
layout: center
---

# Questions

<br>
<strong class="text-20xl font-extrabold text-yellow-400/80">?</strong>

---
layout: center
---

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

---

# Comments

```typescript
// Single Line Comments

/*
Multi-line Comments
Multi-line Comments
Multi-line Comments
*/
```

---

# Variables

There are 3 ways to declare a JavaScript variable:

- Using var
- Using let
- Using const

<br/>

> We are going to focus on `let` and `const`

---

# Variables - `let`

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

# Variables - `const`

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

# Variables - `const`

As a general rule, always declare a variable with const unless you know that the value will change.

Use const when you declare a new Array, Object, Function or a RegExp

> It does not define a constant value. It defines a constant reference to a value.

<br/>

```typescript
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";
cars.push("Fiat");
```

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

# Types - String

## Template Strings

```typescript
let name = "John";
let templString = `Hello
   ${name},
   how are you?`;
console.log(templString); // Hello
// John,
// how are you?
```

[W3Schools - Strings](https://www.w3schools.com/js/js_strings.asp)

---

# Types - Number

## Floating Precision

```typescript
let x = 0.2 + 0.1; // 0.30000000000000004
let x = (0.2 * 10 + 0.1 * 10) / 10; // 0.3
```

<br>
<br>

## Adding Numbers and Strings

```typescript
let a = 10 + 20; // 30
let b = "10" + 20; // 1020
let c = 10 + "20"; // 1020
let c = "10" + "20"; // 1020
let d = 10 + 20 + "30"; // ???
```

> Hint: The JavaScript interpreter works from left to right.

[W3Schools - Numbers](https://www.w3schools.com/js/js_numbers.asp)

---

# Types - Truthy und Falsy

- false
- 0
- "" (empty string)
- null
- undefined
- NaN

---

# Types - Null & Undefined

<br>

**null**: It is used to represent an intentional absence of an object value.

**undefined**: It represents uninitialized variables. .

```typescript
let customer = getCustomer();
if (customer === null || customer === undefined) {
  // do sth.
}

if (!customer) {
  // do sth.
}
```

---

# Types - Arrays

<br>

```typescript
const cars = ["Saab", "Volvo", "BMW"]; // creating an array

let car = cars[0]; // access one item

cars[0] = "Opel"; // modiefy one item

cars.length; 3
```

[w3schools - arrays](https://www.w3schools.com/js/js_arrays.asp)

---

# Types - Arrays

<br>

## Methods

<br>

```typescript
cars.push("Ferrari"); // add item
let fruit = fruits.pop(); // removes the last item and returns it
```

[w3schools - arrays methods](https://www.w3schools.com/js/js_array_methods.asp)

---

# Types - Arrays

<br>


## Iteration
<br>

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

# Types - Object

<br>

```typescript
let lastName = "Muster";
let obj = {
  firstName: "Hans",
  lastName,
  hobbies: ["Tennis", "Lesen"],
};

let obj = {};
obj.firstName = "Hans";
obj.lastName = "Muster";
obj.hobbies = ["Tennis", "Lesen"];
```

[w3schools - objects](https://www.w3schools.com/js/js_objects.asp)

---

# Interface

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

# Interface

## optional properties

```typescript
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

# Interface

## functions

```typescript
interface Customer {
  mandatory: string;
  optional?: string[];
  fullName: (first: string, last: string) => string;
}

let customer: Customer = {
  mandatory: "Hans",
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

# Class

## Getter / Setter Syntax

```typescript
class CustomerService {
  private _customers: Customer[] = [{ name: "Hans" }];
  get customers() {
    return this._customers;
  }
  set customers(customers: Customer[]) {
    this._customers = customers;
  }

  extractName(customer: Customer) {
    return customer.name;
  }

  getCustomerNames() {
    return this.customers.map(extractName);
  }
}
```

---

# Class

## Constructor / shorthand

```typescript
class CustomerComponent {
  constructor(private service: Service) {}

  findAll() {
    return this.service.findAll();
  }
}
```

---

# Functions

A JavaScript function is a block of code designed to perform a particular task.

```typescript
function myFunction(p1: number, p2: number) {
  return p1 * p2; // The function returns the product of p1 and p2
}
```

## Arrow Function

```typescript
const myFunction = (p1: number, p2: number) => p1 * p2;
myFunction(1, 2);
```

---

# Functions

## Currying

```typescript
const myFunction = (p1: number) => (p2: number) => p1 * p2;
const myFunction1 = myFunction(1);
myFunction1(2) === myFunction(1)(2);
```

---

# Functions

## Parameter

```typescript
function renderCustomer(c) {
  console.log(c); // "Hans Muster"
}

function getFullName(name, callback) {
  let lastName = "Muster";
  callback(name + " " + lastName);
}

getFullName("Hans", function (result) {
  return renderCustomer(result);
});

getFullName("Hans", renderCustomer);
```

---

# Functions

## Default Parameter

Not passed parameters have the value `undefined`.

```typescript
function fullName(first = "Hans", last = "Muster") {
  return first + " " + last;
}
console.log(fullName("Peter")); // "Peter Muster"
```

---

# Module

## Export

```typescript
export const API_URL = '/api';
export interface Person = {
   name: string;
}
export function add(a: number, b: number) {
   return a + b;
}
export const addFive(a: number) => a + 5;
export class Customer {
   name: string;
   constructor() {}
}
```

---

# Module

## Import

```typescript
// same as destructuring ;-)
import { Customer, Person } from "./customer";
import { Component } from "@angular/core";

let customer = new Customer();
let person: Person = {
  name: "Hans",
};

import "rxjs/add/operator/map";

import * as alias from "./exports";

let addFunc = alias.addFive;
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
info("Hans", "Tennis", "Squash", "Schach");

// "Tennis" "Squash" "Schach"

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
let devs = ["Hans", "Reto"];
let testers = ["Peter", "Nicole"];
let employees = ["El jefe", ...devs, ...testers];
console.log(employees);
// ["El jefe", "Hans", "Reto", "Peter", "Nicole"]

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
  firstName: "Hans",
  lastName: "Muster",
  hobbies: ["Tennis", "Lesen"],
};

let { firstName, hobbies } = obj;
console.log(firstName); // "Hans"
console.log(hobbies); // ["Tennis", "Lesen"]

let { firstName: name } = obj;
console.log(name); // "Hans"
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

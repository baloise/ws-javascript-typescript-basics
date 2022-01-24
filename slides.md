---
theme: default
class: text-center
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
layout: image-right
image: public/logo.png
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
layout: image 
image: ./ecma.png
---

---

# ES5 to ES9

- Runs in all modern browsers (except IE11 🙈)
- New versions are transpiled into ES5

<br>

![ECMA](/ecma-2.png)

---
layout: image-right
image: public/ts-logo.svg
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

<strong class="text-8xl font-extrabold question">Questions ?</strong>

---
layout: cover 
class: text-center
---

<div style="display: flex; justify-content: center; margin-bottom: 32px">
  <img src="/logo.png" style="height: 180px">
  <img src="/ts-logo.svg" style="height: 180px">
</div>

# JavaScript / TypeScript

## Fundamentals

---
layout: image-right
image: logo.png
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
- Promises & Async/Await
- Advanced features

---
layout: cover
---

# Comments

JavaScript comments can be used to explain JavaScript code, and to make it more readable.

---

# Comments

### Single Line Comments

Single line comments start with `//`.

```typescript
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";
```

<v-click>
<br>

### Multi-line Comments

Multi-line comments start with `/*` and end with `*/`.

```typescript
/**
 * The code below will change the heading with id = "myH"
 * and the paragraph with id = "myP" in my web page:
 */
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

</v-click>

---
layout: cover
---

# Variables

There are 3 ways to declare a JavaScript variable:

```typescript
var oldValue = "some string";

// We are going to focus on `let` and `const`
let index = 0;
const list = [];
```

<br>

---

# Variables / Why don’t we use var anymore?

```java
public class Example () {
  public void processArray (String[] array) {
    for(int i = 0; i < array.length; i++) {
      System.out.println(array[i]);
    }

    System.out.println("I cannot use the variable i here");
  }
}
```

<v-click>

Unlike Java, Javascript (ES5) creates scopes based on functions. This means, once you declare a variable inside a function, you can use it anywhere in that function.

```typescript
function processArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log("Element ", array[i]);
  }

  console.log("I can use variable i outside the loop ", i);
}
```

</v-click>

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
layout: cover
---

# Types

- string
- number
- trughy & falsy
- null & undefinded
- arrays
- objects

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

Floating point arithmetic is not always 100% accurate:

```typescript
let x = 0.2 + 0.1;
```

<v-click>

<br>

### What is the result?

</v-click>

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

cars.length; // 3
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

# Types / `object`

The Object class represents one of JavaScript's data types. Nearly all objects in JavaScript are instances of **Object**.

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
layout: cover
---

# Obeject Types

In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

- type aliases
- interfaces

---

# Obeject Types / Type alias

```typescript
type Person = {
  name: string;
  age: number;
};
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

[TypeScript - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

# Obeject Types / Interfaces

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

[TypeScript - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

# Obeject Types / Interfaces / Optional properties

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

[TypeScript - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

# Obeject Types / Interfaces / Functions

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

[TypeScript - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---
layout: cover
---

# Union Types

A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

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

[TypeScript - Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

---
layout: cover
---

# Classes

TypeScript offers full support for the class keyword introduced in ES2015.

```typescript
class Point {}
```

---

# Class / Property

A field declaration creates a public writeable property on a class:

```typescript{all|2-3|5-7|9-12}
class CustomerService {
  publicTitle = 'Hello World'
  private internalTitle = 'Hello World'

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

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads.

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

### Lets use the shorthand variante

```typescript
class CustomerComponent {
  constructor(private service: Service) {}
}
```

</v-click>

---

# Classes / Methods

A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors

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

```typescript
const service = new CustomerService()
service.getCustomerNames() // ['John']
```

---
layout: cover
---

# Functions

A JavaScript function is a block of code designed to perform a particular task.

Functions are the basic building block of any application, whether they’re local functions, imported from another module, or methods on a class

```typescript
function myFunction(p1: number, p2: number): number {
  return p1 * p2; // The function returns the product of p1 and p2
}
```

```typescript
myFunction(1, 2);
```

---

# Functions / Arrow Function

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

```typescript
const myFunction = (p1: number, p2: number) => p1 * p2;
```

```typescript
myFunction(1, 2);
```

---

# Functions / Arguments

```typescript
type RenderCustomer = (name: string): void
```

<v-click>

```typescript
const renderCustomer: RenderCustomer = (name) => {
  console.log(c); // "John Doe"
};
```

</v-click>
<v-click>

```typescript
function getFullName(firstName: string, callback: RenderCustomer): void {
  let lastName = "Doe";
  callback(`${firstName} ${lastName}`);
}
```

</v-click>
<v-click>

```typescript
getFullName("John", function (result) {
  return renderCustomer(result);
});
```

</v-click>
<v-click>

```typescript
getFullName("John", renderCustomer);
```

</v-click>

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
layout: cover
---

# Modules

Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.

- export
- import

[TypeScript - Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

---

# Modules / `export`

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

# Modules / `import`

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
layout: cover
---

# Promise / Async & Await

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

---

# Promise / Create

The states of promise can be **Pending**, **Fulfilled** or **Rejected**

```typescript
const myPromise = new Promise((resolve, reject) => {
  // is Pending
  // "Producing Code" (May take some time) like an HTTP call

  resolve(); // when Fulfilled
  reject(); // when Rejected
});
```

- **resolve(value)** — if the job is finished successfully, with result value.
- **reject(error)** — if an error has occurred, error is the error object.

---

# Promise / Consumers

A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using methods .then, .catch and .finally.

```typescript
myPromise
  .then(value => {/* code if successful */}
  .then(value => {/* code after the first then */}
  .catch(error => {/* code if some error */}
  .finally(() => /* code at the end of the promise */)
```

---

# Promise / Async & Await

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

### Async

The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

```typescript
async function myAsyncFunction() {
  return 1;
}
```

```typescript
myAsyncFunction().then((value) => alert(value)); // 1
```

---

# Promise / Async & Await

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

### Await

The keyword **await** makes JavaScript wait until that promise settles and returns its result.

```typescript
// works only inside async functions
let value = await promise;
```

<v-click>

```typescript
async function myAsyncFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

myAsyncFunction();
```

</v-click>

---

# Promise / Async & Await

### Error Handling

We can catch that error using **try..catch**, the same way as a regular **throw**:

```typescript
async function myAsyncFunction() {
  try {
    let response = await fetch("http://no-such-url");
    /* ... */
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

myAsyncFunction();
```

---

# Promise / Async & Await

Example with then, catch and finally:

```typescript
function printUser() {
  fetch("/article/promise-chaining/user.json")
    .then((response) => response.json())
    .then((user) => console.log(user));
}
```

Example with async & await:

```typescript
async function printUser() {
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();
  console.log(user);
}
```

---
layout: cover
---

# Advanced Features

- Rest Parameter
- Spread syntax (...)
- Destructuring assignment
  - Arrays
  - Objects

---

# Rest Parameter

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

```typescript
function info(name, ...hobbies) {
  hobbies.forEach((hobby) => console.log(hobby));
}
info("John", "Tennis", "Squash", "Football");

// "Tennis" "Squash" "Football"
```

<br>

```typescript
function multiply(multi, ...numbers) {
  return numbers.map((num) => multi * num);
}
console.log(multiply(2, 3, 4, 5, 6));

// [6, 8 , 10, 12]
```

---

# Spread syntax (...)

- The spread operator is just 3 dots ...
- It can be used on iterables like an array or a string.
- It expands an iterable to its individual elements
- It can provide a function call with an array (or any other iterable) where 0 or more arguments were expected.

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

# Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

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

# Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

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

<strong class="text-8xl font-extrabold question">Questions ?</strong>

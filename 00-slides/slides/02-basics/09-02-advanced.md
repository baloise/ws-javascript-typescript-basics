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

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

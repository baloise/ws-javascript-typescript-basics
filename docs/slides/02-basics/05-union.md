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

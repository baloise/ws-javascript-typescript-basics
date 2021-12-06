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

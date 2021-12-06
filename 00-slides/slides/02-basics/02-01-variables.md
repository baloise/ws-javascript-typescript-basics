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

# Variables - `const`

Variables defined with const cannot be Redeclared.

```typescript
const PI = 3.141592653589793;
PI = 3.14; // TypeError: Assignment to constant variable.
```

Variables defined with const cannot be Reassigned.

```typescript
const PI;
PI = 3.14; // SyntaxError: Missing initializer in const declaration.
```

Variables defined with const have Block Scope.

```typescript
{
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

# Variables - `const`

As a general rule, always declare a variable with const unless you know that the value will change.

Use const when you declare a new Array, Object, Function or a RegExp

> It does not define a constant value. It defines a constant reference to a value.

```typescript
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";
```

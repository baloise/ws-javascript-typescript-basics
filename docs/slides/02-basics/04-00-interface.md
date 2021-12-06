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

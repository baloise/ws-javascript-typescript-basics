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

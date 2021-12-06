# Interface

## functions

```typescript
interface Customer {
  mandatory: string;
  optional?: string[];
  fullName: (first: string, last: string) => string;
}

let customer: Customer = {
  mandatory: "Hans",
  fullName(first, last) {
    return first + " " + last;
  },
};
```

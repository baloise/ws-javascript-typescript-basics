# Functions

## Currying

```typescript
const myFunction = (p1: number) => (p2: number) => p1 * p2;
const myFunction1 = myFunction(1);
myFunction1(2) === myFunction(1)(2);
```

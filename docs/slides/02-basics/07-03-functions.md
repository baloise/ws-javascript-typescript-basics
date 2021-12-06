# Functions

## Default Parameter

Not passed parameters have the value `undefined`.

```typescript
function fullName(first = "Hans", last = "Muster") {
  return first + " " + last;
}
console.log(fullName("Peter")); // "Peter Muster"
```

# Types - Null & Undefined

**null**: It is used to represent an intentional absence of an object value.

**undefined**: It represents uninitialized variables. .

```typescript
let customer = getCustomer();
if (customer === null || customer === undefined) {
  // do sth.
}

if (!customer) {
  // do sth.
}
```

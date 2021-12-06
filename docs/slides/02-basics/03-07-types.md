# Types - Arrays

## Iteration

```typescript
const arr = [45, 4, 9, 16, 25];

// creates a new array
const mapper = function (value: number) {
  return value * 2;
};
const numbersTwice = arr.map(mapper);

// creates a new array with array elements that passes a test
const numbersLarge = arr.filter(function (value) {
  return value > 18;
});

// reduces an array to a single value
const sum = arr.reduce((previous, value, index, array) => previous + value);
```

[w3schools - arrays iteration](https://www.w3schools.com/js/js_array_iteration.asp)

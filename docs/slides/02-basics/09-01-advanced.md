# ...Rest & [... Spreading]

## Rest Parameter

```typescript
function info(name, ...hobbies) {
  hobbies.forEach((hobby) => console.log(hobby));
}
info("Hans", "Tennis", "Squash", "Schach");

// "Tennis" "Squash" "Schach"

function multiply(multi, ...numbers) {
  return numbers.map((num) => multi * num);
}
console.log(multiply(2, 3, 4, 5, 6));

// [6, 8 , 10, 12]
```

# Functions

## Parameter

```typescript
function renderCustomer(c) {
  console.log(c); // "Hans Muster"
}

function getFullName(name, callback) {
  let lastName = "Muster";
  callback(name + " " + lastName);
}

getFullName("Hans", function (result) {
  return renderCustomer(result);
});

getFullName("Hans", renderCustomer);
```

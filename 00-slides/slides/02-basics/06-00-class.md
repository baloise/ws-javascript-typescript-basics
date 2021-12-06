# Class

## Getter / Setter Syntax

```typescript
class CustomerService {
  private _customers: Customer[] = [{ name: "Hans" }];
  get customers() {
    return this._customers;
  }
  set customers(customers: Customer[]) {
    this._customers = customers;
  }

  extractName(customer: Customer) {
    return customer.name;
  }

  getCustomerNames() {
    return this.customers.map(extractName);
  }
}
```

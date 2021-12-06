# Class

## Constructor / shorthand

```typescript
class CustomerComponent {
  constructor(private service: Service) {}

  findAll() {
    return this.service.findAll();
  }
}
```

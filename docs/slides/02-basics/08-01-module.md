# Module

## Import

```typescript
// same as destructuring ;-)
import { Customer, Person } from "./customer";
import { Component } from "@angular/core";

let customer = new Customer();
let person: Person = {
  name: "Hans",
};

import "rxjs/add/operator/map";

import * as alias from "./exports";

let addFunc = alias.addFive;
```

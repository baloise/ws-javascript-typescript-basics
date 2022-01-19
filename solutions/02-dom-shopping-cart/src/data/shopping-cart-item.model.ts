import { Pizza } from "./pizza.model";

export class ShoppingCartItem {
  constructor(public pizza: Pizza, public amount: number) {}

  get price(): number {
    return this.amount * this.pizza.price;
  }
}

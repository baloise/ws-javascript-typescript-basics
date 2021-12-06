import { ShoppingCartItem } from "../data/shopping-cart-item.model";
import { Pizza } from "../data/pizza.model";
import { sum } from "../utils/sum.util";
import { Store } from "./store";

interface ShoppingCart extends Object {
  list: ShoppingCartItem[];
  amount: number;
  total: number;
}

export class ShoppingCartStore extends Store<ShoppingCart> {
  protected data(): ShoppingCart {
    return {
      list: [],
      amount: 0,
      total: 0,
    };
  }

  add(pizza?: Pizza): void {
    if (pizza) {
      const index = this.findPizzaIndex(pizza);
      if (index >= 0) {
        this.state.list[index].amount++;
      } else {
        this.state.list.push(new ShoppingCartItem(pizza, 1));
      }
      this.calculateAmount();
      this.calculateTotal();
      this.notify();
    }
  }

  remove(pizza?: Pizza): void {
    if (pizza) {
      const index = this.findPizzaIndex(pizza);
      if (index >= 0) {
        if (this.state.list[index].amount > 1) {
          this.state.list[index].amount--;
        } else {
          this.state.list.splice(index, 1);
        }
      }
      this.calculateAmount();
      this.calculateTotal();
      this.notify();
    }
  }

  private findPizzaIndex(pizza: Pizza): number {
    return this.state.list.findIndex((item) => item.pizza.id === pizza.id);
  }

  private calculateTotal(): void {
    this.state.total = sum(this.state.list.map((item) => item.price));
  }

  private calculateAmount(): void {
    this.state.amount = sum(this.state.list.map((item) => item.amount));
  }
}

export const shoppingCartStore: ShoppingCartStore = new ShoppingCartStore();

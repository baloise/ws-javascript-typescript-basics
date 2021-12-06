import { Pizza } from "../data/pizza.model";
import { ShoppingCartStore, shoppingCartStore } from "./shopping-cart.store";

describe("Cart Store", () => {
  const pizzaOne = new Pizza(1, "PizzaTitle", "PizzaDescription", 7);
  const pizzaTwo = new Pizza(2, "PizzaTitle", "PizzaDescription", 42);

  test("should have initial values", () => {
    expect(shoppingCartStore.getState()).toEqual({
      amount: 0,
      total: 0,
      list: [],
    });
  });

  test("should add pizza one and calulate total and amount", () => {
    const store = new ShoppingCartStore();
    store.add(pizzaOne);
    expect(store.getState()).toEqual({
      amount: 1,
      total: 7,
      list: [
        {
          pizza: pizzaOne,
          amount: 1,
        },
      ],
    });
  });

  test("should add two times the pizza one and calulate total and amount", () => {
    const store = new ShoppingCartStore();
    store.add(pizzaOne);
    store.add(pizzaOne);
    expect(store.getState()).toEqual({
      amount: 2,
      total: 14,
      list: [
        {
          pizza: pizzaOne,
          amount: 2,
        },
      ],
    });
  });

  test("should remove pizza one from the cart", () => {
    const store = new ShoppingCartStore();
    store.add(pizzaOne);
    store.add(pizzaTwo);
    store.remove(pizzaOne);
    expect(store.getState()).toEqual({
      amount: 1,
      total: 42,
      list: [
        {
          pizza: pizzaTwo,
          amount: 1,
        },
      ],
    });
  });
});

import { ShoppingCartItem } from "./shopping-cart-item.model";
import { Pizza } from "./pizza.model";

describe("Cart model", () => {
  const pizza = new Pizza(1, "PizzaTitle", "PizzaDescription", 42);

  test("should have inital value", () => {
    const cart = new ShoppingCartItem(pizza, 1);
    expect(cart.pizza).toBe(pizza);
    expect(cart.amount).toBe(1);
  });

  test("should calculate the price of two", () => {
    const cart = new ShoppingCartItem(pizza, 2);
    expect(cart.price).toBe(84);
  });

  test("should calculate the price of zero amout", () => {
    const cart = new ShoppingCartItem(pizza, 0);
    expect(cart.price).toBe(0);
  });
});

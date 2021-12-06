import { Pizza } from "./pizza.model";

describe("Pizza model", () => {
  const pizza = new Pizza(1, "PizzaTitle", "PizzaDescription", 42);

  test("should have inital value", () => {
    expect(pizza.id).toBe(1);
    expect(pizza.title).toBe("PizzaTitle");
    expect(pizza.description).toBe("PizzaDescription");
    expect(pizza.price).toBe(42);
  });

  test("should have a image url", () => {
    expect(pizza.image).toBe("../public/images/pizzatitle.jpeg");
  });
});

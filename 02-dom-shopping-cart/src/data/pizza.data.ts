import { Pizza } from "./pizza.model";

export const pizzas: Pizza[] = [
  new Pizza(1, "Margherita", "Tomato sauce, mozzarella, organic oregano", 14.0),
  new Pizza(
    2,
    "Stromboli",
    "Tomato sauce, mozzarella, fresh chillies, olives, organic oregano",
    16.0,
  ),
  new Pizza(
    3,
    "Funghi",
    "Tomato sauce, mozzarella, fresh mushrooms, organic oregano",
    16.5,
  ),
  new Pizza(
    4,
    "Verde",
    "Tomato sauce, mozzarella, broccoli, spinach, Grana Padano slivers DOP, organic oregano",
    18.5,
  ),
  new Pizza(
    5,
    "Hawaii",
    "Tomato sauce, mozzarella, Swiss ham, pineapple, organic oregano",
    19.5,
  ),
  new Pizza(
    6,
    "Piccante",
    "Tomato sauce, mozzarella, Swiss spicy salami, fresh chillies, organic oregano",
    18.0,
  ),
];

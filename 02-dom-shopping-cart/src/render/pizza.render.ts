import { pizzas } from "../data/pizza.data";
import { Pizza } from "../data/pizza.model";
import { shoppingCartStore } from "../store/shopping-cart.store";
import { currency } from "../utils/currency.util";

export const renderPizzaList = () => {
  const pizzaListContainer = document.getElementById("pizza-list");
  if (pizzaListContainer) {
    pizzaListContainer.innerHTML = "";
    pizzas
      .map(renderPizzaListItem)
      .forEach((el) => pizzaListContainer.appendChild(el));
  }
};

export const renderPizzaListItem = (pizza: Pizza): HTMLElement => {
  const listElement = document.createElement("li");
  listElement.onclick = (event: MouseEvent) => {
    if (event.target) {
      const targetElement: HTMLElement = event.target as HTMLElement;
      if (targetElement.classList.contains("pizza-cart-button")) {
        shoppingCartStore.add(pizza);
      }
    }
  };

  listElement.innerHTML = `
    <img src="${pizza.image}" alt="${pizza.title}" />
    <span class="title">${pizza.title}</span>
    <span class="description">${pizza.description}</span>
    <div class="price">
      <span>${currency(pizza.price)}</span>
      <button class="pizza-cart-button">Add to cart</button>
    </div>
  `;
  return listElement;
};

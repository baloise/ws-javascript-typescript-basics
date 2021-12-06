import { ShoppingCartItem } from "../data/shopping-cart-item.model";
import { shoppingCartStore } from "../store/shopping-cart.store";
import { currency } from "../utils/currency.util";

export const renderAmount = () => {
  const cartAmountContainer = document.getElementById("cart-amount");
  if (cartAmountContainer) {
    const amount = shoppingCartStore.getState().amount;
    cartAmountContainer.innerHTML = amount > 0 ? `(${amount})` : "";
  }
};

export const renderTotal = () => {
  const cartTotalContainer = document.getElementById("cart-total");
  if (cartTotalContainer) {
    cartTotalContainer.innerHTML = currency(shoppingCartStore.getState().total);
  }
};

export const renderCartList = () => {
  const cartListContainer = document.getElementById("cart-list");
  if (cartListContainer) {
    cartListContainer.innerHTML = "";
    shoppingCartStore
      .getState()
      .list.map(renderCartListItem)
      .forEach((el) => cartListContainer.appendChild(el));
  }
};

export const renderCartListItem = (
  shoppingCartItem: ShoppingCartItem,
): HTMLElement => {
  const listElement = document.createElement("li");
  listElement.onclick = (event: MouseEvent) => {
    if (event.target) {
      const targetElement: HTMLElement = event.target as HTMLElement;
      if (targetElement.classList.contains("cart-increase-button")) {
        shoppingCartStore.add(shoppingCartItem.pizza);
      }
      if (targetElement.classList.contains("cart-decrease-button")) {
        shoppingCartStore.remove(shoppingCartItem.pizza);
      }
    }
  };

  listElement.innerHTML = `
    <span class="title">${shoppingCartItem.pizza.title}</span>
    <button  class="cart-decrease-button">-</button>
    <span class="amount">${shoppingCartItem.amount}</span>
    <button class="cart-increase-button">+</button>
    <span class="price">${currency(shoppingCartItem.price)}</span>
  `;
  return listElement;
};

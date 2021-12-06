import {
  renderAmount,
  renderCartList,
  renderTotal,
} from "./render/shopping-cart.render";
import { renderPizzaList } from "./render/pizza.render";
import { shoppingCartStore } from "./store/shopping-cart.store";

/**
 * Main bootstrap function of our little pizza shop.
 */
function main() {
  renderPizzaList();
  renderCartList();
  renderAmount();
  renderTotal();

  // TODO: Listen to changes in the cart store and rerender the shopping cart
  shoppingCartStore.subscribe(() => {
    renderCartList();
    renderAmount();
    renderTotal();
  });
}

main();

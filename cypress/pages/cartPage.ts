import { WebElement } from './types';
import BasePage from "./basePage";

class CartPage extends BasePage{
    get cartItemSelector(): string {
        return '[class="cart_item"]';
    }

    get removeButtonSelector(): string {
        return 'button[data-test*="remove"]';
    }

    get cartItem(): WebElement {
        return cy.get(this.cartItemSelector);
    }

    get cartItemQauntity(): WebElement {
        return cy.get('[class="cart_quantity"]');
    }

    get cartItemLabel(): WebElement {
        return cy.get('[class="cart_item_label"]');
    }

    get continueShoppingButton(): WebElement {
        return cy.get('[data-test="continue-shopping"]');
    }

    get checkoutButton(): WebElement {
        return cy.get('[data-test="checkout"]');
    }

    getCartItemByName(name: string): WebElement {
        return this.cartItem.contains(name).closest(this.cartItemSelector);
    }

    visit(): void{
        cy.visit('/cart.html');
    }

    removeItemFromCart(name: string): void {
        this.getCartItemByName(name).find(this.removeButtonSelector).click();
    }

}
export default CartPage

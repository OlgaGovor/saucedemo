import BasePage from "./basePage";
import {WebElement} from "./types";
import cartPage from "./cartPage";

class CheckoutCompletePage extends cartPage {
    get checkoutCompleteContainer(): WebElement {
        return cy.get('[id="checkout_complete_container"]')
    }

    get completeHeader(): WebElement {
        return cy.get('[class="complete-header"]')
    }

    get completeText(): WebElement {
        return cy.get('[class="complete-text"]')
    }

    get backButton(): WebElement {
        return cy.get('[data-test="back-to-products"]')
    }

    visit() {
        cy.visit('/checkout-complete.html')
    }

    validateCompletePage(): void {
        this.completeHeader.should('have.text', 'Thank you for your order!');
        this.completeText.should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        this.backButton.should('be.visible').should('have.text', 'Back Home');
    }
}

export default CheckoutCompletePage;

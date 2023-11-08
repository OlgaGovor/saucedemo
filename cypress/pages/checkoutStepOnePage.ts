import BasePage from "./basePage";
import {WebElement} from "./types";

class CheckoutStepOnePage extends BasePage {
    get fisrtNameInput(): WebElement{
        return cy.get('[data-test="firstName"]')
    }

    get lastNameInput(): WebElement{
        return cy.get('[data-test="lastName"]')
    }

    get postalCodeInput(): WebElement{
        return cy.get('[data-test="postalCode"]')
    }

    get cancelButton(): WebElement{
        return cy.get('[data-test="cancel"]')
    }

    get continueButton(): WebElement{
        return cy.get('[data-test="continue"]')
    }


    visit() {
        cy.visit('/checkout-step-one.html')
    }

    fillCheckoutInfo(): void {
        this.fisrtNameInput.type('Name');
        this.lastNameInput.type('Lastname');
        this.postalCodeInput.type('12345');
    }
}

export default CheckoutStepOnePage;

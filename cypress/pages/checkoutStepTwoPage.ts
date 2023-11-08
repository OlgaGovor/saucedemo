import BasePage from "./basePage";
import {WebElement} from "./types";
import cartPage from "./cartPage";

class CheckoutStepOnePage extends cartPage {
    get cancelButton(): WebElement{
        return cy.get('[data-test="cancel"]')
    }

    get finishButton(): WebElement {
        return cy.get('[data-test="finish"]')
    }

    get summaryInfoSection(): WebElement {
        return cy.get('[class="summary_info"]')
    }

    visit() {
        cy.visit('/checkout-step-two.html')
    }


}

export default CheckoutStepOnePage;

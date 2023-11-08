import { WebElement } from './types';

class BasePage {
    get pageTitle(): WebElement {
        return cy.get('[class="title"]');
    }

    visit(): void{
        cy.visit('/');
    }

    validateCurrentUrl(url: string) {
        cy.url().should('include', url);
    }

    validatePageTitle(title: string) {
        this.pageTitle.should('have.text', title);
    }
}
export default BasePage

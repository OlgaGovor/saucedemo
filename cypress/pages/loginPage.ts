import { WebElement } from './types';

class LoginPage {
    get usernameInput(): WebElement {
        return cy.get('[data-test="username"]');
    }

    get passowrdInput(): WebElement {
        return cy.get('[data-test="password"]');
    }

    get loginButton(): WebElement {
        return cy.get('[data-test="login-button"]')
    }

    get error(): WebElement {
        return cy.get('[data-test="error"]')
    }

    visit(): void{
        cy.visit('/');
    }

    login(username: string, password: string): void {
        this.usernameInput.type(username);
        this.passowrdInput.type(password);
        this.loginButton.click();
    }
}
export default LoginPage

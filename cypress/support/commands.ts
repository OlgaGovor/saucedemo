// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable<> {
            emulateLogin(): Chainable;
        }
    }
}

Cypress.Commands.add('emulateLogin', () => {
    cy.setCookie(
        'session-username',
        'error_user',
        { hostOnly: true }
    );
});

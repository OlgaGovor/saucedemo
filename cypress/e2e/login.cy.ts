import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Login Page', () => {
  beforeEach(() => {
    cy.clearCookies();
  })

  it('Valid login', () => {
    const username = 'standard_user';
    const password = 'secret_sauce';
    loginPage.visit();
    loginPage.login(username, password);

    inventoryPage.validatePageTitle('Products');
    inventoryPage.validateInventoryPage();
  })

  it('Invalid login', () => {
    const username = 'incorrect_user';
    const password = 'imcorrect_password';
    loginPage.visit();
    loginPage.login(username, password);

    loginPage.error.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })
})

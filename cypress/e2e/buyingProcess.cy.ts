import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import CartPage from "../pages/cartPage";
import CheckoutStepOnePage from "../pages/checkoutStepOnePage";
import CheckoutStepTwoPage from "../pages/checkoutStepTwoPage";
import CheckoutCompletePage from "../pages/checkoutCompletePage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutCompletePage = new CheckoutCompletePage();

describe('Inventory Page', () => {
    beforeEach(() =>{
        cy.clearCookies();
        loginPage.visit();
    })

    it('Validate adding to cart of 1 item by Standart User', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';
        const itemName = 'Sauce Labs Fleece Jacket';

        loginPage.login(username, password)
        inventoryPage.validateInventoryPage();
        inventoryPage.addToCartByName(itemName);
        inventoryPage.getAddToCartButtonByName(itemName).should('have.text', 'Remove');
        inventoryPage.shoppingCartContainer.should('have.text', '1');

        inventoryPage.shoppingCartContainer.click();
        cartPage.validatePageTitle('Your Cart');

        cartPage.cartItem.should('have.length', 1);
        cartPage.cartItemQauntity.should('have.text', 1);
        cartPage.cartItemLabel.should('contains.text', itemName);
        cartPage.checkoutButton.click();

        checkoutStepOnePage.validatePageTitle('Checkout: Your Information');
        checkoutStepOnePage.fillCheckoutInfo();
        checkoutStepOnePage.cancelButton.should('be.visible');
        checkoutStepOnePage.continueButton.click();

        checkoutStepTwoPage.validateCurrentUrl('/checkout-step-two.html');
        checkoutStepTwoPage.validatePageTitle('Checkout: Overview');
        checkoutStepTwoPage.summaryInfoSection.should('be.visible');
        checkoutStepTwoPage.cartItem.should('have.length', 1);
        checkoutStepTwoPage.cartItemQauntity.should('have.text', 1);
        checkoutStepTwoPage.cartItemLabel.should('contains.text', itemName);
        checkoutStepTwoPage.cancelButton.should('be.visible');
        checkoutStepTwoPage.finishButton.click();

        checkoutCompletePage.validateCompletePage();
    })

    it('Validate adding to cart all items', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';
        const itemsName = ['Sauce Labs Fleece Jacket', 'Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];

        loginPage.login(username, password)
        inventoryPage.validateInventoryPage();
        let itemsInCart = 0;
        itemsName.forEach(itemName => {
            inventoryPage.addToCartByName(itemName);
            itemsInCart++;
            inventoryPage.getAddToCartButtonByName(itemName).should('have.text', 'Remove');
            inventoryPage.shoppingCartContainer.should('have.text', itemsInCart);

        })

        inventoryPage.shoppingCartContainer.click();
        cartPage.validatePageTitle('Your Cart');

        cartPage.cartItem.should('have.length', itemsName.length);
    });

    it('Delete items from cart', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';
        const itemsName = ['Sauce Labs Fleece Jacket', 'Sauce Labs Backpack', 'Sauce Labs Bike Light'];

        loginPage.login(username, password)
        inventoryPage.validateInventoryPage();
        let itemsInCart = 0;
        itemsName.forEach(itemName => {
            inventoryPage.addToCartByName(itemName);
            itemsInCart++;
            inventoryPage.getAddToCartButtonByName(itemName).should('have.text', 'Remove');
            inventoryPage.shoppingCartContainer.should('have.text', itemsInCart);

        })

        inventoryPage.shoppingCartContainer.click();
        cartPage.validatePageTitle('Your Cart');

        cartPage.cartItem.should('have.length', itemsName.length);
        cartPage.removeItemFromCart(itemsName[0]);
        cartPage.cartItem.should('have.length', itemsName.length-1);
    });

    it('Validate failed adding to cart by Error User', () => {
        const username = 'error_user';
        const password = 'secret_sauce';
        const itemName = 'Sauce Labs Fleece Jacket';

        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('Failed to add item to the cart.')
            return false;
        })

        loginPage.login(username, password)
        inventoryPage.validateInventoryPage();
        inventoryPage.addToCartByName(itemName);
    })
})

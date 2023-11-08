import { WebElement } from './types';
import BasePage from "./basePage";

class InventoryPage extends BasePage{
    get inventoryItemSelector(): string {
        return '[class="inventory_item"]'
    }

    get inventoryItemButtonSelector(): string {
        return 'button';
    }

    get headerContainer(): WebElement {
        return cy.get('[id="header_container"]');
    }

    get inventoryContainer(): WebElement {
        return cy.get('[id="inventory_container"]');
    }

    get inventoryItems(): WebElement {
        return cy.get(this.inventoryItemSelector)
    }

    get inventoryItemImages(): WebElement {
        return this.inventoryItems.find('[class="inventory_item_img]')
    }

    get inventoryItemDescriptions(): WebElement {
        return this.inventoryItems.find('[class="inventory_item_description]')
    }

    get shoppingCartContainer(): WebElement {
        return cy.get('[id="shopping_cart_container"]');
    }

    getInventoryItemByName(name: string): WebElement {
        return this.inventoryItems.contains(name).closest(this.inventoryItemSelector);
    }

    getAddToCartButtonByName(name: string): WebElement {
        return this.getInventoryItemByName(name).find(this.inventoryItemButtonSelector);
    }

    visit(): void{
        cy.visit('/inventory.html', {failOnStatusCode: false});
    }

    validateInventoryPage(): void {
        this.validateCurrentUrl('/inventory.html');
        this.headerContainer.should('be.visible');
        this.inventoryContainer.should('be.visible');
    }

    addToCartByName(name: string): void {
        this.getAddToCartButtonByName(name).click();
    }

}
export default InventoryPage

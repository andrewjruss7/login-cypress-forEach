class InventoryPO {
  elements = {
    inventoryTitle: () => cy.get('.title'),
  };

  assertInventoryTitle() {
    return this.elements.inventoryTitle();
  }
}

export default InventoryPO;
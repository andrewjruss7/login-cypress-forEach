import LoginPage from '../pages/loginPO';
import InventoryPO from '../pages/inventoryPO';
import HomePage from '../pages/homePO';

const credentials = require('../../fixtures/credentials.json');
describe('Login with .forEach()', function() {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPO();
  const homePage = new HomePage();
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  // Andrew es chévere!

  credentials.forEach(test => {

    it(test.name, () => {
      loginPage.insertUsername().type(test.username);
      loginPage.insertPassword().type(test.password);
      loginPage.buttonLogin().click();

      if (test.name === 'Should login to inventory page') {
        inventoryPage.assertInventoryTitle().should('have.text', test.expected);
      } else {
        homePage.errorMessageLogin().should('have.text', test.expected);
      }
    });
  });
});

// Viva la libertad carajo!
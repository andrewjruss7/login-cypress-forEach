class HomePage {
  elements = {
    errorMessageLogin: () => cy.get('[data-test="error"]'),
  };

  errorMessageLogin() {
    return this.elements.errorMessageLogin();
  }
}

export default HomePage;
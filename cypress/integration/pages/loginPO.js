class LoginPage {
  elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    buttonLogin: () => cy.get('[data-test="login-button"]'),
  };

  insertUsername() {
    return this.elements.username();
  }

  insertPassword() {
    return this.elements.password();
  }

  buttonLogin() {
    return this.elements.buttonLogin();
  }
}

export default LoginPage;
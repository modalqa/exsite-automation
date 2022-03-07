const url = Cypress.config('exURL');

describe('UI Login Exsite', () => {
  beforeEach(() => {
    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  })

  it('login with an unregistered user', () => {

    cy.contains('Sign In')
      .click();

    cy.get('[name="email"]')
      .type('aa@email.com')

    cy.get('[name="password"]')
      .type('123456')

    cy.get('button')
      .contains('Sign In')
      .click()
      .wait(200)

    cy.contains('Login Failed!')

  })
  it('login with an registered user', () => {

    cy.contains('Sign In')
      .click();

    cy.get('[name="email"]')
      .type('depfaris@gmail.com')

    cy.get('[name="password"]')
      .type('Cermat@123')

    cy.get('button')
      .contains('Sign In')
      .click()

    cy.contains('Administrator').wait(200)

  })

  it('logout', () => {

    cy.contains('Sign In')
      .click();

    cy.get('[name="email"]')
      .type('depfaris@gmail.com')

    cy.get('[name="password"]')
      .type('Cermat@123')

    cy.get('button')
      .contains('Sign In')
      .click()

    cy.contains('Administrator').wait(200)

    cy.contains('Administrator')
      .click()
      .wait(200)

    cy.contains('Logout')
      .click()

    cy.contains('LOGOUT Success ..')
      .wait(200)

  })
})
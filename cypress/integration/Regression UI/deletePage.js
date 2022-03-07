const url = Cypress.config('exURL');

describe('Delete Page', () => {
    beforeEach(() => {
        cy.visit(url)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    it('Delete', () => {

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

        cy.get('section > div > div:nth-child(2) > a > div > div')
            .click()
            .wait(200)

        cy.get('button')
            .contains('Delete')
            .click()
            .wait(200)

        cy.contains('Privacy Policy Has been Deleted!')
            .wait(200)

    })
})
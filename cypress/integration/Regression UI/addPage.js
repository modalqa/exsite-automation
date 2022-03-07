const url = Cypress.config('exURL');

describe('Add Page', () => {
    beforeEach(() => {
        cy.visit(url)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    it('Add Page and Publish', () => {

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

        cy.get('span')
            .contains('Add new page')
            .click()
            .wait(300)

        cy.get('[name="judul"]')
            .type('Syarat dan Ketentuan')

        cy.get('[role="textbox"]')
            .type('{del}{selectall}{backspace}Jika anda ingin mempublish halaman complience seperti privacy policy secara gratis, coba regitrasi dan login ke exsite.app')
            .wait(200)

        cy.get('button')
            .contains('Publish Page')
            .click()
            .wait(200)

        cy.contains('New policy has been created !')

    })

    it('Preview and Copy Link', () => {

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

        cy.contains('View Page')
            .click()

        cy.contains('Dashboard').click()

        cy.contains('Administrator')
            .click()
            .wait(200)

        cy.contains('Logout')
            .click()

        cy.contains('LOGOUT Success ..')
            .wait(200)

    })
})
describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test Subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-form')
        cy.get('@subscribe-form').type('priantibanik@gmail.com')
        cy.contains(/Successfully subbed: priantibanik@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: priantibanik@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: priantibanik@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-form').type('priantibanik@gmail.io')
        cy.contains(/Invalid Email: priantibanik@gmail.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid Email: priantibanik@gmail.io!/i).should('exist')

        cy.wait(3000)
        cy.contains(/Invalid Email: priantibanik@gmail.io!/i).should('not.exist')
        
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')

    })
})
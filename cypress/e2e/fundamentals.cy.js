describe('fundamental test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  // it('passes', () => {
  it('Contains correct header text', () => {
    // cy.visit('http://localhost:3000/fundamentals')
    // cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i) // contains take string so there also use /
    //i use for case sensitivity
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals')
    cy.should('contain.text', 'Testing Fundamentals')
  })

  it('Accordion works correctly', () => {
    // cy.visit('/fundamentals')
    // cy.contains('Best Practice').should('not.exist')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
    cy.contains(/Use stable selectors/i).should('not.be.visible')
  })
  // it('Accordion works correctly', () => {
  //   cy.get('[data-test="accordion-item-1"]').should('exist').within(() => {
  //     cy.get('div[role="button"]').click()
  //   })
  //   cy.contains(/your test will exists in a describe block/i).should('be.visible')
  
  //   cy.get('[data-test="accordion-item-1"]').should('exist').within(() => {
  //     cy.get('div[role="button"]').click()
  //   })
  //   cy.contains(/your test will exists in a describe block/i).should('not.be.visible')
  // })
  
})
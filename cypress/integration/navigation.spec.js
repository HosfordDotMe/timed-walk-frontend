context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.navbar')
      .contains('Timed Walk Test')
      .click();
  });

  it('has link to new test that shows when active', () => {
    cy.get('.navbar')
      .contains('Perform a Test')
      .should('not.have.class', 'active')
      .click();
    cy.location('pathname').should('include', 'new-test');
    cy.get('.navbar')
      .contains('Perform a Test')
      .should('have.class', 'active');
  });

  it('has link to results that shows when active', () => {
    cy.get('.navbar')
      .contains('View Previous Results')
      .should('not.have.class', 'active')
      .click();
    cy.location('pathname').should('include', 'results');
    cy.get('.navbar')
      .contains('View Previous Results')
      .should('have.class', 'active');
  });
});

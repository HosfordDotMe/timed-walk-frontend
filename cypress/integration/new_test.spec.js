const todaysDate = Cypress.moment().format('YYYY-MM-DD');
const patientDOB = Cypress.moment()
  .subtract(30, 'years')
  .format('YYYY-MM-DD');

context('Perform a Test', () => {
  it('validates error messages', () => {
    cy.visit('/new-test');
    // Validates name is required
    cy.get('form').submit();
    cy.get('.field-error').contains('A valid patient name is required');
    cy.get('[name=patientName]').type('Cypress Test');
    cy.get('form').submit();
    // Second Page
    // Validates date is required
    cy.get('[name=testDate]')
      .clear()
      .blur();
    cy.get('.field-error').contains('A valid test date is required');
    cy.get('[name=testDate]').type(todaysDate);
    // Validates distance is required
    cy.get('[name=testDistance]')
      .clear()
      .blur();
    cy.get('.field-error').contains('A valid test distance is required');
    cy.get('[name=testDistance]').type('10');
    cy.get('form').submit();
    // Third Page
    cy.get('form').submit();
    cy.get('.field-error').contains('A valid elapsed time is required');
  });

  it('records a new test with all fields completed', () => {
    cy.visit('/new-test');
    cy.get('[name=patientName]').type('Cypress Test');
    cy.get('[name=patientHeight]').type('180');
    cy.get('[name=patientWeight]').type('100');
    cy.get('[name=patientDOB]').type(patientDOB);
    cy.get('[name=patientNotes]').type('Patient Notes');
    cy.get('form').submit();
    // Prefilled Values for date and distance
    cy.get('[name=testNotes]').type('Test Notes');
    cy.get('form').submit();
    cy.get('[name=completionTime]').type('10');
    cy.get('[name=completionNotes]').type('Completion Notes');
    cy.get('form').submit();
    // Validate redirect
    cy.location('pathname').should('include', '/test/');

    // This is was used to get initial value
    cy.get('.card-body').then(pre => {
      const testText = pre.text();
      cy.log(testText);
    });

    // Validate pre tag text - This can be brittle
    cy.get('.card-body > pre').contains(
      'Patient Name: Cypress TestPatient DOB: 10/6/1989Patient Height: 180 cmPatient Weight: 100 kgPatient Notes: Patient NotesTest Date: 10/7/2019Test Distance: 10 mTest Notes: Test NotesElapsed Time: 10 secondsSpeed: 1.00 m/sPost-Test Notes: Completion Notes'
    );
  });
});
